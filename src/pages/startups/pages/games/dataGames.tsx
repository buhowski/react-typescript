// URL To Single Page / Read More button
import { pathToCossackSaga } from '../../../../components/urlsData';
import { dataSliderCossackSaga } from './CossackSaga/dataSliderCossackSaga';
import { dataSliderProjectsDev } from '../dataReusable';

export const dataGames = {
	// English
	en: [
		// ### Games Preface ###
		{
			markdownAPI: '/text-data/games/PreviewGamesEN.md',
			sliderContent: dataSliderProjectsDev,
		},

		// ### Cossacks Saga ###
		{
			markdownAPI: '/text-data/games/CossackSaga/CossackSagaEN.md',
			sliderContent: dataSliderCossackSaga,
			pagePreviewUrl: pathToCossackSaga,
		},
	],

	// Ukraine
	ua: [
		// ### Games Preface ###
		{ markdownAPI: '/text-data/games/PreviewGamesUA.md' },

		// ### Cossacks Saga ###
		{ markdownAPI: '/text-data/games/CossackSaga/CossackSagaUA.md' },
	],

	// rusian
	ru: [
		// ### Games Preface ###
		{ markdownAPI: '/text-data/games/PreviewGamesRU.md' },

		// ### Cossacks Saga ###
		{ markdownAPI: '/text-data/games/CossackSaga/CossackSagaRU.md' },
	],
};
