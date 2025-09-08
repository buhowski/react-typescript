// URL To Single Page / Read More button
import { pathToSichSaga } from '../../../components/urlsData';

// specific slider data
import { dataSliderSichSaga } from './games/SichSaga/dataSlider';
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
			markdownAPI: '/text-data/games/SichSaga/SichSaga.md',
			sliderContent: dataSliderSichSaga,
			pagePreviewUrl: pathToSichSaga,
		},
	],
};
