// URL To Single Page / Read More button
import { pathToCossacks } from '../../../../components/urlsData';
import { dataSliderCossacks } from './Cossacks/dataSliderCossacks';
import { dataSliderProjectsDev } from '../dataReusable';

export const dataGames = {
	// English
	en: [
		// ### Main Preface  ###
		{
			markdownAPI: '/text-data/PreviewMainEN.md',
			sliderContent: dataSliderProjectsDev,
		},

		// ### Cossacks RPG ###
		{
			markdownAPI: '/text-data/games/Cossacks/PreviewCossacksEN.md',
			sliderContent: dataSliderCossacks,
			filmsPreviewUrl: pathToCossacks,
		},
	],

	// Ukraine
	ua: [
		// ### Main Preface  ###
		{ markdownAPI: '/text-data/PreviewMainUA.md' },

		// ### Cossacks RPG ###
		{ markdownAPI: '/text-data/games/Cossacks/PreviewCossacksUA.md' },
	],

	// rusian
	ru: [
		// ### Main Preface  ###
		{ markdownAPI: '/text-data/PreviewMainRU.md' },

		// ### Cossacks RPG ###
		{ markdownAPI: '/text-data/games/Cossacks/PreviewCossacksRU.md' },
	],
};
