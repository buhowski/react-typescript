// specific slider data
import { dataSliderVision, dataSliderProjectDev, dataSliderJournalism } from './dataSlider';

export const structureVision = {
	// Business Plan Page
	visionPage: [
		{
			markdownAPI: '/text-data/startup/Startup.md',
			sliderContent: dataSliderVision,
		},
	],

	// MVP Page
	MVPPage: [
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
	],
};
