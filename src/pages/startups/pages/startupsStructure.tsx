// Data Text Language Helper
import { createData } from '../helpers/pageDataFactory';

// specific slider data
import { dataSliderVision, dataSliderProjectDev, dataSliderJournalism } from './dataSlider';

// Business Plan Page
export const visionPage = createData([
	{
		markdownAPI: '/text-data/vision/Vision.md',
		sliderContent: dataSliderVision,
	},
]);

// MVP Page
export const MVPPage = createData([
	// Another Dimension
	{
		markdownAPI: '/text-data/mvp/AnotherDimension/AnotherDimension.md',
		sliderContent: dataSliderProjectDev,
	},

	// Project Journalism
	{
		markdownAPI: '/text-data/mvp/ProjectJournalism/ProjectJournalism.md',
		sliderContent: dataSliderJournalism,
	},
]);
