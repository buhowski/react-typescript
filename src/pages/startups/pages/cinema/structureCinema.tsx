// specific slider data
import { dataSliderOnceInUkraine } from '../dataSlider';
import { dataSliderTheCorp } from './TheCorp/dataSlider';
import { dataSliderEuropeanUkrainians } from './EuropeanUkrainians/dataSlider';

export const structureCinema = {
	// European Ukrainians
	europeanUkrainiansPage: [
		{
			markdownAPI: '/text-data/cinema/EuropeanUkrainians/EuropeanUkrainians.md',
			sliderContent: dataSliderEuropeanUkrainians,
		},
	],

	// The Corp
	theCorpPage: [
		{
			markdownAPI: '/text-data/cinema/TheCorp/TheCorp.md',
			sliderContent: dataSliderTheCorp,
		},
	],

	// He + She
	heShePage: [
		{
			markdownAPI: '/text-data/cinema/HeShe/HeShe.md',
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
		},
	],

	// Wooden Fiction
	woodenFictionPage: [
		{
			markdownAPI: '/text-data/cinema/WoodenFiction/WoodenFiction.md',
		},
	],

	// Lilith's Adventure
	lilithsAdventurePage: [
		{
			markdownAPI: '/text-data/cinema/LilithsAdventure/LilithsAdventure.md',
		},
	],
};
