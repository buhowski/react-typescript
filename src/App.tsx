// import { useEffect } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PageHelmet from './config/PageHelmet';
import { defaultMetaTags } from './components/metaTags';
import {
	pathToStartup,
	pathToStartupFilms,
	pathToAbout,
	pathToProjects,
	pathToStartupGames,
	pathToStartupMVP,
	pathToEuropeanUkrainians,
	pathToTheCorp,
	pathToCossacks,
	pathToPodcastShow,
	pathToSelfPresentation,
} from './components/urlsData';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';

// Startup Pages
import Startup from './pages/startups/Startup';
import StartupFilms from './pages/startups/Films';
import StartupGames from './pages/startups/Games';
import StartupMVP from './pages/startups/MVP';

// Films Industry
import EuropeanUkrainians from './pages/startups/pages/films/EuropeanUkrainians/EuropeanUkrainians';
import TheCorp from './pages/startups/pages/films/TheCorp/TheCorp';
import SelfPresentation from './pages/startups/pages/films/SelfPresentation/SelfPresentation';
import PodcastShow from './pages/startups/pages/films/SelfPresentation/PodcastShow/PodcastShow';

// Games Industry
import Cossacks from './pages/startups/pages/games/Cossacks/Cossacks';

const routesData = [
	{ pathTo: '/', pageComponent: <Home /> },
	{ pathTo: pathToAbout, pageComponent: <About /> },
	{ pathTo: pathToProjects, pageComponent: <Projects /> },

	// Startups
	{ pathTo: pathToStartup, pageComponent: <Startup /> },
	{ pathTo: pathToStartupFilms, pageComponent: <StartupFilms /> },
	{ pathTo: pathToStartupGames, pageComponent: <StartupGames /> },
	{ pathTo: pathToStartupMVP, pageComponent: <StartupMVP /> },

	// Films Industry
	{ pathTo: pathToEuropeanUkrainians, pageComponent: <EuropeanUkrainians /> },
	{ pathTo: pathToTheCorp, pageComponent: <TheCorp /> },
	{ pathTo: pathToSelfPresentation, pageComponent: <SelfPresentation /> },
	{ pathTo: pathToPodcastShow, pageComponent: <PodcastShow /> },

	// Games Industry
	{ pathTo: pathToCossacks, pageComponent: <Cossacks /> },
];

const App = () => {
	const location = useLocation();

	// Old Fix for full height of mobile browser without navbar
	// useEffect(() => {
	// 	const handleResize = () => {
	// 		const vh = window.innerHeight * 0.01;
	// 		document.documentElement.style.setProperty('--vh', `${vh}px`);
	// 	};

	// 	handleResize();
	// 	window.addEventListener('resize', handleResize);

	// 	return () => window.removeEventListener('resize', handleResize);
	// }, []);

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
						</Routes>
					</div>
				</div>
			</CSSTransition>
		</TransitionGroup>
	);
};

export default App;
