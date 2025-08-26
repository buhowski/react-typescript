import React from 'react';
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

import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';

// Startup Pages
import Startup from './pages/startups/Startup';
import StartupMVP from './pages/startups/MVP';

// Film Industry Pages
import StartupFilms from './pages/startups/Films';
import EuropeanUkrainians from './pages/startups/pages/films/EuropeanUkrainians/EuropeanUkrainians';
import TheCorp from './pages/startups/pages/films/TheCorp/TheCorp';
import SelfPresentation from './pages/startups/pages/films/SelfPresentation/SelfPresentation';
import PodcastShow from './pages/startups/pages/films/SelfPresentation/PodcastShow/PodcastShow';

// Game Industry Pages
import StartupGames from './pages/startups/Games';
import CossackSaga from './pages/startups/pages/games/CossackSaga/CossackSaga';
import CossackSagaPart1 from './pages/startups/pages/games/CossackSaga/Part1/CossackSagaPart1';
import CossackSagaPart2 from './pages/startups/pages/games/CossackSaga/Part2/CossackSagaPart2';
import CossackSagaPart3 from './pages/startups/pages/games/CossackSaga/Part3/CossackSagaPart3';

// Map for SEO/Startup routing
export const startupsMap: Record<string, React.ComponentType<any>> = {
	// Main Startup Pages
	[pathToStartup]: Startup,
	[pathToStartupMVP]: StartupMVP,

	// Film Industry Pages
	[pathToStartupFilms]: StartupFilms,
	[pathToEuropeanUkrainians]: EuropeanUkrainians,
	[pathToTheCorp]: TheCorp,
	[pathToSelfPresentation]: SelfPresentation,
	[pathToPodcastShow]: PodcastShow,

	// Game Industry Pages
	[pathToStartupGames]: StartupGames,
	[pathToCossackSaga]: CossackSaga,
	[pathToCossackSagaPart1]: CossackSagaPart1,
	[pathToCossackSagaPart2]: CossackSagaPart2,
	[pathToCossackSagaPart3]: CossackSagaPart3,
};

// All Routes for App.tsx
export const routesData = [
	// Public Pages
	{ pathTo: '/', pageComponent: <Home /> },
	{ pathTo: pathToAbout, pageComponent: <About /> },
	{ pathTo: pathToProjects, pageComponent: <Projects /> },

	// Startup Pages
	...Object.entries(startupsMap).map(([path, Component]) => ({
		pathTo: path,
		pageComponent: <Component />,
	})),
];

// Array of all startup paths
export const startupPaths: string[] = Object.keys(startupsMap);
