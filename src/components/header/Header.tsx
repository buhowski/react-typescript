import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { pathToVision, pathToAbout, pathToProjects } from '../urlsData';
import { useTabletQuery } from '../../config/useMediaQuery';
import Socials from '../socials/Socials';
import socialData from '../socials/socialData';
import { headerLogo } from '../../assets/svg/icons';
import { isPathActive } from '../../config/pathUtils';
import { startupsMap } from '../../pages/startups/startupsMap';
import { fastScrollTo, toggleScrollLock } from '../../pages/startups/helpers/navigationHelper';
import { NEXT_PAGE_RATIO } from '../../App';

import './Header.scss';

interface MobileMenuProps {
	isOpen: boolean;
	navItems: React.ReactNode;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navItems }) => {
	return (
		<nav className={`pos-abs mobile-menu${isOpen ? ' open' : ''}`}>
			<nav className='mobile-menu__content'>
				<ul className='mobile-nav'>{navItems}</ul>
				<Socials
					socialData={socialData}
					items={[{ id: 'github' }, { id: 'linkedin' }, { id: 'telegram' }, { id: 'instagram' }]}
				/>
			</nav>
		</nav>
	);
};

const Header = () => {
	const tabletQuery = useTabletQuery();
	const [menuOpen, setMenuOpen] = useState(false);

	const location = useLocation();
	const isActive = isPathActive(Object.keys(startupsMap), location.pathname);

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

	const toggleMenu = () => setMenuOpen((prev) => !prev);

	useEffect(() => {
		toggleScrollLock(menuOpen);

		return () => toggleScrollLock(false);
	}, [menuOpen]);

	useEffect(() => {
		const timer = setTimeout(() => {
			fastScrollTo(1, 0);
			setMenuOpen(false);
		}, NEXT_PAGE_RATIO);

		return () => {
			clearTimeout(timer);
		};
	}, [location.pathname]);

	return (
		<>
			<header className={`header ${menuOpen ? ' header-overflow' : ''}`}>
				<div className='wrapper'>
					{tabletQuery ? (
						<>
							<LogoNavLink />

							<div className='mobile-menu-btn' onClick={toggleMenu}>
								{Array.from({ length: 6 }).map((_, i) => (
									<span key={i} />
								))}
							</div>
						</>
					) : (
						<>
							<nav className='header-nav header-nav--desktop'>
								<LogoNavLink />

								<ul className='header-nav__list'>{navLinkItems}</ul>
							</nav>
						</>
					)}
				</div>
			</header>

			{tabletQuery && <MobileMenu isOpen={menuOpen} navItems={navLinkItems} />}
		</>
	);
};

export default Header;
