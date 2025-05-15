import React from 'react';
import {
	NavLink,
	// useLocation
} from 'react-router-dom';
import { startupsNav } from '../data/startupsNav';

// Reusable path matching function
// import { isPathActive, startupSubPaths } from '../../../config/pathUtils';

const StartupNavigation: React.FC = () => {
	// const { pathname } = useLocation();

	return (
		<div className='idea-tabs idea-tabs--urls'>
			{startupsNav.map(({ pageLink, pageName }, index) => {
				// Use the pageLink as key, fallback to exact match
				// const relatedPaths = startupSubPaths[pageLink] || [pageLink];
				// const isActive = isPathActive(relatedPaths, pathname);

				return (
					<NavLink to={pageLink} className={`idea-tabs__btn`} key={index}>
						{pageName}
					</NavLink>
				);
			})}
		</div>
	);
};

export default StartupNavigation;
