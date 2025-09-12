// URL To Single Page / Read More button
import {
	pathToCossacksSagaPart1,
	pathToCossacksSagaPart2,
	pathToCossacksSagaPart3,
} from '../../../../../components/urlsData';

// specific slider data
import { dataSliderCossacksSaga } from './dataSlider';

export const structureCossacksSaga = {
	// Shadows of the Cossacks: Saga
	cossacksSagaPage: [
		// Saga Preface
		{
			markdownAPI: '/text-data/games/CossacksSaga/PreviewCossacksSaga.md',
			sliderContent: dataSliderCossacksSaga,
		},

		// Part I: Whispers of the Forgotten
		{
			markdownAPI: '/text-data/games/CossacksSaga/Part1/PreviewPart1.md',
			sliderContent: dataSliderCossacksSaga,
			pagePreviewUrl: pathToCossacksSagaPart1,
		},

		// Part II: Ashes of the Beloveds
		{
			markdownAPI: '/text-data/games/CossacksSaga/Part2/PreviewPart2.md',
			sliderContent: dataSliderCossacksSaga,
			pagePreviewUrl: pathToCossacksSagaPart2,
		},

		// Part III: Quantum Leap
		{
			markdownAPI: '/text-data/games/CossacksSaga/Part3/PreviewPart3.md',
			sliderContent: dataSliderCossacksSaga,
			pagePreviewUrl: pathToCossacksSagaPart3,
		},
	],
};
