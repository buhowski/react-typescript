import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTabletQuery, useMobMenuHeightQuery } from '../../hooks/useMediaQuery';
import Socials from '../socials/Socials';
import './Header.scss';

const linksData = [
	{
		pageLink: 'idea',
		pageName: 'Startup Offer',
		ideaIcon: 'idea-icon',
	},
	{
		pageLink: 'about',
		pageName: 'About Me',
		ideaIcon: '',
	},
	{
		pageLink: 'projects',
		pageName: 'Projects',
		ideaIcon: '',
	},
];
const Header = () => {
	const tabletQuery = useTabletQuery();
	const mobMenuHeightQuery = useMobMenuHeightQuery();

	const [menuOpen, setMenuOpen] = React.useState(false);
	const navLinkItems = linksData.map(({ pageLink, pageName, ideaIcon }, i) => {
		return (
			<li className='nav-item d-flex' key={i}>
				<NavLink className={`a nav-link ${ideaIcon}`} to={`${pageLink}`} end>
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
							<div className='d-flex-c-c'>
								<div
									className={`mobile-menu__content ${
										mobMenuHeightQuery ? 'mobile-menu__content--overflow' : ''
									}`}
								>
									<ul className='nav'>{navLinkItems}</ul>
									<Socials />
								</div>
							</div>
						</nav>
					</>
				) : (
					<div className='d-flex-c-b'>
						<LogoNavLink />

						<nav>
							<ul className='nav d-flex-c'>{navLinkItems}</ul>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
