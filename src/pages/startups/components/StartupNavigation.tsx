import React, { useMemo, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { startupsNav } from '../../../components/urlsData';
import { isPathSubActive } from '../../../config/pathUtils';
import { normalizePath } from '../../startups/helpers/metaHelper';
import { useTabletLargeQuery } from '../../../config/useMediaQuery';
import { useStickyHeader } from '../helpers/useStickyHeader';
import { findParentPath } from '../helpers/backButtonPathHelper';
import { startupSubPaths } from '../../../routesData';
import BackButton from './BackButton';
import { useActiveIndicator } from '../helpers/useActiveIndicator';

type Props = {
	onActiveChange?: (active: boolean) => void;
	delayedPathKey?: string;
};

const StartupNavigation: React.FC<Props> = ({ onActiveChange, delayedPathKey }) => {
	const { pathname } = useLocation();
	const useTabletLarge = useTabletLargeQuery();
	const navRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const isActive = useStickyHeader(navRef);
	const backButtonPath = useMemo(
		() => (delayedPathKey ? findParentPath(startupSubPaths, delayedPathKey) : null),
		[delayedPathKey],
	);

	useActiveIndicator(containerRef, '.startup-nav__btn.active');

	useEffect(() => {
		onActiveChange?.(isActive);
	}, [isActive, onActiveChange]);

	return (
		<div ref={navRef} className={`startup-nav`}>
			{!useTabletLarge && backButtonPath && (
				<div className='wrapper'>
					<BackButton to={backButtonPath} />
				</div>
			)}

			<div className='startup-nav__container'>
				<div className='startup-nav__wrapper'>
					<div className='startup-nav__links'>
						<div className='startup-nav__inner' ref={containerRef}>
							{startupsNav.map(({ pageLink, pageName }, index) => {
								const isMainActive = normalizePath(pathname) === pageLink;
								const isSubActive = isPathSubActive(pageLink, pathname);

								return (
									<NavLink
										to={pageLink}
										key={index}
										className={`startup-nav__btn ${isMainActive ? 'active' : ''} ${
											isSubActive ? 'sub-active' : ''
										}`}
									>
										<span data-text={pageName}>{pageName}</span>
									</NavLink>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(StartupNavigation);
