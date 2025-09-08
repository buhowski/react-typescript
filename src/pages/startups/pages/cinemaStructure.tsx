import {
	pathToEuropeanUkrainians,
	pathToSelfPresentation,
	pathToTheCorp,
	pathToHeShe,
	pathToOnceInUkraine,
	pathToVolynWedding,
	pathToLilithsAdventure,
	pathToWoodenFiction,
} from '../../../components/urlsData';

// specific slider data
import { dataSliderProjectDev, dataSliderOnceInUkraine } from './dataSlider';
import { dataSliderTheCorp } from './cinema/TheCorp/dataSlider';
import { dataSliderEuropeanUkrainians } from './cinema/EuropeanUkrainians/dataSlider';

export const cinemaStructure = {
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

		// The Corp
		{
			markdownAPI: '/text-data/cinema/TheCorp/PreviewTheCorp.md',
			sliderContent: dataSliderTheCorp,
			pagePreviewUrl: pathToTheCorp,
		},

		// Once In Ukraine
		{
			markdownAPI: '/text-data/cinema/OnceInUkraine/PreviewOnceInUkraine.md',
			sliderContent: dataSliderOnceInUkraine,
			pagePreviewUrl: pathToOnceInUkraine,
		},

		// Volyn Wedding
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

		// Self Presentation
		{
			markdownAPI: '/text-data/cinema/SelfPresentation/SelfPresentation.md',
			sliderContent: dataSliderProjectDev,
			pagePreviewUrl: pathToSelfPresentation,
		},
	],
};
