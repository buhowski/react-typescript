import { dataSliderCossackSaga } from './dataSliderCossackSaga';
import { pathToCossackSaga } from '../../../../../components/urlsData';
export const dataCossackSaga = {
	// English
	en: [
		// ### Cossacks Saga Preface  ###
		{
			markdownAPI: '/text-data/games/Cossacks/CossacksEN.md',
			sliderContent: dataSliderCossackSaga,
		},

		// Part I: Whispers of the Forgotten
		{
			markdownAPI: '/text-data/games/Cossacks/CossacksEN.md',
			filmsPreviewUrl: pathToCossackSaga,
		},
	],

	// Ukraine
	ua: [{ markdownAPI: '/text-data/games/Cossacks/CossacksUA.md' }],

	// rusian
	ru: [{ markdownAPI: '/text-data/games/Cossacks/CossacksRU.md' }],
};
