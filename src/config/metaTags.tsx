export interface MetaTags {
	title: string;
	description: string;

	ogUrl: string;
	ogTitle: string;
	ogDescription: string;
	ogImage: string;

	twitterUrl: string;
	twitterTitle: string;
	twitterDescription: string;
	twitterImage: string;
}

export const defaultMetaTags: MetaTags = {
	title: `Olexander Tsiomakh: Developer | Idea Thinker | Creator`,
	description: `Want to build awesome things and contribute something useful to the world. Based on Planet Earth, Solar System.`,

	// Open Graph Meta Tags
	ogUrl: `https://buhowski.dev/`,
	ogTitle: `Developer | Idea Thinker | Creator`,
	ogDescription: `Want to build awesome things and contribute something useful to the world. Based on Planet Earth, Solar System.`,
	ogImage: `https://buhowski.dev/screenshot.png`,

	// Twitter Meta Tags
	twitterUrl: `https://buhowski.dev/`,
	twitterTitle: `Developer | Idea Thinker | Creator`,
	twitterDescription: `Want to build awesome things and contribute something useful to the world. Based on Planet Earth, Solar System.`,
	twitterImage: `https://buhowski.dev/screenshot.png`,
};

export const startupsMetaTags: MetaTags = {
	title: `Startups: Films | Games | New Generation Media | Technologies`,
	description: `How to create an information media magazine and transform it into a company producing its own technologies.`,

	// Open Graph Meta Tags
	ogUrl: `https://buhowski.dev/startup`,
	ogTitle: `Startups: Films | Games | New Generation Media | Technologies`,
	ogDescription: `How to create an information media magazine and transform it into a company producing its own technologies.`,
	ogImage: `https://buhowski.dev/preview_startups.jpg`,

	// Twitter Meta Tags
	twitterUrl: `https://buhowski.dev/startup`,
	twitterTitle: `Startups: Films | Games | New Generation Media | Technologies`,
	twitterDescription: `How to create an information media magazine and transform it into a company producing its own technologies.`,
	twitterImage: `https://buhowski.dev/preview_startups.jpg`,
};

export const aboutMetaTags: MetaTags = {
	title: `Olexander Tsiomakh: Idea Thinker | Developer | Creator`,
	description: `Inventing Solutions, scenario creator, enthusiast, versatility, adventurist ambassador, development advocacy, boundless self-irony, self-Development and growth...`,

	// Open Graph Meta Tags
	ogUrl: `https://buhowski.dev/about`,
	ogTitle: `Idea Thinker | Developer | Creator`,
	ogDescription: `Inventing Solutions, scenario creator, enthusiast, versatility, adventurist ambassador, development advocacy, boundless self-irony, self-Development and growth...`,
	ogImage: `https://buhowski.dev/preview_about.jpg`,

	// Twitter Meta Tags
	twitterUrl: `https://buhowski.dev/about`,
	twitterTitle: `Idea Thinker | Developer | Creator`,
	twitterDescription: `Inventing Solutions, scenario creator, enthusiast, versatility, adventurist ambassador, development advocacy, boundless self-irony, self-Development and growth...`,
	twitterImage: `https://buhowski.dev/preview_about.jpg`,
};

export const portfolioMetaTags: MetaTags = {
	title: `Olexander Tsiomakh: Portfolio | Projects Overview`,
	description: `Portfolio showcasing what I've done for other companies or my own projects.`,

	// Open Graph Meta Tags
	ogUrl: `https://buhowski.dev/projects`,
	ogTitle: `Portfolio | Projects Overview`,
	ogDescription: `Portfolio showcasing what I've done for other companies or my own projects.`,
	ogImage: `https://buhowski.dev/preview_portfolio.jpg`,

	// Twitter Meta Tags
	twitterUrl: `https://buhowski.dev/projects`,
	twitterTitle: `Portfolio | Projects Overview`,
	twitterDescription: `Portfolio showcasing what I've done for other companies or my own projects.`,
	twitterImage: `https://buhowski.dev/preview_portfolio.jpg`,
};
