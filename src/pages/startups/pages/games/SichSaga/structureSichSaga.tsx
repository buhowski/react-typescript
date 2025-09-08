// URL To Single Page / Read More button
import {
	pathToSichSagaPart1,
	pathToSichSagaPart2,
	pathToSichSagaPart3,
} from '../../../../../components/urlsData';

// specific slider data
import { dataSliderSichSaga } from '../SichSaga/dataSlider';

export const structureSichSaga = {
	// Shadows of Sich: Saga
	sichSagaPage: [
		// Saga Preface
		{
			markdownAPI: '/text-data/games/SichSaga/PreviewSichSaga.md',
			sliderContent: dataSliderSichSaga,
		},

		// Part I: Whispers of the Forgotten
		{
			markdownAPI: '/text-data/games/SichSaga/Part1/PreviewPart1.md',
			sliderContent: dataSliderSichSaga,
			pagePreviewUrl: pathToSichSagaPart1,
		},

		// Part II: Ashes of the Beloved
		{
			markdownAPI: '/text-data/games/SichSaga/Part2/PreviewPart2.md',
			sliderContent: dataSliderSichSaga,
			pagePreviewUrl: pathToSichSagaPart2,
		},

		// Part III: Quantum Leap
		{
			markdownAPI: '/text-data/games/SichSaga/Part3/PreviewPart3.md',
			sliderContent: dataSliderSichSaga,
			pagePreviewUrl: pathToSichSagaPart3,
		},
	],
};
