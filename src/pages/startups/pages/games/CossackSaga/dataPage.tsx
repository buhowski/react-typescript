import { dataSliderCossackSaga } from './dataSlider';
import {
	pathToCossackSagaPart1,
	pathToCossackSagaPart2,
	pathToCossackSagaPart3,
} from '../../../../../components/urlsData';
export const dataPageCossackSaga = {
	// English
	en: [
		// ### Cossacks Saga Preface  ###
		{
			markdownAPI: '/text-data/games/CossackSaga/PreviewCossackSagaEN.md',
			sliderContent: dataSliderCossackSaga,
		},

		// Part I: Whispers of the Forgotten
		{
			markdownAPI: '/text-data/games/CossackSaga/Part1/PreviewPart1EN.md',
			sliderContent: dataSliderCossackSaga,
			pagePreviewUrl: pathToCossackSagaPart1,
		},

		// Part II: Ashes of the Beloved
		{
			markdownAPI: '/text-data/games/CossackSaga/Part2/PreviewPart2EN.md',
			sliderContent: dataSliderCossackSaga,
			pagePreviewUrl: pathToCossackSagaPart2,
		},

		// Part III: Quantum Leap
		{
			markdownAPI: '/text-data/games/CossackSaga/Part3/PreviewPart3EN.md',
			sliderContent: dataSliderCossackSaga,
			pagePreviewUrl: pathToCossackSagaPart3,
		},
	],

	// Ukraine
	ua: [
		// ### Cossacks Saga Preface  ###
		{ markdownAPI: '/text-data/games/CossackSaga/PreviewCossackSagaUA.md' },

		// Part I: Whispers of the Forgotten
		{ markdownAPI: '/text-data/games/CossackSaga/Part1/PreviewPart1UA.md' },

		// Part II: Ashes of the Beloved
		{ markdownAPI: '/text-data/games/CossackSaga/Part2/PreviewPart2UA.md' },

		// Part III: Quantum Leap
		{ markdownAPI: '/text-data/games/CossackSaga/Part3/PreviewPart3UA.md' },
	],

	// rusian
	ru: [
		{ markdownAPI: '/text-data/games/CossackSaga/PreviewCossackSagaRU.md' },

		// Part I: Whispers of the Forgotten
		{ markdownAPI: '/text-data/games/CossackSaga/Part1/PreviewPart1RU.md' },

		// Part II: Ashes of the Beloved
		{ markdownAPI: '/text-data/games/CossackSaga/Part2/PreviewPart2RU.md' },

		// Part III: Quantum Leap
		{ markdownAPI: '/text-data/games/CossackSaga/Part3/PreviewPart3RU.md' },
	],
};
