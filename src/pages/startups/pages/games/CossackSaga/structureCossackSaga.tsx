// URL To Single Page / Read More button
import {
	pathToCossackSagaPart1,
	pathToCossackSagaPart2,
	pathToCossackSagaPart3,
} from '../../../../../components/urlsData';

// specific slider data
import { dataSliderCossackSaga } from './dataSlider';

export const structureCossackSaga = {
	// Shadows of the Cossacks: Saga
	cossackSagaPage: [
		// Saga Preface
		{
			markdownAPI: '/text-data/games/CossackSaga/PreviewCossackSaga.md',
			sliderContent: dataSliderCossackSaga,
		},

		// Part I: Whispers of the Forgotten
		{
			markdownAPI: '/text-data/games/CossackSaga/Part1/PreviewPart1.md',
			sliderContent: dataSliderCossackSaga,
			pagePreviewUrl: pathToCossackSagaPart1,
		},

		// Part II: Ashes of the Beloveds
		{
			markdownAPI: '/text-data/games/CossackSaga/Part2/PreviewPart2.md',
			sliderContent: dataSliderCossackSaga,
			pagePreviewUrl: pathToCossackSagaPart2,
		},

		// Part III: Quantum Leap
		{
			markdownAPI: '/text-data/games/CossackSaga/Part3/PreviewPart3.md',
			sliderContent: dataSliderCossackSaga,
			pagePreviewUrl: pathToCossackSagaPart3,
		},
	],
};
