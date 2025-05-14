import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import Copyright from './Copyright';
import PopupContacts from './PopupContacts';
import { useTabletLargeQuery } from '../hooks/useMediaQuery';

import { playIcon } from '../pages/startups/assets/svg/playIcon';

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

const Slider: React.FC<SliderProps> = ({ dataSlider, currentLanguage, isActive }) => {
	const useTabletLarge = useTabletLargeQuery();
	const videoRefs = useRef<HTMLVideoElement[][]>([]);
	const [activeIndices, setActiveIndices] = useState<number[]>([]);
	const [playStates, setPlayStates] = useState<boolean[][]>([]);

	const defaultLanguage = 'en';
	const displayedLanguage = useMemo(() => {
		return dataSlider?.[currentLanguage]?.length > 0
			? currentLanguage
			: Object.keys(dataSlider || {})[0] || defaultLanguage;
	}, [dataSlider, currentLanguage, defaultLanguage]);

	const currentLanguageGroups = useMemo(() => {
		return dataSlider?.[displayedLanguage] || [];
	}, [dataSlider, displayedLanguage]);

	const groupsToRender = useMemo(() => {
		if (!currentLanguageGroups || currentLanguageGroups.length === 0) {
			return [];
		}
		if (typeof isActive === 'number' && isActive >= 0 && isActive < currentLanguageGroups.length) {
			return [currentLanguageGroups[isActive]];
		} else {
			return currentLanguageGroups;
		}
	}, [isActive, currentLanguageGroups]);

	const pauseAllVideos = useCallback(() => {
		videoRefs.current.forEach((groupRefs) => {
			groupRefs.forEach((video) => video?.pause());
		});
		setPlayStates((prevStates) => prevStates.map((groupState) => groupState.map(() => false)));
	}, [videoRefs]);

	useEffect(() => {
		const numberOfGroups = currentLanguageGroups.length;
		setActiveIndices(Array(numberOfGroups).fill(0));
		setPlayStates(
			currentLanguageGroups.map((group) => Array(group.sliderContent.length).fill(false))
		);
		videoRefs.current = Array(numberOfGroups)
			.fill(null)
			.map(() => []);

		pauseAllVideos();
	}, [displayedLanguage, currentLanguageGroups, pauseAllVideos]);

	const playVideo = useCallback(
		(groupIndex: number, itemIndex: number) => {
			const video = videoRefs.current[groupIndex]?.[itemIndex];
			if (video) {
				pauseAllVideos();
				video.play();
				setPlayStates((prevStates) =>
					prevStates.map((groupPlayState, i) =>
						i === groupIndex
							? groupPlayState.map((play, j) => (j === itemIndex ? true : play))
							: groupPlayState
					)
				);
			}
		},
		[videoRefs, pauseAllVideos]
	);

	const handleNext = useCallback(
		(groupIndex: number) => {
			const group = currentLanguageGroups[groupIndex];
			if (!group || group.sliderContent.length <= 1) return;

			setActiveIndices((prevIndices) =>
				prevIndices.map((activeIndex, i) =>
					i === groupIndex ? (activeIndex + 1) % group.sliderContent.length : activeIndex
				)
			);
			pauseAllVideos();
		},
		[currentLanguageGroups, pauseAllVideos]
	);

	const handlePrev = useCallback(
		(groupIndex: number) => {
			const group = currentLanguageGroups[groupIndex];
			if (!group || group.sliderContent.length <= 1) return;

			setActiveIndices((prevIndices) =>
				prevIndices.map((activeIndex, i) =>
					i === groupIndex
						? (activeIndex - 1 + group.sliderContent.length) % group.sliderContent.length
						: activeIndex
				)
			);
			pauseAllVideos();
		},
		[currentLanguageGroups, pauseAllVideos]
	);

	if (!groupsToRender || groupsToRender.length === 0) {
		return null;
	}

	return (
		<div className={`slider-with-btn`}>
			<div className='slider-container'>
				{groupsToRender.map((group, indexInRenderedArray) => {
					const actualGroupIndex = typeof isActive === 'number' ? isActive : indexInRenderedArray;

					if (!currentLanguageGroups[actualGroupIndex]) return null;

					const groupData = currentLanguageGroups[actualGroupIndex];

					return (
						<div
							className={`slider-wrapper ${groupData.sliderContent.length > 1 ? '' : 'disabled'} ${
								isActive === indexInRenderedArray ? 'is-active' : ''
							}`}
							key={`slider-${actualGroupIndex}`}
						>
							<div className='idea-slider slider-js'>
								{groupData.sliderContent.map(
									({ itemSrc, itemAlt, itemPoster, itemTitle }, itemIndex) => (
										<div
											className='slider-item-js'
											data-active={itemIndex === activeIndices[actualGroupIndex]}
											key={`${actualGroupIndex}-${itemIndex}`}
										>
											{itemPoster ? (
												<>
													<video
														ref={(element) => {
															if (!videoRefs.current[actualGroupIndex]) {
																videoRefs.current[actualGroupIndex] = [];
															}
															videoRefs.current[actualGroupIndex][itemIndex] =
																element as HTMLVideoElement;
														}}
														width='100%'
														height='100%'
														controls
														src={itemSrc}
														preload='none'
													>
														<source src={itemSrc} type='video/mp4' />
														Your browser does not support the video tag.
													</video>

													<div
														className={`video-preview ${
															playStates[actualGroupIndex]?.[itemIndex] ? 'disabled' : ''
														}`}
														onClick={() => playVideo(actualGroupIndex, itemIndex)}
													>
														<img src={itemPoster} alt={itemAlt} />
														{playIcon}
														<p className='video-preview__title'>{itemAlt}</p>
													</div>
												</>
											) : (
												<>
													<img src={itemSrc} alt={itemTitle ? itemTitle : itemAlt} />
													{itemTitle && <p className='video-preview__title'>{itemTitle}</p>}
												</>
											)}
										</div>
									)
								)}
							</div>

							{groupData.sliderContent.length > 0 && (
								<div className={`slider-actions `}>
									{!useTabletLarge && <Copyright />}

									<button
										className='slider-btn-js slider-btn-js-prev'
										type='button'
										aria-label='Go to previous slide'
										onClick={() => handlePrev(actualGroupIndex)}
										disabled={groupData.sliderContent.length <= 1}
									>
										<i className='chevron'></i>
									</button>

									<span className='slides-number h2'>
										{`${activeIndices[actualGroupIndex] + 1 < 10 ? '0' : ''}${
											activeIndices[actualGroupIndex] + 1
										} / ${groupData.sliderContent.length < 10 ? '0' : ''}${
											groupData.sliderContent.length
										}`}
									</span>

									<button
										className='slider-btn-js slider-btn-js-next'
										type='button'
										aria-label='Go to next slide'
										onClick={() => handleNext(actualGroupIndex)}
										disabled={groupData.sliderContent.length <= 1}
									>
										<i className='chevron'></i>
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
