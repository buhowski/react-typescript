import { website } from './metaCoreUrls';
import { pathToAbout, pathToProjects } from './urlsData';
import { generateBaseUrls } from '../pages/startups/helpers/seoHelper';

// Screenshots
const ogImageHome = `${website}/screenshot_plan.jpg`;
const ogImageAbout = `${website}/screenshot_about.jpg`;
const ogImagePortfolio = `${website}/screenshot_portfolio.jpg`;

// Main Website Meta Tags
const author = 'Olexander Tsiomakh — ';
const shortTitleAbout = 'Explorer ⋅ Developer ⋅ Creator';
const shortTitlePortfolio = 'Creative Portfolio ⋅ Dev & Design';

const defaultDescription =
	'Crafting projects and ideas, building worlds, and sharing creations. From Planet Earth, Solar System.';
const aboutDescription =
	'A creator at the crossroads of code, storytelling, design, and vision-shaping experiences.';
const portfolioDescription =
	'Dive into a collection of projects that combine creativity, functionality, and quality web design.';

// Default Meta Tags / Home Page
export const defaultMetaTags = {
	title: `${author}${shortTitleAbout}`,
	description: defaultDescription,
	canonicalUrl: `${website}/`,

	// Open Graph Meta Tags
	ogUrl: `${website}/`,
	ogTitle: shortTitleAbout,
	ogDescription: defaultDescription,
	ogImage: ogImageHome,
};

// About Page
export const aboutMetaTags = {
	title: `${author}${shortTitleAbout}`,
	description: aboutDescription,
	...generateBaseUrls(pathToAbout),

	// Open Graph Meta Tags
	ogTitle: shortTitleAbout,
	ogDescription: aboutDescription,
	ogImage: ogImageAbout,
};

// Portfolio Page
export const portfolioMetaTags = {
	title: `${author}${shortTitlePortfolio}`,
	description: portfolioDescription,
	...generateBaseUrls(pathToProjects),

	// Open Graph Meta Tags
	ogTitle: shortTitlePortfolio,
	ogDescription: portfolioDescription,
	ogImage: ogImagePortfolio,
};
