// URL To Single Page / Read More button
import { pathToCossackSaga } from '../../../../components/urlsData';
import { dataSliderCossackSaga } from './CossackSaga/dataSliderCossackSaga';
import { dataSliderProjectsDev } from '../dataReusable';

export const dataGames = {
	// English
	en: [
		// ### Main Preface  ###
		{
			markdownAPI: '/text-data/PreviewMainEN.md',
			sliderContent: dataSliderProjectsDev,
		},

		// ### Cossacks Saga ###
		{
			markdownAPI: '/text-data/games/CossackSaga/CossackSagaEN.md',
			sliderContent: dataSliderCossackSaga,
			filmsPreviewUrl: pathToCossackSaga,
		},
	],

	// Ukraine
	ua: [
		// ### Main Preface  ###
		{ markdownAPI: '/text-data/PreviewMainUA.md' },

		// ### Cossacks RPG ###
		{ markdownAPI: '/text-data/games/CossackSaga/CossackSagaUA.md' },
	],

	// rusian
	ru: [
		// ### Main Preface  ###
		{ markdownAPI: '/text-data/PreviewMainRU.md' },

		// ### Cossacks Saga ###
		{ markdownAPI: '/text-data/games/CossackSaga/CossackSagaRU.md' },
	],
};
