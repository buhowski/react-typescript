import StartupsWrapper from './StartupsWrapper';
import { PageProps, LanguageCode } from '../../types/common';

import { dataPageVision } from './pages/vision/dataPage';
import { dataPageMVP } from './pages/MVP/dataPage';

// CINEMA INDUSTRY
import { dataPageCinema } from './pages/cinema/dataPage';
import { dataPageEuropeanUkrainians } from './pages/cinema/EuropeanUkrainians/dataPage';
import { dataPageTheCorp } from './pages/cinema/TheCorp/dataPage';

import { dataPageHeShe } from './pages/cinema/HeShe/dataPage';
import { dataPageOnceInUkraine } from './pages/cinema/OnceInUkraine/dataPage';
import { dataPageVolynWedding } from './pages/cinema/VolynWedding/dataPage';

import { dataPageWoodenFiction } from './pages/cinema/WoodenFiction/dataPage';
import { dataPageLilithsAdventure } from './pages/cinema/LilithsAdventure/dataPage';

import { dataPageSelfPresentation } from './pages/cinema/SelfPresentation/dataPage';
import { dataPagePodcastShow } from './pages/cinema/SelfPresentation/PodcastShow/dataPage';
import { dataPageGodEvening } from './pages/cinema/SelfPresentation/GodEvening/dataPage';

// GAMING INDUSTRY
import { dataPageGames } from './pages/games/dataPage';
import { dataPageCossackSaga } from './pages/games/CossackSaga/dataPage';
import { dataPageCossackSagaPart1 } from './pages/games/CossackSaga/Part1/dataPage';
import { dataPageCossackSagaPart2 } from './pages/games/CossackSaga/Part2/dataPage';
import { dataPageCossackSagaPart3 } from './pages/games/CossackSaga/Part3/dataPage';

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

// 404 fallback to Startups
export const NotFoundToStartupPage: React.FC = () => <StartupsWrapper pageData={dataPageVision} />;
