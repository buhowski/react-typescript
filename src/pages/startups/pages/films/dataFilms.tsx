// URL To Single Page / Read More button
import {
	pathToEuropeanUkrainians,
	pathToSelfPresentation,
	pathToTheCorp,
} from '../../../../components/urlsData';

// Import the specific slider data
import { dataSliderTheCorp } from './TheCorp/dataSliderTheCorp';
import { dataSliderEuropeanUkrainians } from './EuropeanUkrainians/dataSliderEuropeanUkrainians';
import { dataCustomSliderSelfPresentation } from './dataCustomSlider';

// Several Projects Preview Page
export const dataFilms = {
	// English
	en: [
		// ### Self Presentation Projects  ###
		{
			markdownAPI: '',
			sliderContent: dataCustomSliderSelfPresentation,
			filmsPreviewUrl: pathToSelfPresentation,
		},

		// ### European Ukrainians ###
		{
			markdownAPI: '/text-data/films/EuropeanUkrainians/PreviewEuropeanUkrainiansEN.md',
			sliderContent: dataSliderEuropeanUkrainians,
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
	ru: [
		// ### Self Presentation Projects ###
		{ markdownAPI: '/text-data/films/PodcastShow/PodcastShowUA.md' },

		// ### European Ukrainians ###
		{ markdownAPI: '/text-data/films/EuropeanUkrainians/PreviewEuropeanUkrainiansUA.md' },

		// ### The Corp .!. ###
		{ markdownAPI: '/text-data/films/TheCorp/PreviewTheCorpUA.md' },
	],
};
