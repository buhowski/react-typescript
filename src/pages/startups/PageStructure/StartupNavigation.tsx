import React from 'react';
import { NavLink } from 'react-router-dom';
import { startupsNav } from '../data/startupsNav';

const StartupNavigation: React.FC = () => {
	return (
		<div className='idea-tabs idea-tabs--urls'>
			{startupsNav.map(({ pageLink, pageName }, i) => (
				<NavLink to={pageLink} className='idea-tabs__btn' key={i}>
					{pageName}
				</NavLink>
			))}
		</div>
	);
};

export default StartupNavigation;
