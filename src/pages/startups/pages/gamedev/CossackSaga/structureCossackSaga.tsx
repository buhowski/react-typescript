// Data Text Language Helper
import { createData } from '../../../helpers/pageDataFactory';

// URL To Single Page / Read More button
import {
	pathToCossackSagaPart1,
	pathToCossackSagaPart2,
	pathToCossackSagaPart3,
} from '../../../../../components/urlsData';

// specific slider data
import { dataSliderSaga, dataSliderSaga2, dataSliderSaga3 } from './dataSlider';

// Shadows of the Cossacks: Saga
export const cossackSagaPage = createData([
	// Saga Preface
	{
		markdownAPI: '/text-data/gamedev/CossackSaga/PreviewCossackSaga.md',
		sliderContent: dataSliderSaga,
	},

	// Cossack Part I
	{
		markdownAPI: '/text-data/gamedev/CossackSaga/Part1/PreviewPart1.md',
		sliderContent: dataSliderSaga,
		pagePreviewUrl: pathToCossackSagaPart1,
	},

	// Cossack Part II
	{
		markdownAPI: '/text-data/gamedev/CossackSaga/Part2/PreviewPart2.md',
		sliderContent: dataSliderSaga2,
		pagePreviewUrl: pathToCossackSagaPart2,
	},

	// Cossack Part III
	{
		markdownAPI: '/text-data/gamedev/CossackSaga/Part3/PreviewPart3.md',
		sliderContent: dataSliderSaga3,
		pagePreviewUrl: pathToCossackSagaPart3,
	},
]);

// Cossack Part I
export const cossackSaga1Page = createData([
	{
		markdownAPI: '/text-data/gamedev/CossackSaga/Part1/Part1.md',
		sliderContent: dataSliderSaga,
	},
]);

// Cossack Part II
export const cossackSaga2Page = createData([
	{
		markdownAPI: '/text-data/gamedev/CossackSaga/Part2/Part2.md',
		sliderContent: dataSliderSaga2,
	},
]);

// Cossack Part III
export const cossackSaga3Page = createData([
	{
		markdownAPI: '/text-data/gamedev/CossackSaga/Part3/Part3.md',
		sliderContent: dataSliderSaga3,
	},
]);
