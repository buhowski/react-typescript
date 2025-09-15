// Data Text Language Helper
import { createData } from '../helpers/pageDataFactory';

// URL To Single Page / Read More button
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
import {
	dataSliderProjectDev,
	dataSliderOnceInUkraine,
	dataSliderVolynWedding,
	dataSliderHeShe,
	dataSliderWoodenFiction,
	dataSliderLilithsAdventure,
} from './dataSlider';
import { dataSliderTheCorp } from './cinema/TheCorp/dataSlider';
import { dataSliderEuropeanUkrainians } from './cinema/EuropeanUkrainians/dataSlider';

// Cinema Page
export const cinemaPage = createData([
	// Preface
	{
		markdownAPI: '/text-data/cinema/PreviewCinema.md',
		sliderContent: dataSliderProjectDev,
	},

	// The Corp
	{
		markdownAPI: '/text-data/cinema/TheCorp/PreviewTheCorp.md',
		sliderContent: dataSliderTheCorp,
		pagePreviewUrl: pathToTheCorp,
	},

	// European Ukrainians
	{
		markdownAPI: '/text-data/cinema/EuropeanUkrainians/PreviewEuropeanUkrainians.md',
		sliderContent: dataSliderEuropeanUkrainians,
		pagePreviewUrl: pathToEuropeanUkrainians,
	},

	// Once In Ukraine
	{
		markdownAPI: '/text-data/cinema/OnceInUkraine/PreviewOnceInUkraine.md',
		sliderContent: dataSliderOnceInUkraine,
		pagePreviewUrl: pathToOnceInUkraine,
	},

	// He + She
	{
		markdownAPI: '/text-data/cinema/HeShe/PreviewHeShe.md',
		sliderContent: dataSliderHeShe,
		pagePreviewUrl: pathToHeShe,
	},

	// Volyn Wedding
	{
		markdownAPI: '/text-data/cinema/VolynWedding/PreviewVolynWedding.md',
		sliderContent: dataSliderVolynWedding,
		pagePreviewUrl: pathToVolynWedding,
	},

	// Wooden Fiction
	{
		markdownAPI: '/text-data/cinema/WoodenFiction/PreviewWoodenFiction.md',
		sliderContent: dataSliderWoodenFiction,
		pagePreviewUrl: pathToWoodenFiction,
	},

	// Lilith's Adventure
	{
		markdownAPI: '/text-data/cinema/LilithsAdventure/PreviewLilithsAdventure.md',
		sliderContent: dataSliderLilithsAdventure,
		pagePreviewUrl: pathToLilithsAdventure,
	},

	// Self Presentation
	{
		markdownAPI: '/text-data/cinema/SelfPresentation/SelfPresentation.md',
		sliderContent: dataSliderProjectDev,
		pagePreviewUrl: pathToSelfPresentation,
	},
]);
