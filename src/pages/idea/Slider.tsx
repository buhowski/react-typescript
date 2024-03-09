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
		'Me Starter Pack, Startup, meme, revo, рево, popular meme, recomendation, news, breaknews, startaper, Front End, investment, invest, Startup offer, Staffed, feature-rich magazine, Elevator Pitch, venture, CV, Resume, private entrepreneur, Олександр Цьомах, Alexander Tsiomakh, Oleksandr Tsomakh, Александр, buhowski, Человек Мужик, свіже повітря свободи, Журналістика, Journalism, Гонзо, gonzo, хантер томпсон, буковски, паланик, палагнюк, Modernized magazine redesign, social network, microblogging, Online cinema, video hosting and live streaming, Imageboard and anonymous web forum, revo, рево, чиназес, чина, чіна, чіназес, Новый формат журнала, социальная сеть, микроблогинг, Онлайн кинотеатр, видеохостинг и лайв стриминг, Имиджборд и анонимный веб-форум, Новий формат журналу, соціальна мережа, мікроблогінг, Онлайн кінотеатр, відеохостинг та лайв стрімінг, Іміджборд та анонімний веб-форум, варіантоспроможний, амбасадор авантюр, пропаганда розвитку, безмежна самоіронія, bored to death, pop, kpop, ukraine, war, ukraine war, ukraine startups, winner, global, hardcore, magazine, ukraine news magazine, журнал, лучший журнал, AI, robotics, best pc games, china, usa, election',
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
