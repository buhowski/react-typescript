// Data Text Language Helper
import { createData } from '../helpers/pageDataFactory';

// URLs / Read More button
import { pathToCossackSaga } from '../../../components/urlsData';

// specific slider data
import { dataSliderCossackSaga } from './games/CossackSaga/dataSlider';
import { dataSliderProjectDev } from './dataSlider';

// Games Page
export const gamesPage = createData([
	// Preface
	{
		markdownAPI: '/text-data/games/PreviewGames.md',
		sliderContent: dataSliderProjectDev,
	},

	// Cossacks Saga
	{
		markdownAPI: '/text-data/games/CossackSaga/CossackSaga.md',
		sliderContent: dataSliderCossackSaga,
		pagePreviewUrl: pathToCossackSaga,
	},
]);
