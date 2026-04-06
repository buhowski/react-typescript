import React, { useEffect, useState, useRef } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Preloader from './components/Preloader';
import Header from './components/header/Header';
import StartupLanguage from './pages/startups/components/StartupLanguage';
import StartupNavigation from './pages/startups/components/StartupNavigation';
import StartupWrapperSeo from './pages/startups/components/StartupWrapperSeo';
import CVPage from './pages/CVPage';
import EmailApp, { emailRoutes } from './email-builder/EmailApp';

import { mainRoutes, startupDataMap } from './routesData';
import { normalizePath } from './pages/startups/helpers/metaHelper';
import { PageProps } from './types/common';

export const NEXT_PAGE_TIME = 1000;
export const NEXT_PAGE_RATIO = 700;

const App = () => {
	const location = useLocation();
	const pathKey = normalizePath(location.pathname);

	// Special pages (CV & EMAIL)
	const isCVPage = pathKey === '/cv';
	const isEmailPage = emailRoutes.some((route) => normalizePath(route.pathTo) === pathKey);
	const disablePreloader = isCVPage || isEmailPage;

	// Startup page
	const startupEntry = startupDataMap[pathKey];
	const isStartupPage = Boolean(startupEntry);

	const [showPreloader, setShowPreloader] = useState(true);
	const [delayedStartupEntry, setDelayedStartupEntry] = useState<PageProps | null>(null);
	const [delayedPathKey, setDelayedPathKey] = useState<string>('');
	const [navHeight, setNavHeight] = useState(0);
	const [isStartupNavActive, setIsStartupNavActive] = useState(false);
	const [isStartupReady, setIsStartupReady] = useState(isStartupPage);

	const navRef = useRef<HTMLDivElement>(null);

	const shouldShowStartupUI = isStartupPage || delayedStartupEntry !== null;

	// INITIAL PRELOADER
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowPreloader(false);
			document.body.classList.add('is-ready');
		}, 900);

		return () => {
			clearTimeout(timer);
			document.body.classList.remove('is-ready');
		};
	}, []);

	// STARTUP ENTRY BUFFER
	useEffect(() => {
		const timer = setTimeout(() => {
			setDelayedStartupEntry(startupEntry ?? null);
			setDelayedPathKey(pathKey);
		}, NEXT_PAGE_RATIO);

		return () => clearTimeout(timer);
	}, [startupEntry, pathKey]);

	// STARTUP READY STATE
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsStartupReady(isStartupPage);
		}, NEXT_PAGE_RATIO);

		return () => clearTimeout(timer);
	}, [isStartupPage]);

	// NAV HEIGHT OBSERVER
	useEffect(() => {
		if (!navRef.current) return;
		const observer = new ResizeObserver(() => setNavHeight(navRef.current!.offsetHeight));
		observer.observe(navRef.current);
		setNavHeight(navRef.current.offsetHeight);
		return () => observer.disconnect();
	}, []);

	// SPECIAL APPS
	if (isCVPage) return <CVPage />;
	if (isEmailPage) return <EmailApp />;

	// MAIN APPLICATION
	return (
		<>
			{/* PRELOADER */}
			{!disablePreloader && showPreloader && <Preloader />}

			<div className='application'>
				{/* Navigation */}
				<div ref={navRef} className={`application__nav ${isStartupNavActive ? 'nav-active' : ''}`}>
					<Header />

					{/* Guard: startup page */}
					{shouldShowStartupUI && (
						<div className={`startup-actions ${isStartupReady ? 'is-visible' : ''}`}>
							<StartupLanguage pageData={(startupEntry ?? delayedStartupEntry)!.pageData} />

							<StartupNavigation
								onActiveChange={setIsStartupNavActive}
								delayedPathKey={delayedPathKey}
							/>
						</div>
					)}
				</div>

				{/* ANIMATED PAGES */}
				<TransitionGroup component={null}>
					<CSSTransition key={pathKey} classNames='slide' timeout={NEXT_PAGE_TIME} unmountOnExit>
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

									{/* SEO catch-all for languages pages */}
									<Route path='/:lang/*' element={<StartupWrapperSeo />} />
								</Routes>
							</div>
						</div>
					</CSSTransition>
				</TransitionGroup>
			</div>
		</>
	);
};

export default App;
