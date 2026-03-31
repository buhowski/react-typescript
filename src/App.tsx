import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './components/header/Header';
import StartupWrapperSeo from './pages/startups/components/StartupWrapperSeo';
import { mainRoutes, startupDataMap } from './routesData';
import { normalizePath } from './pages/startups/helpers/metaHelper';
import EmailApp, { emailRoutes } from './email-builder/EmailApp';
// import { isIOSInternalBrowser } from './config/navigationHelper';

export const NEXT_PAGE_TIME = 1100;
export const NEXT_PAGE_RATIO = 699;

const App = () => {
	const location = useLocation();

	// React.useEffect(() => {
	// 	if (!isIOSInternalBrowser()) {
	// 		document.documentElement.classList.add('has-overflow');
	// 	}
	// }, []);

	const isEmailPage = emailRoutes.some(
		(route) => normalizePath(route.pathTo) === normalizePath(location.pathname),
	);

	if (isEmailPage) return <EmailApp />;

	return (
		<div className='application'>
			<Header />

			<TransitionGroup component={null}>
				<CSSTransition
					key={location.pathname}
					classNames='slide'
					timeout={NEXT_PAGE_TIME}
					unmountOnExit
				>
					<div
						id='page'
						className='page'
						style={
							{
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
