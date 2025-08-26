import { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PageHelmet from './config/PageHelmet';
import { defaultMetaTags } from './components/metaTags';
import Header from './components/header/Header';
import Startup from './pages/startups/Startup';
import StartupWrapper from './pages/startups/StartupWrapper';

import { startupPaths, routesData } from './pagesMap';

const App = () => {
	const location = useLocation();

	// Reset language on non-startup pages
	useEffect(() => {
		const path = location.pathname.replace(/^\/(en|ua|ru)/, '');
		document.documentElement.lang = startupPaths.includes(path)
			? localStorage.getItem('currentLang') || 'en'
			: 'en';
	}, [location.pathname]);

	// Redirect Component
	const RedirectToFile: React.FC<{ url: string }> = ({ url }) => {
		useEffect(() => {
			window.location.href = url;
		}, [url]);
		return null;
	};

	return (
		<TransitionGroup>
			<CSSTransition key={location.pathname} classNames='slide' timeout={1100}>
				<div id='page' className='page'>
					<PageHelmet metaTags={defaultMetaTags} />

					<div className='page-container'>
						<Header />

						<Routes location={location}>
							{routesData.map(({ pathTo, pageComponent }, i) => (
								<Route
									key={i + pathTo}
									path={pathTo.startsWith('/') ? pathTo : `/${pathTo}`}
									element={pageComponent}
								/>
							))}

							{/* CV Redirect */}
							<Route path='/cv' element={<RedirectToFile url='/cv.pdf' />} />

							{/* SEO static startup pages */}
							<Route path='/:lang/*' element={<StartupWrapper />} />

							{/* catch-all 404 */}
							<Route path='*' element={<Startup />} />
						</Routes>
					</div>
				</div>
			</CSSTransition>
		</TransitionGroup>
	);
};

export default App;
