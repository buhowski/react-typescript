import {
	pathToEuropeanUkrainians,
	pathToTheCorp,
	pathToCossackSaga,
	pathToCossackSagaPart1,
	pathToCossackSagaPart2,
	pathToCossackSagaPart3,
	startupsNav,
	pathToSelfPresentation,
	pathToPodcastShow,
	pathToStartupGames,
	pathToStartupFilms,
} from '../components/urlsData';

export const isPathActive = (paths: string[], currentPath: string) =>
	paths.some((path) => path === currentPath || `${path}/` === currentPath);

// Activate "My Startups" nav item in the main header
export const startupPaths: string[] = [
	...startupsNav.map(({ pageLink }) => pageLink),
	// Films
	pathToEuropeanUkrainians,
	pathToTheCorp,
	pathToSelfPresentation,
	pathToPodcastShow,
	// Games
	pathToCossackSaga,
	pathToCossackSagaPart1,
	pathToCossackSagaPart2,
	pathToCossackSagaPart3,
];

//  Mark tab as sub-active inside the startup sub-navigation
export const startupSubPaths: Record<string, string[]> = {
	// Games
	[pathToStartupGames]: [
		pathToCossackSaga,
		pathToCossackSagaPart1,
		pathToCossackSagaPart2,
		pathToCossackSagaPart3,
	],
	// Films
	[pathToStartupFilms]: [
		pathToSelfPresentation,
		pathToPodcastShow,
		pathToEuropeanUkrainians,
		pathToTheCorp,
		pathToSelfPresentation,
		pathToPodcastShow,
	],
};

export const isPathSubActive = (parentPath: string, currentPath: string) => {
	const subPaths = startupSubPaths[parentPath];
	if (!subPaths) {
		return false;
	}
	return isPathActive(subPaths, currentPath);
};
