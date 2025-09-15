// Data Text Language Helper
import { createData } from '../../../helpers/pageDataFactory';

// URL To Single Page / Read More button
import {
	pathToPodcastShow,
	pathToGodEvening,
	pathToCryClub,
} from '../../../../../components/urlsData';

// specific slider data
import { dataSliderProjectDev } from '../../dataSlider';
import { dataSliderPodcastShow, dataSliderGodEvening, dataSliderCryClub } from './dataSlider';

// Self Presentation
export const selfPresentationPage = createData([
	{
		markdownAPI: '/text-data/cinema/SelfPresentation/PreviewSelfPresentation.md',
		sliderContent: dataSliderProjectDev,
	},

	// Podcast Show
	{
		markdownAPI: '/text-data/cinema/SelfPresentation/PodcastShow/PreviewPodcastShow.md',
		sliderContent: dataSliderPodcastShow,
		pagePreviewUrl: pathToPodcastShow,
	},

	// God Evening
	{
		markdownAPI: '/text-data/cinema/SelfPresentation/GodEvening/PreviewGodEvening.md',
		sliderContent: dataSliderGodEvening,
		pagePreviewUrl: pathToGodEvening,
	},

	// Crying Fighters Club
	{
		markdownAPI: '/text-data/cinema/SelfPresentation/CryClub/PreviewCryClub.md',
		sliderContent: dataSliderCryClub,
		pagePreviewUrl: pathToCryClub,
	},
]);

// Podcast Show
export const podcastShowPage = createData([
	{
		markdownAPI: '/text-data/cinema/SelfPresentation/PodcastShow/PodcastShow.md',
		sliderContent: dataSliderPodcastShow,
	},
]);

// God Evening
export const godEveningPage = createData([
	{
		markdownAPI: '/text-data/cinema/SelfPresentation/GodEvening/GodEvening.md',
		sliderContent: dataSliderGodEvening,
	},
]);

// Crying Fighters Club
export const cryClubPage = createData([
	{
		markdownAPI: '/text-data/cinema/SelfPresentation/CryClub/CryClub.md',
		sliderContent: dataSliderCryClub,
	},
]);
