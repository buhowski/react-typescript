import React, { useState } from 'react';
import PageHelmet from '../../components/PageHelmet';
import { aboutMetaTags } from '../../components/metaTagsBasic';
import { useTabletQuery } from '../../config/useMediaQuery';
import dotsData from './aboutData';
import basePhoto from './images/body.png';

import './About.scss';

const About = () => {
	const useTablet = useTabletQuery();
	const [active, setActive] = useState('');

	const addActiveClass = (e: React.MouseEvent) => {
		const hoveredItemId = e.currentTarget.id;

		if (active === hoveredItemId) {
			setActive('');
		} else {
			setActive(hoveredItemId);
		}
	};

	return (
		<div className='wrapper about-wrapper'>
			<PageHelmet metaTags={aboutMetaTags} />

			<h1 className='base-title h1'>Me Starter Pack</h1>

			<div className='about-info'>
				<div className=''>
					<img
						className='about-info__img'
						src={basePhoto}
						alt='Portrait of Olexander Tsiomakh (Олександр Цьомах, Oleksandr Tsomakh, Alexander Tsiomakh), also known as Olexander Buhowski (Олександр Буховський, Buhowski, Bukowski, Буховски), Front End Developer, Storyteller, and Narrative Designer.'
					/>
				</div>

				{dotsData.map(({ classItem, title, titleSub, img }, index) => {
					return (
						<div className={`about-item ${classItem}`} key={index}>
							<div
								id={classItem}
								onMouseEnter={!useTablet ? addActiveClass : undefined}
								onClick={addActiveClass}
								className={`ball ${active === classItem ? ' active' : ''}`}
							></div>

							<div className='show'>
								<p className='title'>
									{titleSub && <span className='title__sub'>{titleSub} </span>}
									{title}
								</p>

								{img}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default About;
