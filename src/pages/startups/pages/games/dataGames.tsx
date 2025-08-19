// URL To Single Page / Read More button
import { pathToCossackSaga } from '../../../../components/urlsData';
import { dataSliderCossackSaga } from './CossackSaga/dataSliderCossackSaga';
import { dataSliderProjectsDev } from '../dataReusable';

export const dataGames = {
	// English
	en: [
		// ### Main Preface  ###
		{
			markdownAPI: '/text-data/games/PreviewGamesEN.md',
			sliderContent: dataSliderProjectsDev,
		},

		// ### Cossacks Saga ###
		{
			markdownAPI: [
				'/text-data/games/CossackSaga/PreviewCossackSagaEN.md',
				'/text-data/games/CossackSaga/CossackSagaEN.md',
			],
			sliderContent: dataSliderCossackSaga,
			filmsPreviewUrl: pathToCossackSaga,
		},
	],

	// Ukraine
	ua: [
		// ### Main Preface  ###
		{ markdownAPI: '/text-data/games/PreviewGamesUA.md' },

		// ### Cossacks RPG ###
		{
			markdownAPI: [
				'/text-data/games/CossackSaga/PreviewCossackSagaUA.md',
				'/text-data/games/CossackSaga/CossackSagaUA.md',
			],
		},
	],

	// rusian
	ru: [
		// ### Main Preface  ###
		{ markdownAPI: '/text-data/games/PreviewGamesRU.md' },

		// ### Cossacks Saga ###
		{
			markdownAPI: [
				'/text-data/games/CossackSaga/PreviewCossackSagaRU.md',
				'/text-data/games/CossackSaga/CossackSagaRU.md',
			],
		},
	],
};
