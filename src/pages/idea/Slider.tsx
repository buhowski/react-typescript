import { useState } from 'react';
import PopupContacts from './PopupContacts';

const imageFiles = [
	'startup.jpg',
	'brain.jpeg',
	'creatio.jpeg',
	'god.jpeg',
	'writer.jpg',
	'robotics.jpg',
	'cubic.jpeg',
	'draw.jpg',
	'coffee.jpeg',
	'team.jpeg',
];

interface ImageData {
	imgSrc: string;
	imgAlt: string;
}

const dataImages: ImageData[] = imageFiles.map((file) => ({
	imgSrc: require(`./images/${file}`),
	imgAlt: 'startup presentation image. An offer to invest in huge potential!',
}));

const SliderContainer = () => {
	const [activeIndex, setActiveIndex] = useState(
		Math.floor(Math.random() * (dataImages.length - 0) + 0)
	);

	const clickNext = () => {
		if (activeIndex < dataImages.length - 1) {
			setActiveIndex(activeIndex + 1);
		} else {
			setActiveIndex(0);
		}
	};

	const clickPrev = () => {
		if (activeIndex > 0) {
			setActiveIndex(activeIndex - 1);
		} else {
			setActiveIndex(dataImages.length - 1);
		}
	};

	return (
		<div className='slider-with-btn'>
			<div className='slider-container'>
				<div className='idea-slider slider-js'>
					{dataImages.map(({ imgSrc, imgAlt }, i) => (
						<div className='slider-item-js' data-active={i === activeIndex} key={i}>
							<img src={imgSrc} alt={imgAlt} />
						</div>
					))}
				</div>

				<span className='slides-number'>
					{`${activeIndex + 1 < 10 ? '0' : ''}${activeIndex + 1} / ${
						dataImages.length < 10 ? '0' : ''
					}${dataImages.length}`}
				</span>

				<div className='slider-actions'>
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

				<PopupContacts />
			</div>

			<PopupContacts />
		</div>
	);
};

export default SliderContainer;
