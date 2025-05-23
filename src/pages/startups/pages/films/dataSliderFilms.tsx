import { dataSliderEU } from './EuropeanUkrainians/dataSliderEU';
import { dataSliderTheCorp } from './TheCorp/dataSliderTheCorp';

// Custom Previes if need
const customFilmsAlts = [''];

export const dataFilmsSlider = {
	en: [
		// ### Podcast Show ###
		{ sliderContent: dataSliderTheCorp },

		// ### European Ukrainians ###
		{
			sliderContent: dataSliderEU.map((item, index) => ({
				...item,
				itemAlt: customFilmsAlts[index] ? customFilmsAlts[index] : item.itemAlt,
			})),
		},

		// ### The Corp .!. ###
		{ sliderContent: [] },
	],
};
