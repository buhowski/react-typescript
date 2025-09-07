// URL To Single Page / Read More button
import {
	pathToSichSaga,
	pathToSichSagaPart1,
	pathToSichSagaPart2,
	pathToSichSagaPart3,
} from '../../../../components/urlsData';

// specific slider data
import { dataSliderSichSaga } from './SichSaga/dataSlider';
import { dataSliderProjectDev } from '../dataSlider';

export const structureGames = {
	// Games Page
	gamesPage: [
		// Preface
		{
			markdownAPI: '/text-data/games/PreviewGames.md',
			sliderContent: dataSliderProjectDev,
		},

		// Cossacks Saga
		{
			markdownAPI: '/text-data/games/SichSaga/SichSaga.md',
			sliderContent: dataSliderSichSaga,
			pagePreviewUrl: pathToSichSaga,
		},
	],

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

	sichSaga1Page: [
		{
			markdownAPI: '/text-data/games/SichSaga/Part1/Part1.md',
			sliderContent: dataSliderSichSaga,
		},
	],

	sichSaga2Page: [
		{
			markdownAPI: '/text-data/games/SichSaga/Part2/Part2.md',
			sliderContent: dataSliderSichSaga,
		},
	],

	sichSaga3Page: [
		{
			markdownAPI: '/text-data/games/SichSaga/Part3/Part3.md',
			sliderContent: dataSliderSichSaga,
		},
	],
};
