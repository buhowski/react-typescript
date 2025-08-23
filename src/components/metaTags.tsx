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
const author = 'Olexander Tsiomakh';
const shortTitleAbout = 'Explorer | Developer | Creator';
const shortTitlePortfolio = 'Portfolio | Projects Overview';
const startupTitle = 'Another Dimension: Magazine | Media | Films | Games | Technologies';

const defaultDescription =
	'Building awesome products and contributing useful solutions to the world. Based on Planet Earth, Solar System.';
const startupDescription =
	'Creating an informational and entertaining magazine and transforming it into a company that produces its own technologies.';
const aboutDescription =
	'A developer and creator who builds innovative solutions at the intersection of tech and design.';
const portfolioDescription =
	'Explore portfolio, showcasing impactful projects developed for companies and innovative personal ventures.';

// ### Default Meta Tags / Home Page
export const defaultMetaTags = {
	title: `${author}: ${shortTitleAbout}`,
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
	title: `${author}: ${shortTitleAbout}`,
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
	title: `${author}: ${shortTitlePortfolio}`,
	description: portfolioDescription,
	canonicalUrl: buildUrl(pathToProjects),

	// Open Graph Meta Tags
	ogUrl: buildUrl(pathToProjects),
	ogTitle: shortTitlePortfolio,
	ogDescription: portfolioDescription,
	ogImage: ogImagePortfolio,
};
