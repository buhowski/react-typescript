import { useState } from 'react';
import Copyright from './Copyright';
import PopupContacts from './PopupContacts';
import { useTabletLargeQuery } from '../hooks/useMediaQuery';

interface SliderProps {
	dataSlider: { itemSrc: string; itemAlt: string; itemType: string }[];
}

const Slider: React.FC<SliderProps> = ({ dataSlider }) => {
	const useTabletLarge = useTabletLargeQuery();

	const [activeIndex, setActiveIndex] = useState<number>(
		Math.floor(Math.random() * dataSlider.length)
	);

	const clickNext = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === dataSlider.length - 1 ? 0 : prevIndex + 1
		);
	};

	const clickPrev = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0 ? dataSlider.length - 1 : prevIndex - 1
		);
	};

	return (
		<div className='slider-with-btn'>
			<div className='slider-container'>
				<div className='idea-slider slider-js'>
					{dataSlider.map(({ itemSrc, itemAlt, itemType }, i) => (
						<div className='slider-item-js' data-active={i === activeIndex} key={i}>
							{itemType === 'video' ? (
								<video autoPlay loop muted>
									<source src={itemSrc} type='video/mp4' />
									Your browser does not support the video tag.
								</video>
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
						onClick={clickPrev}
					></button>

					<span className='slides-number'>
						{`${activeIndex + 1 < 10 ? '0' : ''}${activeIndex + 1} / ${
							dataSlider.length < 10 ? '0' : ''
						}${dataSlider.length}`}
					</span>

					<button
						className='slider-btn-js slider-btn-js-next'
						type='button'
						onClick={clickNext}
					></button>
				</div>

				{!useTabletLarge && <PopupContacts />}
			</div>
		</div>
	);
};

export default Slider;
