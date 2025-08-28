import { pathToStartup, pathToAbout, pathToProjects } from './urlsData';

// Base Website URL
const website = 'https://buhowski.dev';
const buildUrl = (path: string) => `${website}${path}`;

// Open Graph Images
// const ogImageHome = `${website}/screenshot_home.jpg`;
const ogImageStartup = `${website}/screenshot_plan.jpg`;
const ogImageAbout = `${website}/screenshot_about.jpg`;
const ogImagePortfolio = `${website}/screenshot_portfolio.jpg`;

// Main Website Meta Tags
const author = 'Olexander Tsiomakh — ';
const shortTitleAbout = 'Explorer ⋅ Developer ⋅ Creator';
const shortTitlePortfolio = 'Portfolio ⋅ Projects Overview';
const startupTitle = 'Another Dimension — Magazine ⋅ Media ⋅ Cinema ⋅ Games ⋅ Tech';

const defaultDescription =
	'Crafting projects and ideas, building worlds, and sharing creations. From Planet Earth, Solar System.';
const startupDescription =
	'Turning stories, tech, and imagination into a playground of innovation and creativity.';
const aboutDescription =
	'A creator at the crossroads of code, storytelling, design, and vision-shaping experiences.';
const portfolioDescription =
	'Dive into a collection of projects that combine creativity, functionality, and quality web design.';

// ### Default Meta Tags / Home Page
export const defaultMetaTags = {
	title: `${author}${shortTitleAbout}`,
	description: defaultDescription,
	canonicalUrl: website,

	// Open Graph Meta Tags
	ogUrl: website,
	ogTitle: shortTitleAbout,
	ogDescription: defaultDescription,
	ogImage: ogImageStartup,
};

// ### Business Plan Page
export const startupsMetaTags = {
	title: startupTitle,
	description: startupDescription,
	canonicalUrl: buildUrl(pathToStartup),

	// Open Graph Meta Tags
	ogUrl: buildUrl(pathToStartup),
	ogTitle: startupTitle,
	ogDescription: startupDescription,
	ogImage: ogImageStartup,
};

// ### About Page
export const aboutMetaTags = {
	title: `${author}${shortTitleAbout}`,
	description: aboutDescription,
	canonicalUrl: buildUrl(pathToAbout),

	// Open Graph Meta Tags
	ogUrl: buildUrl(pathToAbout),
	ogTitle: shortTitleAbout,
	ogDescription: aboutDescription,
	ogImage: ogImageAbout,
};

// ### Portfolio Page
export const portfolioMetaTags = {
	title: `${author}${shortTitlePortfolio}`,
	description: portfolioDescription,
	canonicalUrl: buildUrl(pathToProjects),

	// Open Graph Meta Tags
	ogUrl: buildUrl(pathToProjects),
	ogTitle: shortTitlePortfolio,
	ogDescription: portfolioDescription,
	ogImage: ogImagePortfolio,
};
