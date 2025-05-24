// URL To Single Page / Read More button
import {
	pathToEuropeanUkrainians,
	pathToSelfPresentation,
	pathToTheCorp,
} from '../../../../components/urlsData';

// Import the specific slider data
import { dataSliderTheCorp } from './TheCorp/dataSliderTheCorp';
import { dataSliderEU } from './EuropeanUkrainians/dataSliderEU';
import { dataCustomSliderSelfPresentation } from './dataCustomSlider';

// Several Projects Preview Page
export const dataFilms = {
	// English
	en: [
		// ### Self Presentation Projects  ###
		{
			markdownAPI: '/text-data/films/PodcastShow/PodcastShowEN.md',
			sliderContent: dataCustomSliderSelfPresentation,
			filmsPreviewUrl: pathToSelfPresentation,
		},

		// ### European Ukrainians ###
		{
			markdownAPI: '/text-data/films/EuropeanUkrainians/PreviewEuropeanUkrainiansEN.md',
			sliderContent: dataSliderEU,
			filmsPreviewUrl: pathToEuropeanUkrainians,
		},

		// ### The Corp .!. ###
		{
			markdownAPI: '/text-data/films/TheCorp/PreviewTheCorpEN.md',
			sliderContent: dataSliderTheCorp,
			filmsPreviewUrl: pathToTheCorp,
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
