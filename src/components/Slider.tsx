import { useState } from 'react';
import Copyright from './Copyright';
import PopupContacts from './PopupContacts';
import { useTabletLargeQuery } from '../hooks/useMediaQuery';

interface SliderProps {
	images: { imgSrc: string; imgAlt: string }[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
	const useTabletLarge = useTabletLargeQuery();

	const [activeIndex, setActiveIndex] = useState<number>(
		Math.floor(Math.random() * images.length)
	);

	const clickNext = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	const clickPrev = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	return (
		<div className='slider-with-btn'>
			<div className='slider-container'>
				<div className='idea-slider slider-js'>
					{images.map(({ imgSrc, imgAlt }, i) => (
						<div className='slider-item-js' data-active={i === activeIndex} key={i}>
							<img src={imgSrc} alt={imgAlt} />
						</div>
					))}
				</div>

				<span className='slides-number'>
					{`${activeIndex + 1 < 10 ? '0' : ''}${activeIndex + 1} / ${
						images.length < 10 ? '0' : ''
					}${images.length}`}
				</span>

				<div className='slider-actions'>
					{!useTabletLarge && <Copyright />}

					<button
						className='slider-btn-js slider-btn-js-prev'
						type='button'
						onClick={clickPrev}
					></button>

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
