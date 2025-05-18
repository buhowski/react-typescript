import { dataSliderEU } from './EuropeanUkrainians/dataSliderEU';

// Custom Previes if need
const customFilmsAlts = [''];

export const dataFilmsSlider = {
	en: [
		// ### European Ukrainians ###
		{
			sliderContent: dataSliderEU.map((item, index) => ({
				...item,
				itemAlt: customFilmsAlts[index] ? customFilmsAlts[index] : item.itemAlt,
			})),
		},

		// ### Podcast Show ###
		{ sliderContent: [] },

		// ### The Corp .!. ###
		{ sliderContent: [] },
	],
};
