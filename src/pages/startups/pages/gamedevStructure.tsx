// Data Text Language Helper
import { createData } from '../helpers/pageDataFactory';

// URLs / Read More button
import { pathToCossackSaga } from '../../../components/urlsData';

// specific slider data
import { dataSliderSaga } from './gamedev/CossackSaga/dataSlider';
import { dataSliderProjectDev } from './dataSlider';

// Gamedev Page
export const gamesPage = createData([
	// Preface
	{
		markdownAPI: '/text-data/gamedev/PreviewGamedev.md',
		sliderContent: dataSliderProjectDev,
	},

	// Cossacks Saga
	{
		markdownAPI: '/text-data/gamedev/CossackSaga/CossackSaga.md',
		sliderContent: dataSliderSaga,
		pagePreviewUrl: pathToCossackSaga,
	},
]);
