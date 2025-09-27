import { useLocation, Routes, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './components/header/Header';
import StartupWrapperSeo from './pages/startups/components/StartupWrapperSeo';
import { mainRoutes, startupDataMap } from './routesData';

const App = () => {
	const location = useLocation();
	const startupRouts = Object.keys(startupDataMap);

	return (
		<TransitionGroup>
			<CSSTransition key={location.pathname} classNames='slide' timeout={1100}>
				<div id='page' className='page'>
					<div className='page-container'>
						<Header />

						<Routes location={location}>
							{mainRoutes.map(({ pathTo, pageComponent: PageComponent }, i) => (
								<Route
									key={i + pathTo}
									path={pathTo.startsWith('/') ? pathTo : `/${pathTo}`}
									element={<PageComponent />}
								/>
							))}

							{startupRouts.map((path) => (
								<Route
									key={path}
									path={path.startsWith('/') ? path : `/${path}`}
									element={<StartupWrapperSeo path={path} />}
								/>
							))}

							{/* SEO static startup pages */}
							<Route path='/:lang/*' element={<StartupWrapperSeo />} />
						</Routes>
					</div>
				</div>
			</CSSTransition>
		</TransitionGroup>
	);
};

export default App;
