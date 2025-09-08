// specific slider data
import { dataSliderVision, dataSliderProjectDev, dataSliderJournalism } from './dataSlider';

export const startupsStructure = {
	// Business Plan Page
	visionPage: [
		{
			markdownAPI: '/text-data/vision/Vision.md',
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
