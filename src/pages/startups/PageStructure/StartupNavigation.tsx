import React from 'react';
import { NavLink } from 'react-router-dom';
import { startupsNav } from '../../../components/urlsData';

const StartupNavigation: React.FC = () => {
	return (
		<div className='idea-tabs idea-tabs--urls'>
			{startupsNav.map(({ pageLink, pageName }, index) => {
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
