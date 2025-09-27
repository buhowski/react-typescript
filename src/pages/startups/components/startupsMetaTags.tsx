import { website } from '../../../components/metaCoreUrls';
import { generateHreflangUrls } from '../helpers/seoHelper';
import { pathToVision, pathToMVP } from '../../../components/urlsData';

// Screenshots
const ogImageStartup = `${website}/screenshot_plan.jpg`;

// Main Website Meta Tags
const visionTitle = 'Another Dimension — Digital Magazine & Entertainment Startups';
const visionDescription =
	'Turning stories, tech, and imagination into a playground of innovation and creativity.';

// ### Business Plan Page
export const visionMetaTags = {
	title: visionTitle,
	description: visionDescription,
	...generateHreflangUrls(pathToVision),

	// Open Graph Meta Tags
	ogTitle: visionTitle,
	ogDescription: visionDescription,
	ogImage: ogImageStartup,
};

// MVP Page
export const mvpMetaTags = {
	...visionMetaTags,
	...generateHreflangUrls(pathToMVP),
};
