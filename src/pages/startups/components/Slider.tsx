import { useState, useRef } from 'react';
import Copyright from '../../../components/Copyright';
import PopupContacts from '../../../components/PopupContacts';
import { useTabletLargeQuery } from '../../../hooks/useMediaQuery';

// Play icon
// import { playIcon } from '../media/svg/playIcon';

interface SlideItem {
	itemSrc?: string;
	itemAlt?: string;
	itemPoster?: string;
}

interface SliderProps {
	dataSlider: SlideItem[];
}

const Slider: React.FC<SliderProps> = ({ dataSlider }) => {
	const useTabletLarge = useTabletLargeQuery();

	const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
	const [activeIndex, setActiveIndex] = useState<number>(
		Math.floor(Math.random() * dataSlider.length)
	);

	// FOR starting play video clicking on preview
	// const [playState, setPlayState] = useState<string>('');

	// const playVideos = () => {
	// 	videoRefs.current?.forEach((video) => video?.play());
	// 	setPlayState('disabled');
	// };

	const pauseVideos = () => {
		videoRefs.current?.forEach((video) => video?.pause());
	};

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
		<div className='slider-with-btn'>
			<div className='slider-container'>
				<div className='idea-slider slider-js'>
					{dataSlider.map(({ itemSrc, itemAlt, itemPoster }, i) => (
						<div className='slider-item-js' data-active={i === activeIndex} key={i}>
							{itemPoster ? (
								<>
									<video
										ref={(element) => (videoRefs.current[i] = element)}
										width='100%'
										height='100%'
										src={itemSrc}
										poster={itemPoster}
										controls
										// preload='none'
									>
										<source src={itemSrc} type='video/mp4' />
										Your browser does not support the video tag.
									</video>

									{/* TODO: add preview to video */}
									{/* <div className={`video-preview ${playState}`} onClick={playVideos}>
										<img src={itemPoster} alt={itemAlt} />
										<p className='video-preview__play'>
											<span>
												{playIcon}
												{itemAlt}
											</span>
										</p>
									</div> */}
								</>
							) : (
								<img src={itemSrc} alt={itemAlt} />
							)}
						</div>
					))}
				</div>

				<div className={`slider-actions ${dataSlider.length <= 1 ? 'disabled' : ''}`}>
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
