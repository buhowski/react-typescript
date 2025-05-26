// src/components/Slider.tsx
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Copyright from './Copyright';
import PopupContacts from './PopupContacts';
import { useTabletLargeQuery } from '../config/useMediaQuery';
import { playIcon } from '../pages/startups/assets/svg/playIcon';
import { SliderProps } from '../types/common';
import { useVideoPlayback } from '../pages/startups/helpers/VideoPlaybackContext'; // Import the new hook

// Helper functions
const isYouTubeUrl = (url?: string) => url?.includes('youtube.com/') || url?.includes('youtu.be/');
const isDirectVideoFile = (url?: string) => url?.match(/\.(mp4|webm|ogg)$/i);

// VideoPreview component (remains the same)
const VideoPreview: React.FC<{
	itemPoster?: string;
	itemAlt?: string;
	itemTitle?: string;
	onClick: () => void;
}> = ({ itemPoster, itemAlt, itemTitle, onClick }) => (
	<div className='video-preview' onClick={onClick}>
		{itemPoster && <img src={itemPoster} alt={itemAlt || itemTitle} />}
		{playIcon}
		<p className='video-preview__title'>{itemAlt || itemTitle}</p>
	</div>
);

const Slider: React.FC<SliderProps> = ({ slides, currentLanguage }) => {
	const useTabletLarge = useTabletLargeQuery();
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPlayingVideo, setIsPlayingVideo] = useState(false);
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const iframeRef = useRef<HTMLIFrameElement | null>(null);

	const { registerPlayer, unregisterPlayer, stopAllOtherVideos } = useVideoPlayback();

	// Generate a unique ID for this slider instance
	const instanceId = useMemo(() => `slider-${Math.random().toString(36).substr(2, 9)}`, []);

	// Controls for this specific player
	const playerControls = useMemo(
		() => ({
			pauseVideo: () => {
				if (videoRef.current) videoRef.current.pause();
				if (iframeRef.current)
					iframeRef.current.contentWindow?.postMessage(
						'{"event":"command","func":"pauseVideo","args":""}',
						'*'
					);
			},
			resetVideo: () => {
				if (videoRef.current) videoRef.current.currentTime = 0;
				if (iframeRef.current) iframeRef.current.src = ''; // Force unload YouTube iframe
				setIsPlayingVideo(false);
			},
		}),
		[]
	);

	// Register and unregister the player with the context
	useEffect(() => {
		registerPlayer(instanceId, playerControls);
		return () => {
			unregisterPlayer(instanceId);
		};
	}, [instanceId, registerPlayer, unregisterPlayer, playerControls]);

	// Handle playing a video
	const handlePlayVideo = useCallback(() => {
		stopAllOtherVideos(instanceId);
		setTimeout(() => {
			setIsPlayingVideo(true);
		}, 50);
	}, [instanceId, stopAllOtherVideos]);

	// Pause video whenever the set of slides changes or the active slide index changes.
	useEffect(() => {
		playerControls.resetVideo(); // Use the provided reset function
	}, [slides, activeIndex, playerControls]);

	const handleNext = useCallback(() => {
		if (slides.length <= 1) return;
		setActiveIndex((prev) => (prev + 1) % slides.length);
	}, [slides.length]);

	const handlePrev = useCallback(() => {
		if (slides.length <= 1) return;
		setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
	}, [slides.length]);

	// Determine the content to render inside the common wrapper
	let sliderInnerContent: React.ReactNode;

	if (!slides.length) {
		// Case 1: No slides available
		sliderInnerContent = (
			<div className='slider-wrapper disabled'>
				<div className='slider-wrapper__empty slider-js'>No Examples Yet</div>
				<div className='slider-actions'>{!useTabletLarge && <Copyright />}</div>
			</div>
		);
	} else {
		const validatedActiveIndex = activeIndex >= slides.length ? 0 : activeIndex;
		const currentSlide = slides[validatedActiveIndex];

		if (!currentSlide) {
			// Case 2a: Current slide is unexpectedly undefined (error fallback)
			console.error(
				'Slider: currentSlide is unexpectedly undefined after validation. Index:',
				validatedActiveIndex,
				' Slides:',
				slides
			);
			sliderInnerContent = (
				<div className='slider-wrapper disabled'>
					<div className='slider-wrapper__empty slider-js'>Error loading content</div>
					<div className='slider-actions'>{!useTabletLarge && <Copyright />}</div>
				</div>
			);
		} else {
			// Case 2b: Valid slide content to render
			const isVideo = isYouTubeUrl(currentSlide.itemSrc) || isDirectVideoFile(currentSlide.itemSrc);

			sliderInnerContent = (
				<div className={`slider-wrapper ${slides.length > 1 ? '' : 'disabled'}`}>
					<div className='idea-slider slider-js'>
						<div className='slider-item-js' data-active={true}>
							{isVideo ? (
								isPlayingVideo ? (
									isYouTubeUrl(currentSlide.itemSrc) ? (
										<iframe
											ref={iframeRef}
											width='100%'
											height='100%'
											src={`${currentSlide.itemSrc}${
												currentSlide.itemSrc?.includes('?') ? '&' : '?'
											}autoplay=1&enablejsapi=1`} // Add enablejsapi=1 for YouTube API control
											title={currentSlide.itemTitle || currentSlide.itemAlt}
											allow='autoplay; encrypted-media'
											allowFullScreen
											style={{ border: 'none' }}
										/>
									) : (
										<video
											ref={videoRef}
											width='100%'
											height='100%'
											controls
											autoPlay
											playsInline
											preload='none'
										>
											<source src={currentSlide.itemSrc} type='video/mp4' />
											Your browser does not support the video tag.
										</video>
									)
								) : (
									<VideoPreview
										itemPoster={currentSlide.itemPoster}
										itemAlt={currentSlide.itemAlt}
										itemTitle={currentSlide.itemTitle}
										onClick={handlePlayVideo} // Use the new handler
									/>
								)
							) : (
								<>
									<img
										src={currentSlide.itemSrc}
										alt={currentSlide.itemTitle || currentSlide.itemAlt}
									/>
									{currentSlide.itemTitle && (
										<p className='video-preview__title'>{currentSlide.itemTitle}</p>
									)}
								</>
							)}
						</div>
					</div>

					<div className='slider-actions'>
						{!useTabletLarge && <Copyright />}

						<button
							className='slider-btn-js slider-btn-js-prev'
							type='button'
							aria-label='Go to previous slide'
							onClick={handlePrev}
							disabled={slides.length <= 1}
						>
							<i className='chevron' />
						</button>

						<span className='slides-number h2'>
							{`${validatedActiveIndex + 1 < 10 ? '0' : ''}${validatedActiveIndex + 1} / ${
								slides.length < 10 ? '0' : ''
							}${slides.length}`}
						</span>

						<button
							className='slider-btn-js slider-btn-js-next'
							type='button'
							aria-label='Go to next slide'
							onClick={handleNext}
							disabled={slides.length <= 1}
						>
							<i className='chevron' />
						</button>
					</div>
				</div>
			);
		}
	}

	// Render the common outer structure and the determined inner content
	return (
		<div className='slider-with-btn'>
			<div className='slider-container'>
				{sliderInnerContent}

				{!useTabletLarge && <PopupContacts currentLanguage={currentLanguage} />}
			</div>
		</div>
	);
};

export default Slider;
