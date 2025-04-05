import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import Copyright from './Copyright';
import PopupContacts from './PopupContacts';
import { useTabletLargeQuery } from '../hooks/useMediaQuery';

import { playIcon } from '../pages/startups/media/svg/playIcon';

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
}

const Slider: React.FC<SliderProps> = ({ dataSlider, currentLanguage }) => {
	const useTabletLarge = useTabletLargeQuery();
	const videoRefs = useRef<HTMLVideoElement[][]>([]);
	const [activeIndices, setActiveIndices] = useState<number[]>([]);
	const [playStates, setPlayStates] = useState<boolean[][]>([]);

	const defaultLanguage = 'en';
	const displayedLanguage = useMemo(() => {
		return dataSlider[currentLanguage]?.length > 0
			? currentLanguage
			: Object.keys(dataSlider)[0] || defaultLanguage;
	}, [dataSlider, currentLanguage, defaultLanguage]);

	const currentLanguageGroups = useMemo(() => {
		return dataSlider[displayedLanguage] || [];
	}, [dataSlider, displayedLanguage]);

	const pauseAllVideos = useCallback(() => {
		videoRefs.current.forEach((groupRefs) => {
			groupRefs.forEach((video) => video?.pause());
		});
		setPlayStates((prevStates) => prevStates.map((groupState) => groupState.map(() => false)));
	}, [videoRefs, setPlayStates]);

	useEffect(() => {
		setActiveIndices(Array(currentLanguageGroups.length).fill(0));
		setPlayStates(
			currentLanguageGroups.map((group) => Array(group.sliderContent.length).fill(false))
		);
		videoRefs.current = Array(currentLanguageGroups.length)
			.fill(null)
			.map(() => []);
		pauseAllVideos();
	}, [displayedLanguage, dataSlider, currentLanguageGroups, pauseAllVideos]);

	const playVideo = useCallback(
		(groupIndex: number, itemIndex: number) => {
			const video = videoRefs.current[groupIndex]?.[itemIndex];
			if (video) {
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
		[videoRefs, setPlayStates]
	);

	const handleNext = useCallback(
		(groupIndex: number) => {
			setActiveIndices((prevIndices) =>
				prevIndices.map((activeIndex, i) =>
					i === groupIndex
						? (activeIndex + 1) % currentLanguageGroups[i].sliderContent.length
						: activeIndex
				)
			);
			pauseAllVideos();
		},
		[currentLanguageGroups, setActiveIndices, pauseAllVideos]
	);

	const handlePrev = useCallback(
		(groupIndex: number) => {
			setActiveIndices((prevIndices) =>
				prevIndices.map((activeIndex, i) =>
					i === groupIndex
						? (activeIndex - 1 + currentLanguageGroups[i].sliderContent.length) %
						  currentLanguageGroups[i].sliderContent.length
						: activeIndex
				)
			);
			pauseAllVideos();
		},
		[currentLanguageGroups, setActiveIndices, pauseAllVideos]
	);

	if (!currentLanguageGroups || currentLanguageGroups.length === 0) {
		return null;
	}

	return (
		<div className={`slider-with-btn`}>
			<div className='slider-container'>
				{currentLanguageGroups.map((group, groupIndex) => (
					<div
						className={`slider-wrapper ${group.sliderContent.length > 1 ? '' : 'disabled'}`}
						key={`slider-${groupIndex}`}
					>
						<div className='idea-slider slider-js'>
							{group.sliderContent.map(({ itemSrc, itemAlt, itemPoster, itemTitle }, itemIndex) => (
								<div
									className='slider-item-js'
									data-active={itemIndex === activeIndices[groupIndex]}
									key={`${groupIndex}-${itemIndex}`}
								>
									{itemPoster ? (
										<>
											<video
												ref={(element) => {
													if (!videoRefs.current[groupIndex]) {
														videoRefs.current[groupIndex] = [];
													}
													videoRefs.current[groupIndex][itemIndex] = element as HTMLVideoElement;
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

											{/* // Video poster preview */}
											<div
												className={`video-preview ${
													playStates[groupIndex]?.[itemIndex] ? 'disabled' : ''
												}`}
												onClick={() => playVideo(groupIndex, itemIndex)}
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
							))}
						</div>

						{group.sliderContent.length > 0 && (
							<div className={`slider-actions `}>
								{!useTabletLarge && <Copyright />}

								<button
									className='slider-btn-js slider-btn-js-prev'
									type='button'
									aria-label='Go to previous slide'
									onClick={() => handlePrev(groupIndex)}
									disabled={group.sliderContent.length <= 1}
								>
									<i className='chevron'></i>
								</button>

								<span className='slides-number h2'>
									{`${activeIndices[groupIndex] + 1 < 10 ? '0' : ''}${
										activeIndices[groupIndex] + 1
									} / ${group.sliderContent.length < 10 ? '0' : ''}${group.sliderContent.length}`}
								</span>

								<button
									className='slider-btn-js slider-btn-js-next'
									type='button'
									aria-label='Go to next slide'
									onClick={() => handleNext(groupIndex)}
									disabled={group.sliderContent.length <= 1}
								>
									<i className='chevron'></i>
								</button>
							</div>
						)}
					</div>
				))}
				{!useTabletLarge && <PopupContacts />}
			</div>
		</div>
	);
};

export default Slider;
