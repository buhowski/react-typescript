import { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PageHelmet from './config/PageHelmet';
import Header from './components/header/Header';
import StartupWrapper from './pages/startups/StartupWrapper';

import { defaultMetaTags } from './components/metaTags';
import { routesData, NotFoundRedirectToStartup } from './routesMap';

const App = () => {
	const location = useLocation();

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
							{routesData.map(({ pathTo, pageComponent: PageComponent }, i) => (
								<Route
									key={i + pathTo}
									path={pathTo.startsWith('/') ? pathTo : `/${pathTo}`}
									element={<PageComponent />}
								/>
							))}

							{/* CV Redirect */}
							<Route path='/cv' element={<RedirectToFile url='/cv.pdf' />} />

							{/* SEO static startup pages */}
							<Route path='/:lang/*' element={<StartupWrapper />} />

							{/* catch-all 404 → use main Startup page */}
							<Route path='*' element={<NotFoundRedirectToStartup />} />
						</Routes>
					</div>
				</div>
			</CSSTransition>
		</TransitionGroup>
	);
};

export default App;
