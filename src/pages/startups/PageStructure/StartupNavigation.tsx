import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { startupsNav } from '../../../components/urlsData';
import { isPathSubActive } from '../../../config/pathUtils';

const StartupNavigation: React.FC = () => {
	const { pathname } = useLocation();

	return (
		<div className='idea-tabs'>
			{startupsNav.map(({ pageLink, pageName }, index) => {
				const isSubActive = isPathSubActive(pageLink, pathname);

				return (
					<NavLink
						to={pageLink}
						key={index}
						className={`idea-tabs__btn ${isSubActive ? 'sub-active' : ''}`}
					>
						{pageName}
					</NavLink>
				);
			})}
		</div>
	);
};

export default StartupNavigation;
