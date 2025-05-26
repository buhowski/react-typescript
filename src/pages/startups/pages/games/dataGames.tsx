// URL To Single Page / Read More button
import { pathToCossacks } from '../../../../components/urlsData';
import { dataSliderCossacks } from './Cossacks/dataSliderCossacks';
import { dataSliderGamesPreface } from './dataSliderGamesCustom';

export const dataGames = {
	// English
	en: [
		// ### Main Preface  ###
		{
			markdownAPI: '/text-data/PreviewMainEN.md',
			sliderContent: dataSliderGamesPreface,
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
		{
			markdownAPI: '/text-data/PreviewMainUA.md',
			sliderContent: dataSliderGamesPreface,
		},

		// ### Cossacks RPG ###
		{ markdownAPI: '/text-data/games/Cossacks/PreviewCossacksUA.md' },
	],

	// rusian
	ru: [
		// ### Main Preface  ###
		{
			markdownAPI: '/text-data/PreviewMainRU.md',
			sliderContent: dataSliderGamesPreface,
		},

		// ### Cossacks RPG ###
		{ markdownAPI: '/text-data/games/Cossacks/PreviewCossacksRU.md' },
	],
};
