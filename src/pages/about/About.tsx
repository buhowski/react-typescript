import React, { useState } from 'react';

import PageHelmet from '../../config/PageHelmet';
import { aboutMetaTags } from '../../config/metaTags';
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
			<PageHelmet metaTags={aboutMetaTags} />

			<h1 className='base-title h1'>Starter Pack</h1>

			<div className='about-info'>
				<div className=''>
					<img
						className='about-info__img'
						src={PhotoBg}
						alt='I look forward to a better future'
					/>
				</div>

				{dotsData.map(({ classItem, title, titleSub, img }, i) => {
					return (
						<div className={`pos-abs about-item ${classItem}`} key={i}>
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

								<img className='line-drawing-pic' src={img} alt={title} />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default About;
