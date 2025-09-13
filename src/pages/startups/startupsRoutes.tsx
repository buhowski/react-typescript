import StartupsWrapper from './components/StartupsWrapper';
import { PageProps, LanguageCode } from '../../types/common';
import { findParentPath } from './helpers/backButtonPathHelper';

import {
	dataPageVision,
	dataPageMVP,
	dataPageCinema,
	dataPageEuropeanUkrainians,
	dataPageTheCorp,
	dataPageHeShe,
	dataPageOnceInUkraine,
	dataPageVolynWedding,
	dataPageWoodenFiction,
	dataPageLilithsAdventure,
	dataPageSelfPresentation,
	dataPagePodcastShow,
	dataPageGodEvening,
	dataPageGames,
	dataPageCossackSaga,
	dataPageCossackSagaPart1,
	dataPageCossackSagaPart2,
	dataPageCossackSagaPart3,
} from './startupsPages';

import {
	pathToVision,
	pathToMVP,
	pathToCinema,
	pathToEuropeanUkrainians,
	pathToTheCorp,
	pathToSelfPresentation,
	pathToPodcastShow,
	pathToGodEvening,
	pathToGames,
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

// Startup pages map
export const startupDataMap: Record<string, PageProps> = {
	[pathToVision]: { pageData: dataPageVision },
	[pathToMVP]: { pageData: dataPageMVP },

	// CINEMA INDUSTRY
	[pathToCinema]: { pageData: dataPageCinema },
	[pathToEuropeanUkrainians]: { pageData: dataPageEuropeanUkrainians },
	[pathToTheCorp]: { pageData: dataPageTheCorp },

	[pathToHeShe]: { pageData: dataPageHeShe },
	[pathToLilithsAdventure]: { pageData: dataPageLilithsAdventure },
	[pathToOnceInUkraine]: { pageData: dataPageOnceInUkraine },
	[pathToVolynWedding]: { pageData: dataPageVolynWedding },
	[pathToWoodenFiction]: { pageData: dataPageWoodenFiction },

	// Self Presentations
	[pathToSelfPresentation]: { pageData: dataPageSelfPresentation },
	[pathToPodcastShow]: { pageData: dataPagePodcastShow },
	[pathToGodEvening]: { pageData: dataPageGodEvening },

	// GAMING INDUSTRY
	[pathToGames]: { pageData: dataPageGames },
	[pathToCossackSaga]: { pageData: dataPageCossackSaga },
	[pathToCossackSagaPart1]: { pageData: dataPageCossackSagaPart1 },
	[pathToCossackSagaPart2]: { pageData: dataPageCossackSagaPart2 },
	[pathToCossackSagaPart3]: { pageData: dataPageCossackSagaPart3 },
};

// Subpath for nested pages
export const startupSubPaths: Record<string, string[] | Record<string, any> | null> = {
	[pathToGames]: {
		[pathToCossackSaga]: [pathToCossackSagaPart1, pathToCossackSagaPart2, pathToCossackSagaPart3],
	},
	[pathToCinema]: {
		[pathToEuropeanUkrainians]: null,
		[pathToTheCorp]: null,
		[pathToHeShe]: null,
		[pathToLilithsAdventure]: null,
		[pathToOnceInUkraine]: null,
		[pathToVolynWedding]: null,
		[pathToWoodenFiction]: null,
		[pathToSelfPresentation]: [pathToPodcastShow, pathToGodEvening],
	},
};

// Map of startup components with optional initial language
export const startupsMap: Record<
	string,
	React.FC<{ initialLang?: LanguageCode }>
> = Object.fromEntries(
	Object.entries(startupDataMap).map(([path, data]) => {
		const parent = findParentPath(startupSubPaths, path);

		return [
			path,
			(props: { initialLang?: LanguageCode }) => (
				<StartupsWrapper {...data} backButton={parent} initialLang={props.initialLang} />
			),
		];
	})
);

// Root startup paths
export const startupPaths = Object.keys(startupsMap);
