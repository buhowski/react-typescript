import { useLocation, Routes, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PageHelmet from './config/PageHelmet';
import Header from './components/header/Header';
import StartupsWrapper from './pages/startups/StartupsWrapper';

import { defaultMetaTags } from './components/metaTags';
import { routesData, NotFoundRedirectToStartup } from './routesMap';

const App = () => {
	const location = useLocation();

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

							{/* SEO static startup pages */}
							<Route path='/:lang/*' element={<StartupsWrapper />} />

							{/* catch-all 404 to Startup page */}
							<Route path='*' element={<NotFoundRedirectToStartup />} />
						</Routes>
					</div>
				</div>
			</CSSTransition>
		</TransitionGroup>
	);
};

export default App;
