import { useEffect } from 'react';
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
	pathToEuropeanUkrainians,
	pathToTheCorp,
} from './components/urlsData';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Startup from './pages/startups/Startup';
import StartupFilms from './pages/startups/Films';
import StartupGames from './pages/startups/Games';
import StartupMVP from './pages/startups/MVP';

// Films Industry
import EuropeanUkrainians from './pages/startups/pages/films/EuropeanUkrainians/EuropeanUkrainians';
import TheCorp from './pages/startups/pages/films/TheCorp/TheCorp';

const routesData = [
	{ pathTo: '/', pageComponent: <Home /> },
	{ pathTo: pathToAbout, pageComponent: <About /> },
	{ pathTo: pathToProjects, pageComponent: <Projects /> },
	{ pathTo: pathToStartup, pageComponent: <Startup /> },
	{ pathTo: pathToStartupFilms, pageComponent: <StartupFilms /> },
	{ pathTo: pathToStartupGames, pageComponent: <StartupGames /> },
	{ pathTo: pathToStartupMVP, pageComponent: <StartupMVP /> },

	// Films Pitch
	{ pathTo: pathToEuropeanUkrainians, pageComponent: <EuropeanUkrainians /> },
	{ pathTo: pathToTheCorp, pageComponent: <TheCorp /> },
];

const App = () => {
	const location = useLocation();

	useEffect(() => {
		const handleResize = () => {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

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
