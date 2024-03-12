import { useState } from 'react';
import PopupContacts from './PopupContacts';
import { useTabletLargeQuery } from '../../hooks/useMediaQuery';
import Copyright from './Copyright';

const imageFiles = [
	'startup.jpg',
	'brain.jpg',
	'creatio.jpg',
	'god.jpg',
	'writer.jpg',
	'robotics.jpg',
	'cubic.jpg',
	'draw.jpg',
	'coffee.jpg',
];

interface ImageData {
	imgSrc: string;
	imgAlt: string;
}

const dataImages: ImageData[] = imageFiles.map((file) => ({
	imgSrc: require(`./images/${file}`),
	imgAlt:
		'startup, startup presentation, elevator pitch, invest, ukraine, ukraine startup, it sector, investment, startaper, apply startup, magazine, venture, popular meme, recomendation, news, breaknews, private entrepreneur, buhowski, Журналістика, Journalism, Гонзо, gonzo, magazine redesign, new generation, Новый формат журнала, globalization, ukraine news magazine, лучший журнал, top AI, robotics, Олександр Цьомах, Alexander Tsiomakh, ****',
}));

const SliderContainer = () => {
	const useTabletLarge = useTabletLargeQuery();

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

export default SliderContainer;
