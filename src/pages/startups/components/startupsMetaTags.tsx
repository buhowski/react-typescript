import { website } from '../../../components/metaCoreUrls';
import { generateHreflangUrls } from '../helpers/seoHelper';
import { pathToVision } from '../../../components/urlsData';

// Screenshots
const ogImageStartup = `${website}/screenshot_plan.jpg`;

// Main Website Meta Tags
const visionTitle = 'Another Dimension — Digital Magazine & Entertainment Startups';
const visionDescription =
	'Turning stories, tech, and imagination into a playground of innovation and creativity.';

// Base static meta tags template
const baseMetaTags = {
	title: visionTitle,
	description: visionDescription,
	// Open Graph Meta Tags
	ogTitle: visionTitle,
	ogDescription: visionDescription,
	ogImage: ogImageStartup,

	...generateHreflangUrls(pathToVision),
};

// Startups
export const visionMetaTags = {
	...baseMetaTags,
	...generateHreflangUrls(pathToVision),
};
