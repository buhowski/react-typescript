import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Copyright from './Copyright';
import PopupContacts from './PopupContacts';
import { useTabletLargeQuery } from '../config/useMediaQuery';
import { playIcon } from '../assets/svg/playIcon';
import { SliderProps, VideoPreviewProps } from '../types/common';
import { useVideoPlayback } from '../pages/startups/helpers/VideoPlaybackContext';
import Preloader from './Preloader';

// Helper function to detect iOS mobile devices
const isMobileDevice = (): boolean => {
	if (typeof navigator === 'undefined') {
		return false;
	}
	const userAgent = navigator.userAgent;
	return /iPad|iPhone|iPod/.test(userAgent);
};

// YouTube embed URL with necessary parameters
const buildYouTubeEmbedSrc = (url: string | undefined): string => {
	if (!url) return '';
	const separator = url.includes('?') ? '&' : '?';

	let params = 'autoplay=1&enablejsapi=1';

	if (isMobileDevice()) {
		params += '&mute=1';
	}

	return `${url}${separator}${params}`;
};

// Videos Helper functions
const isYouTubeUrl = (url?: string) => {
	if (!url) return false;
	const youtubeRegex =
		/^(https?:\/\/)?(www\.youtube\.com\/embed\/|youtu\.be\/|www\.youtube-nocookie\.com\/embed\/)[\w-]{11}(\?.*)?$/;
	return youtubeRegex.test(url);
};
const isDirectVideoFile = (url?: string) => url?.match(/\.(mp4|webm|ogg)$/i);

// VideoPreview component
const VideoPreview: React.FC<VideoPreviewProps> = ({
	itemPoster,
	itemAlt,
	itemCaption,
	onClick,
	onLoad,
}) => (
	<div className='video-preview' onClick={onClick}>
		{itemPoster && <img src={itemPoster} alt={itemAlt} onLoad={onLoad} />}
		<p className='video-preview__title'>{itemCaption}</p>
		{playIcon}
	</div>
);

const Slider: React.FC<SliderProps> = ({ slides }) => {
	const useTabletLarge = useTabletLargeQuery();
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPlayingVideo, setIsPlayingVideo] = useState(false);
	const [isContentLoading, setIsContentLoading] = useState(false);
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const iframeRef = useRef<HTMLIFrameElement | null>(null);

	const { registerPlayer, unregisterPlayer, stopAllOtherVideos } = useVideoPlayback();

	const instanceId = useMemo(() => `slider-${Math.random().toString(36).substring(2, 11)}`, []);

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
				if (videoRef.current) {
					videoRef.current.src = '';
					videoRef.current.load();
				}
				if (iframeRef.current) {
					iframeRef.current.src = '';
				}
				setIsPlayingVideo(false);
			},
		}),
		[]
	);

	const currentSlide = useMemo(() => {
		const validatedActiveIndex = activeIndex >= slides.length ? 0 : activeIndex;
		return slides[validatedActiveIndex];
	}, [slides, activeIndex]);

	useEffect(() => {
		registerPlayer(instanceId, playerControls);
		return () => {
			unregisterPlayer(instanceId);
		};
	}, [instanceId, registerPlayer, unregisterPlayer, playerControls]);

	const handlePlayVideo = useCallback(() => {
		stopAllOtherVideos(instanceId);
		setIsPlayingVideo(true);
	}, [instanceId, stopAllOtherVideos]);

	const handleContentLoad = useCallback(() => {
		setIsContentLoading(false);
	}, []);

	useEffect(() => {
		playerControls.resetVideo();
		// This effect now only resets the video on slide change,
		// and doesn't trigger the preloader for cached images.
	}, [currentSlide, playerControls]);

	useEffect(() => {
		setActiveIndex(0);
	}, [slides]);

	const handleNextWithLoader = useCallback(() => {
		if (slides.length <= 1) return;
		const hasImage =
			currentSlide?.itemPoster ||
			(!isYouTubeUrl(currentSlide?.itemSrc) &&
				!isDirectVideoFile(currentSlide?.itemSrc) &&
				currentSlide?.itemSrc);
		if (hasImage) {
			setIsContentLoading(true);
		}
		setActiveIndex((prev) => (prev + 1) % slides.length);
	}, [slides.length, currentSlide]);

	const handlePrevWithLoader = useCallback(() => {
		if (slides.length <= 1) return;
		const hasImage =
			currentSlide?.itemPoster ||
			(!isYouTubeUrl(currentSlide?.itemSrc) &&
				!isDirectVideoFile(currentSlide?.itemSrc) &&
				currentSlide?.itemSrc);
		if (hasImage) {
			setIsContentLoading(true);
		}
		setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
	}, [slides.length, currentSlide]);

	let sliderInnerContent: React.ReactNode;

	if (!slides.length) {
		sliderInnerContent = (
			<div className='slider-wrapper disabled'>
				<div className='slider-wrapper__empty slider-js'>No Examples Yet</div>
				<div className='slider-actions'>{!useTabletLarge && <Copyright />}</div>
			</div>
		);
	} else {
		if (!currentSlide) {
			console.error(
				'Slider: currentSlide is unexpectedly undefined after validation. Index:',
				activeIndex,
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
			const isVideo = isYouTubeUrl(currentSlide.itemSrc) || isDirectVideoFile(currentSlide.itemSrc);

			sliderInnerContent = (
				<div className={`slider-wrapper ${slides.length > 1 ? '' : 'disabled'}`}>
					<div className='idea-slider slider-js'>
						{isContentLoading && !isPlayingVideo && (
							<div className='slider-loader'>
								<Preloader />
							</div>
						)}
						<div
							className='slider-item-js'
							data-active={true}
							style={{ opacity: isContentLoading && !isPlayingVideo ? 0 : 1 }}
						>
							{isVideo ? (
								isPlayingVideo ? (
									isYouTubeUrl(currentSlide.itemSrc) ? (
										<iframe
											ref={iframeRef}
											width='100%'
											height='100%'
											style={{ border: 'none' }}
											src={buildYouTubeEmbedSrc(currentSlide.itemSrc)}
											title={currentSlide.itemAlt}
											allow='autoplay; encrypted-media'
											allowFullScreen
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
											title={currentSlide.itemAlt}
											src={currentSlide.itemSrc}
										>
											Your browser does not support the video tag.
										</video>
									)
								) : (
									<VideoPreview
										itemPoster={currentSlide.itemPoster}
										itemAlt={currentSlide.itemAlt}
										itemCaption={currentSlide.itemCaption}
										onClick={handlePlayVideo}
										onLoad={handleContentLoad}
									/>
								)
							) : (
								<>
									<img
										src={currentSlide.itemSrc}
										alt={currentSlide.itemAlt}
										onLoad={handleContentLoad}
									/>
									{currentSlide.putImgTitle && (
										<p className='video-preview__title'>{currentSlide.itemCaption}</p>
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
							onClick={handlePrevWithLoader}
							disabled={slides.length <= 1}
						>
							<i className='chevron' />
						</button>
						<span className='slides-number h2'>
							{`${activeIndex + 1 < 10 ? '0' : ''}${activeIndex + 1} / ${
								slides.length < 10 ? '0' : ''
							}${slides.length}`}
						</span>
						<button
							className='slider-btn-js slider-btn-js-next'
							type='button'
							aria-label='Go to next slide'
							onClick={handleNextWithLoader}
							disabled={slides.length <= 1}
						>
							<i className='chevron' />
						</button>
					</div>
				</div>
			);
		}
	}

	return (
		<div className='slider-with-btn'>
			<div className='slider-container'>
				{sliderInnerContent}
				{!useTabletLarge && <PopupContacts />}
			</div>
		</div>
	);
};

export default Slider;
