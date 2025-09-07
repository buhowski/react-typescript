// URL To Single Page / Read More button
import {
	pathToEuropeanUkrainians,
	pathToSelfPresentation,
	pathToTheCorp,
} from '../../../../components/urlsData';

// Import the specific slider data
import { dataSliderTheCorp } from './TheCorp/dataSlider';
import { dataSliderEuropeanUkrainians } from './EuropeanUkrainians/dataSlider';
import { dataSliderProjectsDev } from '../dataReusable';

// Several Projects Preview Page
export const dataPageCinema = {
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
			pagePreviewUrl: pathToEuropeanUkrainians,
		},

		// ### The Corp .!. ###
		{
			markdownAPI: '/text-data/films/TheCorp/PreviewTheCorpEN.md',
			sliderContent: dataSliderTheCorp,
			pagePreviewUrl: pathToTheCorp,
		},

		// ### Self Presentation Projects  ###
		{
			markdownAPI: '/text-data/films/SelfPresentation/SelfPresentationEN.md',
			sliderContent: dataSliderProjectsDev,
			pagePreviewUrl: pathToSelfPresentation,
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
