import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { pathToVision, pathToAbout, pathToProjects } from '../urlsData';
import { useTabletQuery } from '../../config/useMediaQuery';
import Socials from '../socials/Socials';
import socialData from '../socials/socialData';
import { headerLogo } from '../../assets/svg/icons';
// Reusable path matching function
import { isPathActive } from '../../config/pathUtils';
import { startupsMap } from '../../pages/startups/startupsMap';

import './Header.scss';

const Header = () => {
	const tabletQuery = useTabletQuery();
	const [menuOpen, setMenuOpen] = React.useState(false);

	const { pathname } = useLocation();
	const isActive = isPathActive(Object.keys(startupsMap), pathname);

	const linksData = [
		{
			pageLink: pathToVision,
			pageName: `My Startups`,
			activeClass: isActive ? 'active' : '',
		},
		{
			pageLink: pathToAbout,
			pageName: 'About Me',
			activeClass: '',
		},
		{
			pageLink: pathToProjects,
			pageName: 'Portfolio',
			activeClass: '',
		},
	];

	const navLinkItems = linksData.map(({ pageLink, pageName, activeClass }, i) => {
		return (
			<li className='nav-item' key={i}>
				<NavLink className={`nav-link ${activeClass}`} to={`${pageLink}`}>
					{pageName}
				</NavLink>
			</li>
		);
	});

	const LogoNavLink = () => {
		return (
			<NavLink className='logo-link' to='/' aria-label='Home'>
				{headerLogo}
			</NavLink>
		);
	};

	return (
		<header className={`header ${menuOpen ? ' header-overflow' : ''}`}>
			<div className='wrapper'>
				{tabletQuery ? (
					<>
						<LogoNavLink />

						<div
							className='mobile-menu-btn'
							onClick={() => {
								const pageContainer = document.querySelector('.page-container');

								if (pageContainer) {
									pageContainer.scrollTo({ top: 0, behavior: 'smooth' });

									(pageContainer as HTMLElement).style.overflowY = `${
										menuOpen ? 'auto' : 'hidden'
									}`;
								}

								setMenuOpen((o) => !o);
							}}
						>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>

						<nav className={`pos-abs mobile-menu${menuOpen ? ' open' : ''}`}>
							<nav className={`mobile-menu__content`}>
								<ul className='mobile-nav'>{navLinkItems}</ul>
								<Socials
									socialData={socialData}
									items={[
										{ id: 'github' },
										{ id: 'linkedin' },
										{ id: 'telegram' },
										{ id: 'instagram' },
									]}
								/>
							</nav>
						</nav>
					</>
				) : (
					<nav className='header-nav header-nav--desktop'>
						<LogoNavLink />

						<ul className='header-nav__list'>{navLinkItems}</ul>
					</nav>
				)}
			</div>
		</header>
	);
};

export default Header;
