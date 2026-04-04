import { generateStartupsMeta } from '../helpers/metaHelper';
import { pathToVision } from '../../../components/urlsData';
import { ogImages } from '../../../components/metaTagsBasic';

// Main Website Meta Tags
const visionTitle = 'Another Dimension — Digital Magazine & Entertainment Startups';
const visionDescription =
	'Turning stories, tech, and imagination into a playground of innovation and creativity.';

// Business Plan
export const visionMetaTags = generateStartupsMeta({
	title: visionTitle,
	description: visionDescription,
	path: pathToVision,
	ogImage: ogImages.vision,
});

// MVP Page
