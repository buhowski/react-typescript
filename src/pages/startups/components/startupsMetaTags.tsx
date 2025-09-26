import { generateMetaAlternates } from '../helpers/seoHelper';
import {
	buildUrl,
	ogImageStartup,
	visionTitle,
	visionDescription,
} from '../../../components/metaTags';

import { pathToVision, pathToMVP } from '../../../components/urlsData';

// ### Business Plan Page
export const visionMetaTags = {
	title: visionTitle,
	description: visionDescription,
	canonicalUrl: buildUrl(pathToVision),
	langAlternates: generateMetaAlternates(pathToVision),

	// Open Graph Meta Tags
	ogUrl: buildUrl(pathToVision),
	ogTitle: visionTitle,
	ogDescription: visionDescription,
	ogImage: ogImageStartup,
};

// MVP Page
export const mvpMetaTags = {
	...visionMetaTags,
	canonicalUrl: buildUrl(pathToMVP),
	langAlternates: generateMetaAlternates(pathToMVP),
	ogUrl: buildUrl(pathToMVP),
};
