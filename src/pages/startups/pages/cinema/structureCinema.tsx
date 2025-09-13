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

export const structureCinema = {
	// The Corp
	theCorpPage: [
		{
			markdownAPI: '/text-data/cinema/TheCorp/TheCorp.md',
			sliderContent: dataSliderTheCorp,
		},
	],

	// European Ukrainians
	europeanUkrainiansPage: [
		{
			markdownAPI: '/text-data/cinema/EuropeanUkrainians/EuropeanUkrainians.md',
			sliderContent: dataSliderEuropeanUkrainians,
		},
	],

	// He + She
	heShePage: [
		{
			markdownAPI: '/text-data/cinema/HeShe/HeShe.md',
			sliderContent: dataSliderHeShe,
		},
	],

	// Once In Ukraine
	onceInUkrainePage: [
		{
			markdownAPI: '/text-data/cinema/OnceInUkraine/OnceInUkraine.md',
			sliderContent: dataSliderOnceInUkraine,
		},
	],

	// Volyn Wedding
	volynWeddingPage: [
		{
			markdownAPI: '/text-data/cinema/VolynWedding/VolynWedding.md',
			sliderContent: dataSliderVolynWedding,
		},
	],

	// Wooden Fiction
	woodenFictionPage: [
		{
			markdownAPI: '/text-data/cinema/WoodenFiction/WoodenFiction.md',
			sliderContent: dataSliderWoodenFiction,
		},
	],

	// Lilith's Adventure
	lilithsAdventurePage: [
		{
			markdownAPI: '/text-data/cinema/LilithsAdventure/LilithsAdventure.md',
			sliderContent: dataSliderLilithsAdventure,
		},
	],
};
