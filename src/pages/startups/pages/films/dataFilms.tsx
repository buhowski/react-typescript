// URL To Single Page / Read More button
import {
	pathToEuropeanUkrainians,
	pathToSelfPresentation,
	pathToTheCorp,
} from '../../../../components/urlsData';

// Import the specific slider data
import { dataSliderTheCorp } from './TheCorp/dataSliderTheCorp';
import { dataSliderEuropeanUkrainians } from './EuropeanUkrainians/dataSliderEuropeanUkrainians';
import { dataSliderProjectsDev } from '../dataReusable';

// Several Projects Preview Page
export const dataFilms = {
	// English
	en: [
		// ### Main Preface  ###
		{
			markdownAPI: '/text-data/PreviewMainEN.md',
			sliderContent: dataSliderProjectsDev,
		},

		// ### Self Presentation Projects  ###
		{
			markdownAPI: '/text-data/films/SelfPresentation/SelfPresentationEN.md',
			sliderContent: dataSliderProjectsDev,
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
		// ### Main Preface  ###
		{ markdownAPI: '/text-data/PreviewMainUA.md' },

		// ### Self Presentation Projects ###
		{ markdownAPI: '/text-data/films/SelfPresentation/SelfPresentationUA.md' },

		// ### European Ukrainians ###
		{ markdownAPI: '/text-data/films/EuropeanUkrainians/PreviewEuropeanUkrainiansUA.md' },

		// ### The Corp .!. ###
		{ markdownAPI: '/text-data/films/TheCorp/PreviewTheCorpUA.md' },
	],

	// rusian
	ru: [
		// ### Main Preface  ###
		{ markdownAPI: '/text-data/PreviewMainRU.md' },

		// ### Self Presentation Projects ###
		{ markdownAPI: '/text-data/films/SelfPresentation/SelfPresentationRU.md' },

		// ### European Ukrainians ###
		{ markdownAPI: '/text-data/films/EuropeanUkrainians/PreviewEuropeanUkrainiansRU.md' },

		// ### The Corp .!. ###
		{ markdownAPI: '/text-data/films/TheCorp/PreviewTheCorpRU.md' },
	],
};
