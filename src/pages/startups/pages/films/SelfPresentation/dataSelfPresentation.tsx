// URL To Single Page / Read More button
import { pathToPodcastShow } from '../../../../../components/urlsData';

// Import the specific slider data
import { dataSliderPodcastShow } from './PodcastShow/dataSliderPodcastShow';
import { dataSliderProjectsDev } from '../../dataReusable';

// Several Projects Preview Page
export const dataSelfPresentation = {
	// English
	en: [
		// ### Self Presentation Projects ###
		{
			markdownAPI: '/text-data/films/SelfPresentation/PreviewSelfPresentationEN.md',
			sliderContent: dataSliderProjectsDev,
		},

		// ### Podcast Show  ###
		{
			markdownAPI: '/text-data/films/SelfPresentation/PodcastShow/PreviewPodcastShowEN.md',
			sliderContent: dataSliderPodcastShow,
			filmsPreviewUrl: pathToPodcastShow,
		},

		// ### Other  ###
	],

	// Ukraine
	ua: [
		// ### Self Presentation Projects ###
		{ markdownAPI: '/text-data/films/SelfPresentation/PreviewSelfPresentationUA.md' },

		// ### Podcast Show  ###
		{ markdownAPI: '/text-data/films/SelfPresentation/PodcastShow/PreviewPodcastShowUA.md' },
	],

	// rusian
	ru: [
		// ### Self Presentation Projects ###
		{ markdownAPI: '/text-data/films/SelfPresentation/PreviewSelfPresentationRU.md' },

		// ### Podcast Show  ###
		{ markdownAPI: '/text-data/films/SelfPresentation/PodcastShow/PreviewPodcastShowRU.md' },
	],
};
