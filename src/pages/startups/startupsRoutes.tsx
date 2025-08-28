import Startup from './Startup';
import StartupMVP from './MVP';

// Films Industry
import StartupFilms from './Films';
import EuropeanUkrainians from './pages/films/EuropeanUkrainians/EuropeanUkrainians';
import TheCorp from './pages/films/TheCorp/TheCorp';
import SelfPresentation from './pages/films/SelfPresentation/SelfPresentation';
import PodcastShow from './pages/films/SelfPresentation/PodcastShow/PodcastShow';
import GodEvening from './pages/films/SelfPresentation/GodEvening/GodEvening';

// Games Industry
import StartupGames from './Games';
import CossackSaga from './pages/games/CossackSaga/CossackSaga';
import CossackSagaPart1 from './pages/games/CossackSaga/Part1/CossackSagaPart1';
import CossackSagaPart2 from './pages/games/CossackSaga/Part2/CossackSagaPart2';
import CossackSagaPart3 from './pages/games/CossackSaga/Part3/CossackSagaPart3';

import {
	pathToStartup,
	pathToStartupMVP,
	pathToStartupFilms,
	pathToEuropeanUkrainians,
	pathToTheCorp,
	pathToSelfPresentation,
	pathToPodcastShow,
	pathToGodEvening,
	pathToStartupGames,
	pathToCossackSaga,
	pathToCossackSagaPart1,
	pathToCossackSagaPart2,
	pathToCossackSagaPart3,
} from '../../components/urlsData';

// Map of startup pages
export const startupsMap: Record<string, React.ComponentType<any>> = {
	// Main
	[pathToStartup]: Startup,
	[pathToStartupMVP]: StartupMVP,

	// Films
	[pathToStartupFilms]: StartupFilms,
	[pathToEuropeanUkrainians]: EuropeanUkrainians,
	[pathToTheCorp]: TheCorp,
	[pathToSelfPresentation]: SelfPresentation,
	[pathToPodcastShow]: PodcastShow,
	[pathToGodEvening]: GodEvening,

	// Games
	[pathToStartupGames]: StartupGames,
	[pathToCossackSaga]: CossackSaga,
	[pathToCossackSagaPart1]: CossackSagaPart1,
	[pathToCossackSagaPart2]: CossackSagaPart2,
	[pathToCossackSagaPart3]: CossackSagaPart3,
};

// Root startup paths
export const startupPaths = Object.keys(startupsMap);

// Subpath grouping
export const startupSubPaths: Record<string, string[]> = {
	// Sub Games
	[pathToStartupGames]: [
		pathToCossackSaga,
		pathToCossackSagaPart1,
		pathToCossackSagaPart2,
		pathToCossackSagaPart3,
	],

	// Sub Films
	[pathToStartupFilms]: [
		pathToEuropeanUkrainians,
		pathToTheCorp,
		pathToSelfPresentation,
		pathToPodcastShow,
		pathToGodEvening,
	],
};
