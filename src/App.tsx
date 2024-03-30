import { useEffect } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useTabletQuery } from './hooks/useMediaQuery';
import {
	pathToStartup,
	pathToStartupFilms,
	pathToAbout,
	pathToProjects,
	pathToStartupGames,
	pathToStartupMVP,
} from './components/urlsData';

import './styles/App.scss';

// Pages
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';

// Startup Pages / Separate Projects
import Startup from './pages/startups/Startup';
import StartupFilms from './pages/startups/Films';
import StartupGames from './pages/startups/Games';
import StartupMVP from './pages/startups/MVP';

// Routes and pages
const routesData = [
	{
		pathTo: '',
		pageComponent: <Home />,
	},
	{
		pathTo: pathToAbout,
		pageComponent: <About />,
	},
	{
		pathTo: pathToProjects,
		pageComponent: <Projects />,
	},
	{
		pathTo: pathToStartup,
		pageComponent: <Startup />,
	},
	{
		pathTo: pathToStartupFilms,
		pageComponent: <StartupFilms />,
	},
	{
		pathTo: pathToStartupGames,
		pageComponent: <StartupGames />,
	},
	{
		pathTo: pathToStartupMVP,
		pageComponent: <StartupMVP />,
	},
];

const App = () => {
	const tabletQuery = useTabletQuery();
	const location = useLocation();

	useEffect(() => {
		const handleResize = () => {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		};

		if (tabletQuery) {
			handleResize();
			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}
	}, [tabletQuery]);

	return (
		<TransitionGroup>
			<CSSTransition key={location.key} classNames='slide' timeout={1700}>
				<div id='page' className='page'>
					<div className='page-container'>
						<Header />
						<Routes location={location}>
							{routesData.map(({ pathTo, pageComponent }, i) => {
								return (
									<Route key={i + pathTo} path={`/${pathTo}`} element={pageComponent} />
								);
							})}
						</Routes>
					</div>
				</div>
			</CSSTransition>
		</TransitionGroup>
	);
};

export default App;
