import { useState, useRef } from 'react';
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
	dataSlider: SlideItem[];
}

const Slider: React.FC<SliderProps> = ({ dataSlider }) => {
	const useTabletLarge = useTabletLargeQuery();
	const videoRefs = useRef<HTMLVideoElement[]>([]);
	const [activeIndex, setActiveIndex] = useState<number>(
		Math.floor(Math.random() * dataSlider.length)
	);
	const [playState, setPlayState] = useState(Array(dataSlider.length).fill(false));

	const playVideo = (index: number) => {
		const video = videoRefs.current[index];
		if (video) {
			video.play();
			setPlayState((prevState) => ({ ...prevState, [index]: true }));
		}
	};

	const pauseVideos = () => videoRefs.current?.forEach((video) => video.pause());

	const handleNext = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === dataSlider.length - 1 ? 0 : prevIndex + 1
		);
		pauseVideos();
	};

	const handlePrev = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0 ? dataSlider.length - 1 : prevIndex - 1
		);
		pauseVideos();
	};

	return (
		<div className={`slider-with-btn ${dataSlider.length <= 1 ? 'disabled' : ''}`}>
			<div className='slider-container'>
				<div className='idea-slider slider-js'>
					{dataSlider.map(({ itemSrc, itemAlt, itemPoster, itemTitle }, index) => (
						<div
							className='slider-item-js'
							data-active={index === activeIndex}
							key={index}
						>
							{/* VIdeo or Image slider item */}
							{itemPoster ? (
								<>
									<video
										ref={(element) =>
											(videoRefs.current[index] = element as HTMLVideoElement)
										}
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
										className={`video-preview ${playState[index] ? 'disabled' : ''}`}
										onClick={() => playVideo(index)}
									>
										<img src={itemPoster} alt={itemAlt} />
										<p className='video-preview__title'>{itemAlt}</p>
										{playIcon}
									</div>
								</>
							) : (
								<>
									<img src={itemSrc} alt={itemAlt} />

									{/* Image description text */}
									{itemTitle && <p className='video-preview__title'>{itemTitle}</p>}
								</>
							)}
						</div>
					))}
				</div>

				<div className={`slider-actions`}>
					{!useTabletLarge && <Copyright />}

					<button
						className='slider-btn-js slider-btn-js-prev'
						type='button'
						aria-label='Go to previous slide'
						onClick={handlePrev}
					>
						<i className='chevron'></i>
					</button>

					<span className='slides-number'>
						{`${activeIndex + 1 < 10 ? '0' : ''}${activeIndex + 1} / ${
							dataSlider.length < 10 ? '0' : ''
						}${dataSlider.length}`}
					</span>

					<button
						className='slider-btn-js slider-btn-js-next'
						type='button'
						aria-label='Go to next slide'
						onClick={handleNext}
					>
						<i className='chevron'></i>
					</button>
				</div>

				{!useTabletLarge && <PopupContacts />}
			</div>
		</div>
	);
};

export default Slider;
