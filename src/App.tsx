import { useLocation, Routes, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './components/header/Header';
import StartupWrapperSeo from './pages/startups/components/StartupWrapperSeo';
import { mainRoutes, startupDataMap } from './routesData';
import { normalizePath } from './pages/startups/helpers/metaHelper';
import EmailApp, { emailRoutes } from './email-builder/EmailApp';

const App = () => {
	const location = useLocation();

	const isEmailPage = emailRoutes.some(
		(route) => normalizePath(route.pathTo) === normalizePath(location.pathname),
	);

	if (isEmailPage) return <EmailApp />;

	return (
		<TransitionGroup>
			<CSSTransition key={location.pathname} classNames='slide' timeout={1100}>
				<div id='page' className='page'>
					<div className='page-container'>
						<Header />

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
	);
};

export default App;
