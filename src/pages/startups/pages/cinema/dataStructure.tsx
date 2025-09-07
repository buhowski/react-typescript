// URL To Single Page / Read More button
import {
	pathToEuropeanUkrainians,
	pathToSelfPresentation,
	pathToTheCorp,
	pathToPodcastShow,
	pathToGodEvening,
} from '../../../../components/urlsData';

// specific slider data
import { dataSliderProjectDev } from '../dataSlider';
import { dataSliderTheCorp } from './TheCorp/dataSlider';
import { dataSliderEuropeanUkrainians } from './EuropeanUkrainians/dataSlider';
import { dataSliderPodcastShow } from './SelfPresentation/PodcastShow/dataSlider';

export const structureCinema = {
	// Cinema Page
	cinemaPage: [
		// Preface
		{
			markdownAPI: '/text-data/cinema/PreviewFilms.md',
			sliderContent: dataSliderProjectDev,
		},

		// European Ukrainians
		{
			markdownAPI: '/text-data/cinema/EuropeanUkrainians/PreviewEuropeanUkrainians.md',
			sliderContent: dataSliderEuropeanUkrainians,
			pagePreviewUrl: pathToEuropeanUkrainians,
		},

		// The Corp .!.
		{
			markdownAPI: '/text-data/cinema/TheCorp/PreviewTheCorp.md',
			sliderContent: dataSliderTheCorp,
			pagePreviewUrl: pathToTheCorp,
		},

		// Self Presentation Projects
		{
			markdownAPI: '/text-data/cinema/SelfPresentation/SelfPresentation.md',
			sliderContent: dataSliderProjectDev,
			pagePreviewUrl: pathToSelfPresentation,
		},
	],

	// European Ukrainians
	europeanUkrainiansPage: [
		{
			markdownAPI: '/text-data/cinema/EuropeanUkrainians/EuropeanUkrainians.md',
			sliderContent: dataSliderEuropeanUkrainians,
		},
	],

	// The Corp .!.
	theCorpPage: [
		{
			markdownAPI: '/text-data/cinema/TheCorp/TheCorp.md',
			sliderContent: dataSliderTheCorp,
		},
	],

	heShePage: [],

	onceInUkrainePage: [],

	volynWeddingPage: [],

	woodenFictionPage: [],

	lilithsAdventurePage: [],

	// Self Presentation Projects
	selfPresentationPage: [
		// Preface
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
			// sliderContent: dataSliderPodcastShow,
			pagePreviewUrl: pathToGodEvening,
		},
	],

	podcastShowPage: [
		{
			markdownAPI: '/text-data/cinema/SelfPresentation/PodcastShow/PodcastShow.md',
			sliderContent: dataSliderPodcastShow,
		},
	],

	godEveningPage: [
		{
			markdownAPI: '/text-data/cinema/SelfPresentation/GodEvening/GodEvening.md',
			// sliderContent: dataSliderPodcastShow,
		},
	],
};
