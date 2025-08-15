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
			markdownAPI: '/text-data/films/PreviewFilmsEN.md',
			sliderContent: dataSliderProjectsDev,
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

		// ### Self Presentation Projects  ###
		{
			markdownAPI: '/text-data/films/SelfPresentation/SelfPresentationEN.md',
			sliderContent: dataSliderProjectsDev,
			filmsPreviewUrl: pathToSelfPresentation,
		},
	],

	// Ukraine
	ua: [
		// ### Main Preface  ###
		{ markdownAPI: '/text-data/films/PreviewFilmsUA.md' },

		// ### European Ukrainians ###
		{ markdownAPI: '/text-data/films/EuropeanUkrainians/PreviewEuropeanUkrainiansUA.md' },

		// ### The Corp .!. ###
		{ markdownAPI: '/text-data/films/TheCorp/PreviewTheCorpUA.md' },

		// ### Self Presentation Projects ###
		{ markdownAPI: '/text-data/films/SelfPresentation/SelfPresentationUA.md' },
	],

	// rusian
	ru: [
		// ### Main Preface  ###
		{ markdownAPI: '/text-data/films/PreviewFilmsRU.md' },

		// ### European Ukrainians ###
		{ markdownAPI: '/text-data/films/EuropeanUkrainians/PreviewEuropeanUkrainiansRU.md' },

		// ### The Corp .!. ###
		{ markdownAPI: '/text-data/films/TheCorp/PreviewTheCorpRU.md' },

		// ### Self Presentation Projects ###
		{ markdownAPI: '/text-data/films/SelfPresentation/SelfPresentationRU.md' },
	],
};
