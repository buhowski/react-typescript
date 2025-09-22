import { useLocation, Routes, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PageHelmet from './config/PageHelmet';
import Header from './components/header/Header';
import StartupsSeoWrapper from './pages/startups/components/StartupsSeoWrapper';
import { defaultMetaTags } from './components/metaTags';
import { routesData } from './routesMap';

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
							<Route path='/:lang/*' element={<StartupsSeoWrapper />} />
						</Routes>
					</div>
				</div>
			</CSSTransition>
		</TransitionGroup>
	);
};

export default App;
