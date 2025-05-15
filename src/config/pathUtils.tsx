import {
	pathToStartupFilms,
	pathToStartupGames,
	pathToStartupMVP,
	pathToEuropeanUkrainians,
} from '../components/urlsData';

import { startupsNav } from '../pages/startups/data/startupsNav';

export const isPathActive = (paths: string[], currentPath: string) =>
	paths.some((path) => path === currentPath || `${path}/` === currentPath);

// Used to activate "My Startups" nav item in the main header
export const startupPaths: string[] = [
	...startupsNav.map(({ pageLink }) => pageLink),
	pathToEuropeanUkrainians,
	// add more if needed
];

//  Used to mark tab as active inside the startup sub-navigation
export const startupSubPaths: Record<string, string[]> = {
	[pathToStartupFilms]: [pathToEuropeanUkrainians],
	[pathToStartupGames]: [],
	[pathToStartupMVP]: [],
};
