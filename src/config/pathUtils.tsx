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
} from '../components/urlsData';

export const isPathActive = (paths: string[], currentPath: string) =>
	paths.some((path) => path === currentPath || `${path}/` === currentPath);

// Used to activate "My Startups" nav item in the main header
export const startupPaths: string[] = [
	...startupsNav.map(({ pageLink }) => pageLink),
	pathToEuropeanUkrainians,
	pathToTheCorp,
	pathToCossackSaga,
	pathToSelfPresentation,
	pathToPodcastShow,
	pathToCossackSagaPart1,
	pathToCossackSagaPart2,
	pathToCossackSagaPart3,
];
