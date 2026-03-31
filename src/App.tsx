import React, { useEffect, useState, useRef } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './components/header/Header';
import StartupLanguage from './pages/startups/components/StartupLanguage';
import StartupNavigation from './pages/startups/components/StartupNavigation';
import StartupWrapperSeo from './pages/startups/components/StartupWrapperSeo';
import EmailApp, { emailRoutes } from './email-builder/EmailApp';
import { mainRoutes, startupDataMap } from './routesData';
import { normalizePath } from './pages/startups/helpers/metaHelper';
import { PageProps } from './types/common';

export const NEXT_PAGE_TIME = 1100;
export const NEXT_PAGE_RATIO = 699;

const App = () => {
	const location = useLocation();
	const navRef = useRef<HTMLDivElement>(null);
	const [delayedStartupEntry, setDelayedStartupEntry] = useState<PageProps | null>(null);
	const [isHidden, setIsHidden] = useState(false);
	const [navHeight, setNavHeight] = useState(0);
	const [isStartupNavActive, setIsStartupNavActive] = useState(false);

	const pathKey = normalizePath(location.pathname);
	const startupEntry = startupDataMap[pathKey];
	const isEmailPage = emailRoutes.some(
		(route) => normalizePath(route.pathTo) === normalizePath(location.pathname),
	);

	useEffect(() => {
		if (startupEntry) {
			setDelayedStartupEntry(startupEntry);
			setIsHidden(false);
		} else {
			const timer = setTimeout(() => setDelayedStartupEntry(null), NEXT_PAGE_RATIO);
			return () => clearTimeout(timer);
		}
	}, [startupEntry]);

	useEffect(() => {
		if (navRef.current) {
			const resizeObserver = new ResizeObserver(() => {
				setNavHeight(navRef.current?.offsetHeight || 0);
			});
			resizeObserver.observe(navRef.current);

			setNavHeight(navRef.current.offsetHeight);

			return () => resizeObserver.disconnect();
		}
	}, []);

	if (isEmailPage) return <EmailApp />;

	return (
		<div className='application'>
			<div ref={navRef} className={`application__nav ${isStartupNavActive ? 'nav-active' : ''}`}>
				<Header />

				{/* Guard: not a startup page */}
				{delayedStartupEntry && (
					<div className={`startup-actions ${isHidden ? 'is-hidden' : ''}`}>
						<StartupLanguage pageData={delayedStartupEntry.pageData} />

						<StartupNavigation onActiveChange={setIsStartupNavActive} />
					</div>
				)}
			</div>

			<TransitionGroup component={null}>
				<CSSTransition
					key={location.pathname}
					classNames='slide'
					timeout={NEXT_PAGE_TIME}
					unmountOnExit
					onExit={() => setIsHidden(false)}
					onEntered={() => setIsHidden(true)}
				>
					<div
						id='page'
						className='page'
						style={
							{
								paddingTop: `${navHeight}px`,
								'--next-page-time': `${NEXT_PAGE_TIME}ms`,
								'--next-page-ratio': `${NEXT_PAGE_RATIO}ms`,
							} as React.CSSProperties
						}
					>
						<div className='page-container'>
							<Routes location={location}>
								{/* Main Pages */}
								{mainRoutes.map(({ pathTo, pageComponent: PageComponent }) => (
									<Route key={pathTo} path={normalizePath(pathTo)} element={<PageComponent />} />
								))}

								{/* Startup Pages */}
								{Object.keys(startupDataMap).map((pathTo) => (
									<Route
										key={pathTo}
										path={normalizePath(pathTo)}
										element={<StartupWrapperSeo path={pathTo} />}
									/>
								))}

								{/* SEO catch-all for language-specific startup pages */}
								<Route path='/:lang/*' element={<StartupWrapperSeo />} />
							</Routes>
						</div>
					</div>
				</CSSTransition>
			</TransitionGroup>
		</div>
	);
};

export default App;
