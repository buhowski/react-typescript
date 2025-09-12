// URL To Single Page / Read More button
import { pathToCossacksSaga } from '../../../components/urlsData';

// specific slider data
import { dataSliderCossacksSaga } from './games/CossacksSaga/dataSlider';
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
			markdownAPI: '/text-data/games/CossacksSaga/CossacksSaga.md',
			sliderContent: dataSliderCossacksSaga,
			pagePreviewUrl: pathToCossacksSaga,
		},
	],
};
