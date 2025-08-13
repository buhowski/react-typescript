import { useLocation, Routes, Route } from 'react-router-dom';
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
	pathToPodcastShow,
	pathToSelfPresentation,
	pathToCossackSaga,
	pathToCossackSagaPart1,
	pathToCossackSagaPart2,
	pathToCossackSagaPart3,
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
import CossackSaga from './pages/startups/pages/games/CossackSaga/CossackSaga';
import CossackSagaPart1 from './pages/startups/pages/games/CossackSaga/Part1/CossackSagaPart1';
import CossackSagaPart2 from './pages/startups/pages/games/CossackSaga/Part2/CossackSagaPart2';
import CossackSagaPart3 from './pages/startups/pages/games/CossackSaga/Part3/CossackSagaPart3';

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
	{ pathTo: pathToCossackSaga, pageComponent: <CossackSaga /> },
	{ pathTo: pathToCossackSagaPart1, pageComponent: <CossackSagaPart1 /> },
	{ pathTo: pathToCossackSagaPart2, pageComponent: <CossackSagaPart2 /> },
	{ pathTo: pathToCossackSagaPart3, pageComponent: <CossackSagaPart3 /> },
];

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
							{routesData.map(({ pathTo, pageComponent }, i) => (
								<Route
									key={i + pathTo}
									path={pathTo.startsWith('/') ? pathTo : `/${pathTo}`}
									element={pageComponent}
								/>
							))}

							{/* catch-all 404 route and redirect here */}
							<Route path='*' element={<Startup />} />
						</Routes>
					</div>
				</div>
			</CSSTransition>
		</TransitionGroup>
	);
};

export default App;
