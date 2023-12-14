import { useState } from 'react';
import PopupContacts from './PopupContacts';

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
	'team.jpg',
];

interface ImageData {
	imgSrc: string;
	imgAlt: string;
}

const dataImages: ImageData[] = imageFiles.map((file) => ({
	imgSrc: require(`./images/${file}`),
	imgAlt:
		' $$$, Me Starter Pack, Front End, investment, invest, Startup offer, Staffed, feature-rich magazine, Elevator Pitch, venture, CV, Resume, private entrepreneur, Олександр Цьомах, buhowski, Человек Мужик, свіже повітря свободи, Журналістика, Journalism, Гонзо, gonzo, Modernized magazine redesign, social network, microblogging, Online cinema, video hosting and live streaming, Imageboard and anonymous web forum, Новый формат журнала, социальная сеть, микроблогинг, Онлайн кинотеатр, видеохостинг и лайв стриминг, Имиджборд и анонимный веб-форум, Новий формат журналу, соціальна мережа, мікроблогінг, Онлайн кінотеатр, відеохостинг та лайв стрімінг, Іміджборд та анонімний веб-форум',
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
