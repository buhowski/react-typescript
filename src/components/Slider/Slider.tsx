import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import Copyright from '../Copyright';
import PopupContacts from '../PopupContacts';
import { useTabletLargeQuery } from '../../config/useMediaQuery';
import { playIcon } from '../../pages/startups/assets/svg/playIcon';

interface SlideItem {
	itemSrc?: string;
	itemAlt?: string;
	itemPoster?: string;
	itemTitle?: string;
}

interface SliderProps {
	dataSlider: {
		[key: string]: {
			sliderContent: SlideItem[];
		}[];
	};
	currentLanguage: string;
	isActive?: number;
}

const isYouTubeUrl = (url?: string) => url?.includes('youtube.com') || url?.includes('youtu.be');
// Helper to check if it's a direct video file based on common extensions
const isDirectVideoFile = (url?: string) => url?.match(/\.(mp4|webm|ogg)$/i);

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

const Slider: React.FC<SliderProps> = ({ dataSlider, currentLanguage, isActive }) => {
	const useTabletLarge = useTabletLargeQuery();
	const [activeIndices, setActiveIndices] = useState<number[]>([]);
	const [playStates, setPlayStates] = useState<boolean[][]>([]);

	// Decide which language to display, fallback to default or first key
	const displayedLanguage = useMemo(() => {
		return dataSlider?.[currentLanguage]?.length
			? currentLanguage
			: Object.keys(dataSlider || {})[0] || 'en';
	}, [dataSlider, currentLanguage]);

	const languageGroups = useMemo(
		() => dataSlider?.[displayedLanguage] || [],
		[dataSlider, displayedLanguage]
	);

	// Groups to render: either one active group or all
	const groupsToRender = useMemo(() => {
		if (!languageGroups.length) return [];
		return typeof isActive === 'number' && isActive >= 0 && isActive < languageGroups.length
			? [languageGroups[isActive]]
			: languageGroups;
	}, [languageGroups, isActive]);

	// Pause all videos helper (simply resets playStates for iframes)
	const pauseAllVideos = useCallback(() => {
		// For iframes, "pausing" means unmounting them by setting their play state to false.
		setPlayStates((prev) => prev.map((group) => group.map(() => false)));
	}, []);

	// Reset states when language groups change or active slide changes (if needed)
	useEffect(() => {
		const groupCount = languageGroups.length;
		setActiveIndices(Array(groupCount).fill(0));
		setPlayStates(languageGroups.map((g) => Array(g.sliderContent.length).fill(false)));
		pauseAllVideos();
	}, [languageGroups, pauseAllVideos]);

	// Pause videos when isActive changes (without resetting indices)
	useEffect(() => {
		pauseAllVideos();
	}, [isActive, pauseAllVideos]);

	// Slide navigation handlers
	const handleNext = useCallback(
		(groupIndex: number) => {
			const group = languageGroups[groupIndex];
			if (!group || group.sliderContent.length <= 1) return;

			setActiveIndices((prev) =>
				prev.map((i, gi) => (gi === groupIndex ? (i + 1) % group.sliderContent.length : i))
			);
			pauseAllVideos();
		},
		[languageGroups, pauseAllVideos]
	);

	const handlePrev = useCallback(
		(groupIndex: number) => {
			const group = languageGroups[groupIndex];
			if (!group || group.sliderContent.length <= 1) return;

			setActiveIndices((prev) =>
				prev.map((i, gi) =>
					gi === groupIndex ? (i - 1 + group.sliderContent.length) % group.sliderContent.length : i
				)
			);
			pauseAllVideos();
		},
		[languageGroups, pauseAllVideos]
	);

	if (!groupsToRender.length) return null;

	return (
		<div className='slider-with-btn'>
			<div className='slider-container'>
				{groupsToRender.map((group, renderedIndex) => {
					const actualGroupIndex = typeof isActive === 'number' ? isActive : renderedIndex;
					const groupData = languageGroups[actualGroupIndex];

					// Render fallback if no content
					if (!groupData || !groupData.sliderContent.length) {
						return (
							<div className='slider-wrapper disabled' key={`empty-${actualGroupIndex}`}>
								<div className='slider-wrapper__empty slider-js'>No Examples Yet</div>
								<div className='slider-actions'>{!useTabletLarge && <Copyright />}</div>
							</div>
						);
					}

					const currentSlideIndex = activeIndices[actualGroupIndex];

					return (
						<div
							className={`slider-wrapper ${groupData.sliderContent.length > 1 ? '' : 'disabled'}`}
							key={`group-${actualGroupIndex}`}
						>
							<div className='idea-slider slider-js'>
								{groupData.sliderContent.map(
									({ itemSrc, itemAlt, itemPoster, itemTitle }, itemIndex) => {
										const active = itemIndex === currentSlideIndex;
										// Check if it's any type of video (YouTube or direct file)
										const isVideo = isYouTubeUrl(itemSrc) || isDirectVideoFile(itemSrc);

										return (
											<div
												className='slider-item-js'
												data-active={active}
												key={`slide-${actualGroupIndex}-${itemIndex}`}
											>
												{isVideo ? (
													// If it's a video, then check playStates
													playStates[actualGroupIndex]?.[itemIndex] ? (
														// If playing, render the appropriate iframe
														isYouTubeUrl(itemSrc) ? (
															<iframe
																width='100%'
																height='100%'
																src={`${itemSrc}${itemSrc?.includes('?') ? '&' : '?'}autoplay=1`}
																title={itemTitle || itemAlt}
																allow='autoplay; encrypted-media'
																allowFullScreen
																style={{ border: 'none' }}
															/>
														) : (
															// Local video using video
															<video width='100%' height='100%' controls autoPlay preload='none'>
																{/* Use the provided src for the source tag */}
																<source src={itemSrc} type='video/mp4' />
																Your browser does not support the video tag.
															</video>
														)
													) : (
														// If NOT playing, show the ONE VideoPreview component for both video types
														<VideoPreview
															itemPoster={itemPoster}
															itemAlt={itemAlt}
															itemTitle={itemTitle}
															onClick={() =>
																setPlayStates((prev) =>
																	prev.map((group, gi) =>
																		gi === actualGroupIndex
																			? // Set only the clicked item to true
																			  group.map((_, ii) => ii === itemIndex)
																			: group
																	)
																)
															}
														/>
													)
												) : (
													// Otherwise, it's an image
													<>
														<img src={itemSrc} alt={itemTitle || itemAlt} />
														{itemTitle && <p className='video-preview__title'>{itemTitle}</p>}
													</>
												)}
											</div>
										);
									}
								)}
							</div>

							{groupData.sliderContent.length > 0 && (
								<div className='slider-actions'>
									{!useTabletLarge && <Copyright />}

									<button
										className='slider-btn-js slider-btn-js-prev'
										type='button'
										aria-label='Go to previous slide'
										onClick={() => handlePrev(actualGroupIndex)}
										disabled={groupData.sliderContent.length <= 1}
									>
										<i className='chevron' />
									</button>

									<span className='slides-number h2'>
										{`${currentSlideIndex + 1 < 10 ? '0' : ''}${currentSlideIndex + 1} / ${
											groupData.sliderContent.length < 10 ? '0' : ''
										}${groupData.sliderContent.length}`}
									</span>

									<button
										className='slider-btn-js slider-btn-js-next'
										type='button'
										aria-label='Go to next slide'
										onClick={() => handleNext(actualGroupIndex)}
										disabled={groupData.sliderContent.length <= 1}
									>
										<i className='chevron' />
									</button>
								</div>
							)}
						</div>
					);
				})}

				{!useTabletLarge && <PopupContacts />}
			</div>
		</div>
	);
};

export default Slider;
