// URL To Single Page / Read More button
import { pathToPodcastShow } from '../../../../../components/urlsData';

// Import the specific slider data
import { dataSliderPodcastShow } from './PodcastShow/dataSliderPodcastShow';

// Several Projects Preview Page
export const dataSelfPresentation = {
	// English
	en: [
		// ### Podcast Show  ###
		{
			markdownAPI: '/text-data/films/PodcastShow/PodcastShowEN.md',
			sliderContent: dataSliderPodcastShow,
			filmsPreviewUrl: pathToPodcastShow,
		},

		// ### Other  ###
	],

	// Ukraine
	ua: [],

	// rusian
	ru: [],
};
