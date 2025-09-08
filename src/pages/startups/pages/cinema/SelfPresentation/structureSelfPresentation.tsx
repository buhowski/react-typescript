// URL To Single Page / Read More button
import { pathToPodcastShow, pathToGodEvening } from '../../../../../components/urlsData';

// specific slider data
import { dataSliderProjectDev } from '../../dataSlider';
import { dataSliderPodcastShow, dataSliderGodEvening } from './dataSlider';

export const structureSelfPresentation = {
	// Self Presentation
	selfPresentationPage: [
		{
			markdownAPI: '/text-data/cinema/SelfPresentation/PreviewSelfPresentation.md',
			sliderContent: dataSliderProjectDev,
		},

		// Podcast Show
		{
			markdownAPI: '/text-data/cinema/SelfPresentation/PodcastShow/PreviewPodcastShow.md',
			sliderContent: dataSliderPodcastShow,
			pagePreviewUrl: pathToPodcastShow,
		},

		// God Evening
		{
			markdownAPI: '/text-data/cinema/SelfPresentation/GodEvening/PreviewGodEvening.md',
			sliderContent: dataSliderGodEvening,
			pagePreviewUrl: pathToGodEvening,
		},
	],

	// Podcast Show
	podcastShowPage: [
		{
			markdownAPI: '/text-data/cinema/SelfPresentation/PodcastShow/PodcastShow.md',
			sliderContent: dataSliderPodcastShow,
		},
	],

	// God Evening
	godEveningPage: [
		{
			markdownAPI: '/text-data/cinema/SelfPresentation/GodEvening/GodEvening.md',
			sliderContent: dataSliderGodEvening,
		},
	],
};
