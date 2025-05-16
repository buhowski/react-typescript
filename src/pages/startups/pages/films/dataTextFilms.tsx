// URL To Single Page / Read More button
import { pathToEuropeanUkrainians, pathToTheCorp } from '../../../../components/urlsData';

export const dataFilmsText = {
	// English
	en: [
		// ### European Ukrainians ###
		{
			markdownAPI: '/text-data/films/EuropeanUkrainians/PreviewEuropeanUkrainiansEN.md',
			filmsPreviewUrl: pathToEuropeanUkrainians,
		},

		// ### The Corp .!. ###
		{
			markdownAPI: '/text-data/films/TheCorp/PreviewTheCorpEN.md',
			filmsPreviewUrl: pathToTheCorp,
		},
	],

	// Ukraine
	ua: [
		// ### European Ukrainians ###
		{ markdownAPI: '/text-data/films/EuropeanUkrainians/PreviewEuropeanUkrainiansUA.md' },

		// ### The Corp .!. ###
		{ markdownAPI: '/text-data/films/TheCorp/PreviewTheCorpUA.md' },
	],

	// rusian
	ru: [],
};
