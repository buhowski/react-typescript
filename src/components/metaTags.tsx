// Main Website Meta Tags
const website = 'https://buhowski.dev/';

const startupTitle = `Another Dimension: Media | Films | Games | Technologies`;

const defaultDescription = `Building awesome digital products and contributing useful solutions to the world. Based on Planet Earth, Solar System.`;

const startupDescription = `How to create an information and entertainment media journal and transform it into a company that produces its own technologies.`;

const aboutDescription = `Discover unique blend of visionary thinking and practical execution. A developer and creator at the forefront of innovation, shaping impactful solutions.`;

const portfolioDescription = `Explore diverse portfolio, showcasing impactful projects developed for companies and innovative personal ventures.`;

export const defaultMetaTags = {
	title: `Olexander Tsiomakh: Developer | Explorer | Creator`,
	description: defaultDescription,
	canonicalUrl: website,

	// Open Graph Meta Tags
	ogUrl: `${website}`,
	ogTitle: `Developer | Explorer | Creator`,
	ogDescription: defaultDescription,
	ogImage: `${website}screenshot.png`,
};

export const startupsMetaTags = {
	title: startupTitle,
	description: startupDescription,
	canonicalUrl: `${website}startup`,

	// Open Graph Meta Tags
	ogUrl: `${website}startup`,
	ogTitle: startupTitle,
	ogDescription: startupDescription,
	ogImage: `${website}preview_startups.jpg`,
};

export const aboutMetaTags = {
	title: `Olexander Tsiomakh: Explorer | Developer | Creator`,
	description: aboutDescription,
	canonicalUrl: `${website}about`,

	// Open Graph Meta Tags
	ogUrl: `${website}about`,
	ogTitle: `Explorer | Developer | Creator`,
	ogDescription: aboutDescription,
	ogImage: `${website}preview_about.jpg`,
};

export const portfolioMetaTags = {
	title: `Olexander Tsiomakh: Portfolio | Projects Overview`,
	description: portfolioDescription,
	canonicalUrl: `${website}projects`,

	// Open Graph Meta Tags
	ogUrl: `${website}projects`,
	ogTitle: `Portfolio | Projects Overview`,
	ogDescription: portfolioDescription,
	ogImage: `${website}preview_portfolio.jpg`,
};
