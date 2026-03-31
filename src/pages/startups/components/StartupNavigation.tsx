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

type Props = {
	onActiveChange?: (active: boolean) => void;
};

const StartupNavigation: React.FC<Props> = ({ onActiveChange }) => {
	const { pathname } = useLocation();
	const useTabletLarge = useTabletLargeQuery();
	const navRef = useRef<HTMLDivElement>(null);
	const isActive = useStickyHeader(navRef);

	const pathKey = useMemo(() => normalizePath(pathname), [pathname]);
	const backButtonPath = useMemo(() => findParentPath(startupSubPaths, pathKey), [pathKey]);

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
						<div className='startup-nav__inner'>
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
										{pageName}
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
