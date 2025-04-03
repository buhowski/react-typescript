import './styles/App.scss';
import { useState, useEffect } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PageHelmet from './config/PageHelmet';
import { defaultMetaTags } from './config/metaTags';
import {
	pathToStartup,
	pathToStartupFilms,
	pathToAbout,
	pathToProjects,
	pathToStartupGames,
	pathToStartupMVP,
} from './components/urlsData';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Startup from './pages/startups/Startup';
import StartupFilms from './pages/startups/Films';
import StartupGames from './pages/startups/Games';
import StartupMVP from './pages/startups/MVP';

const routesData = [
	{ pathTo: '/', pageComponent: <Home /> },
	{ pathTo: pathToAbout, pageComponent: <About /> },
	{ pathTo: pathToProjects, pageComponent: <Projects /> },
	{ pathTo: pathToStartup, pageComponent: <Startup /> },
	{ pathTo: pathToStartupFilms, pageComponent: <StartupFilms /> },
	{ pathTo: pathToStartupGames, pageComponent: <StartupGames /> },
	{ pathTo: pathToStartupMVP, pageComponent: <StartupMVP /> },
];

const App = () => {
	const location = useLocation();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		// Wait for all resources (including styles) to load
		const handleLoad = () => setIsLoaded(true);
		window.addEventListener('load', handleLoad);

		// Fallback timeout
		const timeout = setTimeout(() => setIsLoaded(true), 100);

		return () => {
			window.removeEventListener('load', handleLoad);
			clearTimeout(timeout);
		};
	}, []);

	useEffect(() => {
		const handleResize = () => {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	if (!isLoaded) {
		return null; // Prevents rendering until styles are ready
	}

	return (
		<TransitionGroup>
			<CSSTransition key={location.pathname} classNames='slide' timeout={1300}>
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
						</Routes>
					</div>
				</div>
			</CSSTransition>
		</TransitionGroup>
	);
};

export default App;
