// Data Text Language Helper
import { createData } from '../../helpers/pageDataFactory';

// specific slider data
import {
	dataSliderOnceInUkraine,
	dataSliderVolynWedding,
	dataSliderHeShe,
	dataSliderWoodenFiction,
	dataSliderLilithsAdventure,
} from '../dataSlider';
import { dataSliderTheCorp } from './TheCorp/dataSlider';
import { dataSliderEuropeanUkrainians } from './EuropeanUkrainians/dataSlider';

// The Corp
export const theCorpPage = createData([
	{
		markdownAPI: '/text-data/cinema/TheCorp/TheCorp.md',
		sliderContent: dataSliderTheCorp,
	},
]);

// European Ukrainians
export const europeanUkrainiansPage = createData([
	{
		markdownAPI: '/text-data/cinema/EuropeanUkrainians/EuropeanUkrainians.md',
		sliderContent: dataSliderEuropeanUkrainians,
	},
]);

// He + She
export const heShePage = createData([
	{
		markdownAPI: '/text-data/cinema/HeShe/HeShe.md',
		sliderContent: dataSliderHeShe,
	},
]);

// Once In Ukraine
export const onceInUkrainePage = createData([
	{
		markdownAPI: '/text-data/cinema/OnceInUkraine/OnceInUkraine.md',
		sliderContent: dataSliderOnceInUkraine,
	},
]);

// Volyn Wedding
export const volynWeddingPage = createData([
	{
		markdownAPI: '/text-data/cinema/VolynWedding/VolynWedding.md',
		sliderContent: dataSliderVolynWedding,
	},
]);

// Wooden Fiction
export const woodenFictionPage = createData([
	{
		markdownAPI: '/text-data/cinema/WoodenFiction/WoodenFiction.md',
		sliderContent: dataSliderWoodenFiction,
	},
]);

// Lilith's Adventure
export const lilithsAdventurePage = createData([
	{
		markdownAPI: '/text-data/cinema/LilithsAdventure/LilithsAdventure.md',
		sliderContent: dataSliderLilithsAdventure,
	},
]);
