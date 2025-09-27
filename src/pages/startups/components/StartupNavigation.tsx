import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { startupsNav } from '../../../components/urlsData';
import { isPathSubActive } from '../../../config/pathUtils';
import { normalizePath } from '../../startups/helpers/metaHelper';

const StartupNavigation: React.FC = () => {
	const { pathname } = useLocation();

	return (
		<div className='idea-tabs'>
			{startupsNav.map(({ pageLink, pageName }, index) => {
				const isMainActive = normalizePath(pathname) === pageLink;
				const isSubActive = isPathSubActive(pageLink, pathname);

				return (
					<NavLink
						to={pageLink}
						key={index}
						className={`idea-tabs__btn ${isMainActive ? 'active' : ''} ${
							isSubActive ? 'sub-active' : ''
						}`}
					>
						{pageName}
					</NavLink>
				);
			})}
		</div>
	);
};

export default StartupNavigation;
