// URL To Single Page / Read More button
import {
	pathToEuropeanUkrainians,
	pathToPodcastShow,
	pathToTheCorp,
} from '../../../../components/urlsData';

// Import the specific slider data (you'll still need these)
import { dataSliderEU } from '../films/EuropeanUkrainians/dataSliderEU';
import { dataSliderTheCorp } from '../films/TheCorp/dataSliderTheCorp';

// Custom Previes if need (consider typing this array for clarity)
const customFilmsAlts = [''];

export const dataFilmsText = {
	// English
	en: [
		// ### Self Presentation Projects  ###
		{
			markdownAPI: '/text-data/films/PodcastShow/PodcastShowEN.md',
			filmsPreviewUrl: pathToPodcastShow,
			sliderContent: dataSliderTheCorp,
		},

		// ### European Ukrainians ###
		{
			markdownAPI: '/text-data/films/EuropeanUkrainians/PreviewEuropeanUkrainiansEN.md',
			filmsPreviewUrl: pathToEuropeanUkrainians,

			sliderContent: dataSliderEU.map((item, index) => ({
				...item,
				itemAlt: customFilmsAlts[index] ? customFilmsAlts[index] : item.itemAlt,
			})),
		},

		// ### The Corp .!. ###
		{
			markdownAPI: '/text-data/films/TheCorp/PreviewTheCorpEN.md',
			filmsPreviewUrl: pathToTheCorp,
			sliderContent: [],
		},
	],

	// Ukraine
	ua: [
		// ### Self Presentation Projects ###
		{ markdownAPI: '/text-data/films/PodcastShow/PodcastShowUA.md' },

		// ### European Ukrainians ###
		{ markdownAPI: '/text-data/films/EuropeanUkrainians/PreviewEuropeanUkrainiansUA.md' },

		// ### The Corp .!. ###
		{ markdownAPI: '/text-data/films/TheCorp/PreviewTheCorpUA.md' },
	],

	// rusian
	ru: [],
};
