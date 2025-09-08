// import { buildEntry } from '../../helpers/buildEntry';

// URL To Single Page / Read More button
import {
	pathToEuropeanUkrainians,
	pathToSelfPresentation,
	pathToTheCorp,
	pathToPodcastShow,
	pathToGodEvening,
	pathToHeShe,
	pathToOnceInUkraine,
	pathToVolynWedding,
	pathToLilithsAdventure,
	pathToWoodenFiction,
} from '../../../../components/urlsData';

// specific slider data
import { dataSliderProjectDev, dataSliderOnceInUkraine } from '../dataSlider';
import { dataSliderTheCorp } from './TheCorp/dataSlider';
import { dataSliderEuropeanUkrainians } from './EuropeanUkrainians/dataSlider';
import { dataSliderPodcastShow, dataSliderGodEvening } from './SelfPresentation/dataSlider';

export const structureCinema = {
	// Cinema Page
	cinemaPage: [
		// Preface
		{
			markdownAPI: '/text-data/cinema/PreviewCinema.md',
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

		// Once Upon a Time... in Ukraine
		{
			markdownAPI: '/text-data/cinema/OnceInUkraine/PreviewOnceInUkraine.md',
			sliderContent: dataSliderOnceInUkraine,
			pagePreviewUrl: pathToOnceInUkraine,
		},

		// Volyn Wedding: The Groom's Room
		{
			markdownAPI: '/text-data/cinema/VolynWedding/PreviewVolynWedding.md',
			pagePreviewUrl: pathToVolynWedding,
		},

		// He + She
		{
			markdownAPI: '/text-data/cinema/HeShe/PreviewHeShe.md',
			pagePreviewUrl: pathToHeShe,
		},

		// Wooden Fiction
		{
			markdownAPI: '/text-data/cinema/WoodenFiction/PreviewWoodenFiction.md',
			pagePreviewUrl: pathToWoodenFiction,
		},

		// Lilith's Adventure
		{
			markdownAPI: '/text-data/cinema/LilithsAdventure/PreviewLilithsAdventure.md',
			pagePreviewUrl: pathToLilithsAdventure,
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

	heShePage: [
		{
			markdownAPI: '/text-data/cinema/HeShe/HeShe.md',
		},
	],

	onceInUkrainePage: [
		{
			markdownAPI: '/text-data/cinema/OnceInUkraine/OnceInUkraine.md',
			sliderContent: dataSliderOnceInUkraine,
		},
	],

	volynWeddingPage: [
		{
			markdownAPI: '/text-data/cinema/VolynWedding/VolynWedding.md',
		},
	],

	woodenFictionPage: [
		{
			markdownAPI: '/text-data/cinema/WoodenFiction/WoodenFiction.md',
		},
	],

	lilithsAdventurePage: [
		{
			markdownAPI: '/text-data/cinema/LilithsAdventure/LilithsAdventure.md',
		},
	],

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
			sliderContent: dataSliderGodEvening,
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
			sliderContent: dataSliderGodEvening,
		},
	],
};
