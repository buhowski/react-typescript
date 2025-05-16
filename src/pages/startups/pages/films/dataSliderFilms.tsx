import { dataSliderEU } from './EuropeanUkrainians/dataSliderEU';

// Custom Previes if need
const customFilmsAlts = [''];

export const dataFilmsSlider = {
	en: [
		{
			sliderContent: dataSliderEU.map((item, index) => ({
				...item,
				itemAlt: customFilmsAlts[index] ? customFilmsAlts[index] : item.itemAlt,
			})),
		},
		{ sliderContent: [] },
	],
};
