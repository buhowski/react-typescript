import StartupsWrapper from './components/StartupsWrapper';
import { PageProps, LanguageCode } from '../../types/common';
import { visionMetaTags } from './components/startupsMetaTags';

import { findParentPath } from './helpers/backButtonPathHelper';
import { visionPage, MVPPage } from './pages/startupsStructure';

// CINEMA INDUSTRY
import { cinemaPage } from './pages/cinemaStructure';
import {
	theCorpPage,
	europeanUkrainiansPage,
	heShePage,
	onceInUkrainePage,
	volynWeddingPage,
	woodenFictionPage,
	lilithsAdventurePage,
} from './pages/cinema/structureCinema';

// Self Presentations
import {
	selfPresentationPage,
	podcastShowPage,
	godEveningPage,
	cryClubPage,
} from './pages/cinema/SelfPresentation/structureSelfPresentation';

// GAMING INDUSTRY
import { gamesPage } from './pages/gamesStructure';
import {
	cossackSagaPage,
	cossackSaga1Page,
	cossackSaga2Page,
	cossackSaga3Page,
} from './pages/games/CossackSaga/structureCossackSaga';

// URLs
import {
	pathToVision,
	pathToMVP,

	// CINEMA INDUSTRY
	pathToCinema,
	pathToEuropeanUkrainians,
	pathToTheCorp,
	pathToHeShe,
	pathToLilithsAdventure,
	pathToOnceInUkraine,
	pathToVolynWedding,
	pathToWoodenFiction,

	// Self Presentations
	pathToSelfPresentation,
	pathToPodcastShow,
	pathToGodEvening,
	pathToCryClub,

	// GAMING INDUSTRY
	pathToGames,
	pathToCossackSaga,
	pathToCossackSagaPart1,
	pathToCossackSagaPart2,
	pathToCossackSagaPart3,
} from '../../components/urlsData';

// Startup pages map
export const startupDataMap: Record<string, PageProps> = {
	[pathToVision]: { pageData: visionPage, metaTags: visionMetaTags },
	[pathToMVP]: { pageData: MVPPage },

	// CINEMA INDUSTRY
	[pathToCinema]: { pageData: cinemaPage },
	[pathToTheCorp]: { pageData: theCorpPage },
	[pathToEuropeanUkrainians]: { pageData: europeanUkrainiansPage },
	[pathToHeShe]: { pageData: heShePage },
	[pathToOnceInUkraine]: { pageData: onceInUkrainePage },
	[pathToVolynWedding]: { pageData: volynWeddingPage },
	[pathToWoodenFiction]: { pageData: woodenFictionPage },
	[pathToLilithsAdventure]: { pageData: lilithsAdventurePage },

	// Self Presentations
	[pathToSelfPresentation]: { pageData: selfPresentationPage },
	[pathToPodcastShow]: { pageData: podcastShowPage },
	[pathToGodEvening]: { pageData: godEveningPage },
	[pathToCryClub]: { pageData: cryClubPage },

	// GAMING INDUSTRY
	[pathToGames]: { pageData: gamesPage },
	[pathToCossackSaga]: { pageData: cossackSagaPage },
	[pathToCossackSagaPart1]: { pageData: cossackSaga1Page },
	[pathToCossackSagaPart2]: { pageData: cossackSaga2Page },
	[pathToCossackSagaPart3]: { pageData: cossackSaga3Page },
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
		[pathToSelfPresentation]: [pathToPodcastShow, pathToGodEvening, pathToCryClub],
	},
};

// Map of startup components with optional initial language
type InitialLangProp = {
	initialLang?: LanguageCode;
	metaTags?: Partial<PageProps['metaTags']>;
};

export const startupsMap: Record<string, React.FC<InitialLangProp>> = Object.fromEntries(
	Object.entries(startupDataMap).map(([path, pageData]) => {
		const parent = findParentPath(startupSubPaths, path);
		const defaultMeta = pageData.metaTags || visionMetaTags;

		return [
			path,
			(props: InitialLangProp) => (
				<StartupsWrapper
					{...pageData}
					backButton={parent}
					initialLang={props.initialLang}
					metaTags={{ ...defaultMeta, ...props.metaTags }}
				/>
			),
		];
	})
);
