import Startup from './Startup';
import StartupMVP from './MVP';

// Films Industry
import Cinema from './Cinema';
import EuropeanUkrainians from './pages/cinema/EuropeanUkrainians/EuropeanUkrainians';
import TheCorp from './pages/cinema/TheCorp/TheCorp';

import HeShe from './pages/cinema/HeShe/HeShe';
import LilithsAdventure from './pages/cinema/LilithsAdventure/LilithsAdventure';
import OnceInUkraine from './pages/cinema/OnceInUkraine/OnceInUkraine';
import VolynWedding from './pages/cinema/VolynWedding/VolynWedding';
import WoodenFiction from './pages/cinema/WoodenFiction/WoodenFiction';

import SelfPresentation from './pages/cinema/SelfPresentation/SelfPresentation';
import PodcastShow from './pages/cinema/SelfPresentation/PodcastShow/PodcastShow';
import GodEvening from './pages/cinema/SelfPresentation/GodEvening/GodEvening';

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
	pathToHeShe,
	pathToLilithsAdventure,
	pathToOnceInUkraine,
	pathToVolynWedding,
	pathToWoodenFiction,
} from '../../components/urlsData';

// Map of startup pages
export const startupsMap: Record<string, React.ComponentType<any>> = {
	// Main
	[pathToStartup]: Startup,
	[pathToStartupMVP]: StartupMVP,

	// CINEMA
	[pathToStartupFilms]: Cinema,
	[pathToEuropeanUkrainians]: EuropeanUkrainians,
	[pathToTheCorp]: TheCorp,

	[pathToHeShe]: HeShe,
	[pathToLilithsAdventure]: LilithsAdventure,
	[pathToOnceInUkraine]: OnceInUkraine,
	[pathToVolynWedding]: VolynWedding,
	[pathToWoodenFiction]: WoodenFiction,

	// Self Presentation
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

		pathToHeShe,
		pathToLilithsAdventure,
		pathToOnceInUkraine,
		pathToVolynWedding,
		pathToWoodenFiction,

		// Self Presentation
		pathToSelfPresentation,
		pathToPodcastShow,
		pathToGodEvening,
	],
};
