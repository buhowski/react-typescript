import { pathToAbout, pathToProjects } from './urlsData';

// Base Website URL
export const website = 'https://buhowski.dev';
export const buildUrl = (path: string) => `${website}${path}`;

// Open Graph Images
// const ogImageHome = `${website}/screenshot_home.jpg`;
export const ogImageStartup = `${website}/screenshot_plan.jpg`;
export const ogImageAbout = `${website}/screenshot_about.jpg`;
export const ogImagePortfolio = `${website}/screenshot_portfolio.jpg`;

// Main Website Meta Tags
export const author = 'Olexander Tsiomakh — ';
export const shortTitleAbout = 'Explorer ⋅ Developer ⋅ Creator';
export const shortTitlePortfolio = 'Creative Portfolio ⋅ Dev & Design';
export const visionTitle = 'Another Dimension — Digital Magazine & Entertainment Startups';

export const defaultDescription =
	'Crafting projects and ideas, building worlds, and sharing creations. From Planet Earth, Solar System.';
export const visionDescription =
	'Turning stories, tech, and imagination into a playground of innovation and creativity.';
export const aboutDescription =
	'A creator at the crossroads of code, storytelling, design, and vision-shaping experiences.';
export const portfolioDescription =
	'Dive into a collection of projects that combine creativity, functionality, and quality web design.';

// ### Default Meta Tags / Home Page
export const defaultMetaTags = {
	title: `${author}${shortTitleAbout}`,
	description: defaultDescription,
	canonicalUrl: `${website}/`,

	// Open Graph Meta Tags
	ogUrl: `${website}/`,
	ogTitle: shortTitleAbout,
	ogDescription: defaultDescription,
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
