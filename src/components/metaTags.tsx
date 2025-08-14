// Main Website Meta Tags
const website = 'https://buhowski.dev/';

const shortAbout = 'Explorer | Developer | Creator';

const startupTitle = `Another Dimension: Magazine | Media | Films | Games | Technologies`;

const defaultDescription = `Building awesome products and contributing useful solutions to the world. Based on Planet Earth, Solar System.`;

const startupDescription = `Creating an informational and entertaining magazine and transforming it into a company that produces its own technologies.`;

const aboutDescription = `A developer and creator who builds innovative solutions at the intersection of tech and design.`;

const portfolioDescription = `Explore portfolio, showcasing impactful projects developed for companies and innovative personal ventures.`;

export const defaultMetaTags = {
	title: `Olexander Tsiomakh: ${shortAbout}`,
	description: defaultDescription,
	canonicalUrl: website,

	// Open Graph Meta Tags
	ogUrl: website,
	ogTitle: shortAbout,
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
	title: `Olexander Tsiomakh: ${shortAbout}`,
	description: aboutDescription,
	canonicalUrl: `${website}about`,

	// Open Graph Meta Tags
	ogUrl: `${website}about`,
	ogTitle: shortAbout,
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
