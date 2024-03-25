import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { pathToStartup, pathToAbout, pathToProjects } from '../urlsData';
import { startupsNav } from '../../pages/startups/data/startupsNav';
import { useTabletQuery } from '../../hooks/useMediaQuery';
import Socials from '../socials/Socials';

import './Header.scss';

const Header = () => {
	const tabletQuery = useTabletQuery();
	const [menuOpen, setMenuOpen] = React.useState(false);

	const { pathname } = useLocation();
	const isActive = startupsNav.some((url) => url.pageLink === pathname);

	const linksData = [
		{
			pageLink: pathToStartup,
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
			<li className='nav-item d-flex' key={i}>
				<NavLink className={`a nav-link ${activeClass}`} to={`${pageLink}`} end>
					{pageName}
				</NavLink>
			</li>
		);
	});

	const LogoNavLink = () => {
		return (
			<div className='logo d-flex'>
				<NavLink className='a logo-link' to='/' end>
					<span className='tag-color'>&lt;</span>
					<span>Buhowski</span>
					<span className='tag-color'>/&gt;</span>
				</NavLink>
			</div>
		);
	};

	return (
		<header className={`header d-flex-c${menuOpen ? ' header-overflow' : ''}`}>
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
							<div className={`mobile-menu__content`}>
								<ul className='nav'>{navLinkItems}</ul>
								<Socials />
							</div>
						</nav>
					</>
				) : (
					<div className='d-flex-c-b'>
						<LogoNavLink />

						<nav className='desktop-responsive'>
							<ul className='nav d-flex-c'>{navLinkItems}</ul>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
