// URL To Single Page / Read More button
import { pathToCossackSaga } from '../../../components/urlsData';

// specific slider data
import { dataSliderCossackSaga } from './games/CossackSaga/dataSlider';
import { dataSliderProjectDev } from './dataSlider';

export const gamesStructure = {
	// Games Page
	gamesPage: [
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
	],
};
