import StartupsWrapper from './components/StartupsWrapper';
import { PageProps, LanguageCode } from '../../types/common';

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
	dataPageSichSaga,
	dataPageSichSagaPart1,
	dataPageSichSagaPart2,
	dataPageSichSagaPart3,
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
	pathToSichSaga,
	pathToSichSagaPart1,
	pathToSichSagaPart2,
	pathToSichSagaPart3,
	pathToHeShe,
	pathToLilithsAdventure,
	pathToOnceInUkraine,
	pathToVolynWedding,
	pathToWoodenFiction,
} from '../../components/urlsData';

// Get parent path in tree
const findParentPath = (
	tree: Record<string, any>,
	target: string,
	parent: string | null = null
): string | null => {
	for (const key in tree) {
		if (key === target) return parent;
		const child = tree[key];

		if (Array.isArray(child)) {
			if (child.includes(target)) return key;
		}

		if (child && typeof child === 'object') {
			const res = findParentPath(child, target, key);
			if (res) return res;
		}
	}
	return null;
};

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
	[pathToSichSaga]: { pageData: dataPageSichSaga },
	[pathToSichSagaPart1]: { pageData: dataPageSichSagaPart1 },
	[pathToSichSagaPart2]: { pageData: dataPageSichSagaPart2 },
	[pathToSichSagaPart3]: { pageData: dataPageSichSagaPart3 },
};

// Subpath for nested pages
export const startupSubPaths: Record<string, string[] | Record<string, any> | null> = {
	[pathToGames]: {
		[pathToSichSaga]: [pathToSichSagaPart1, pathToSichSagaPart2, pathToSichSagaPart3],
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
