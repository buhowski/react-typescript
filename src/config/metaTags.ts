export interface MetaTags {
	title: string;
	description: string;
	ogTitle: string;
	ogDescription: string;
	ogImage: string;
}

export const defaultMetaTags: MetaTags = {
	// Social Network Meta Tags
	title: `Olexander Tsiomakh: Developer | Idea Thinker | Creator`,
	description: `Want to build awesome things and contribute something useful to the world. Based on Planet Earth, Solar System.`,
	ogTitle: `Developer | Idea Thinker | Creator`,
	ogDescription: `Want to build awesome things and contribute something useful to the world. Based on Planet Earth, Solar System.`,
	ogImage: `https://buhowski.dev/screenshot.png`,

	// Twitter Meta Tags
};

export const portfolioMetaTags: MetaTags = {
	// Social Network Meta Tags
	title: `Portfolio: Projects Overview`,
	description: `Portfolio showcasing what I've done for other companies.`,
	ogTitle: `Developer | Idea Thinker | Creator`,
	ogDescription: `Portfolio showcasing what I've done for other companies.`,
	ogImage: `https://buhowski.dev/portfolio.jpg`,

	// Twitter Meta Tags
};
