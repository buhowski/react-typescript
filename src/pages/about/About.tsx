import React, { useState } from 'react';
import dotsData from './aboutData';
import PhotoBg from './images/body.png';
import { useTabletQuery } from '../../hooks/useMediaQuery';
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
			<h1 className='base-title base-title--main'>Me Starter Pack</h1>

			<div className='about-info'>
				<div className='img'>
					<img
						src={PhotoBg}
						alt='Олександр Цьомах, buhowski, about, Starter Pack, Front End, Startup, CV, Resume, Человек Мужик'
					/>
				</div>

				{dotsData.map(({ classItem, title, titleSub, img }, i) => {
					return (
						<div className={`pos-abs about-item ${classItem}`} key={i}>
							<div
								id={classItem}
								onMouseEnter={!useTablet ? addActiveClass : undefined}
								onClick={addActiveClass}
								className={`d-flex-c-c ball${active === classItem ? ' active' : ''}`}
							></div>

							<div className='show'>
								<p className='title'>
									{titleSub && <span className='title__sub'>{titleSub} </span>}
									{title}
								</p>

								<img
									className='line-drawing-pic'
									src={img}
									alt={
										'About, Цьомах Олександр, Starter Pack, Front End Development, Startup, buhowski, Человек Мужик'
									}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default About;
