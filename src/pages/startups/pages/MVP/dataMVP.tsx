import { dataSliderProjectJournalism } from './dataSliderMVP';
import { dataSliderProjectsDev } from '../dataReusable';

export const dataMVP = {
	// English
	en: [
		// ### Another Dimension ###
		{
			markdownAPI: '/text-data/mvp/AnotherDimension/AnotherDimensionEN.md',
			sliderContent: dataSliderProjectsDev,
		},

		// ### Project Journalism ###
		{
			markdownAPI: '/text-data/mvp/ProjectJournalism/ProjectJournalismEN.md',
			sliderContent: dataSliderProjectJournalism,
		},
	],

	// Ukraine
	ua: [
		// ### Another Dimension ###
		{ markdownAPI: '/text-data/mvp/AnotherDimension/AnotherDimensionUA.md' },

		// ### Project Journalism ###
		{ markdownAPI: '/text-data/mvp/ProjectJournalism/ProjectJournalismUA.md' },
	],

	// rusian
	ru: [
		// ### Another Dimension ###
		{ markdownAPI: '/text-data/mvp/AnotherDimension/AnotherDimensionRU.md' },

		// ### Project Journalism ###
		{ markdownAPI: '/text-data/mvp/ProjectJournalism/ProjectJournalismRU.md' },
	],
};
