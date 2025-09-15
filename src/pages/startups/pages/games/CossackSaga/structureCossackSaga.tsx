// Data Text Language Helper
import { createData } from '../../../helpers/pageDataFactory';

// URL To Single Page / Read More button
import {
	pathToCossackSagaPart1,
	pathToCossackSagaPart2,
	pathToCossackSagaPart3,
} from '../../../../../components/urlsData';

// specific slider data
import { dataSliderCossackSaga } from './dataSlider';

// Shadows of the Cossacks: Saga
export const cossackSagaPage = createData([
	// Saga Preface
	{
		markdownAPI: '/text-data/games/CossackSaga/PreviewCossackSaga.md',
		sliderContent: dataSliderCossackSaga,
	},

	// Cossack Part I
	{
		markdownAPI: '/text-data/games/CossackSaga/Part1/PreviewPart1.md',
		sliderContent: dataSliderCossackSaga,
		pagePreviewUrl: pathToCossackSagaPart1,
	},

	// Cossack Part II
	{
		markdownAPI: '/text-data/games/CossackSaga/Part2/PreviewPart2.md',
		sliderContent: dataSliderCossackSaga,
		pagePreviewUrl: pathToCossackSagaPart2,
	},

	// Cossack Part III
	{
		markdownAPI: '/text-data/games/CossackSaga/Part3/PreviewPart3.md',
		sliderContent: dataSliderCossackSaga,
		pagePreviewUrl: pathToCossackSagaPart3,
	},
]);

// Cossack Part I
export const cossackSaga1Page = createData([
	{
		markdownAPI: '/text-data/games/CossackSaga/Part1/Part1.md',
		sliderContent: dataSliderCossackSaga,
	},
]);

// Cossack Part II
export const cossackSaga2Page = createData([
	{
		markdownAPI: '/text-data/games/CossackSaga/Part2/Part2.md',
		sliderContent: dataSliderCossackSaga,
	},
]);

// Cossack Part III
export const cossackSaga3Page = createData([
	{
		markdownAPI: '/text-data/games/CossackSaga/Part3/Part3.md',
		sliderContent: dataSliderCossackSaga,
	},
]);
