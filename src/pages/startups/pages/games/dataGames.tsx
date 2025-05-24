// URL To Single Page / Read More button
import { pathToCossacks } from '../../../../components/urlsData';
import { dataSliderCossacks } from './Cossacks/dataSliderCossacks';

export const dataGames = {
	// English
	en: [
		// ### Cossacks RPG ###
		{
			markdownAPI: '/text-data/games/Cossacks/PreviewCossacksEN.md',
			sliderContent: dataSliderCossacks,
			filmsPreviewUrl: pathToCossacks,
		},
	],

	// Ukraine
	ua: [
		// ### Cossacks RPG ###
		{ markdownAPI: '/text-data/games/Cossacks/PreviewCossacksUA.md' },
	],

	// rusian
	ru: [
		// ### Cossacks RPG ###
		{ markdownAPI: '/text-data/games/Cossacks/PreviewCossacksRU.md' },
	],
};
