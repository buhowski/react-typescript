import { pathToAbout, pathToProjects } from './urlsData';
import { generatePageMeta } from '../pages/startups/helpers/metaHelper';

// Author's name
export const firstName = 'Olexander';
export const secondName = 'Tsiomakh';
export const nickName = 'Buhowski';

export const authorName = `${firstName} ${secondName}`;
export const authorPseudo = `${firstName} ${nickName}`;

// Base Website URL
export const website = 'https://buhowski.dev';

// Page titles
const shortTitleAbout = 'Explorer ⋅ Developer ⋅ Creator';
const shortTitlePortfolio = 'Creative Portfolio ⋅ Dev & Design';
const baseShorTitle = `${authorPseudo} — ${shortTitleAbout}`;

// Page descriptions
const defaultDescription =
	'Crafting projects and ideas, building worlds, and sharing creations. From Planet Earth, Solar System.';
const aboutDescription =
	'A creator at the crossroads of code, storytelling, design, and vision-shaping experiences.';
const portfolioDescription =
	'Dive into a collection of projects combining creativity, functionality, high performance, and quality responsive web design.';

// Social Preview Screenshots
// const homeScreen = `${website}/screenshot_home.png`
const aboutScreen = `${website}/screenshot_about.png`;
const portfolioScreen = `${website}/screenshot_portfolio.png`;
const visionScreen = `${website}/screenshot_plan.png`;

// Open Graph images
export const ogImages = {
	home: visionScreen,
	about: aboutScreen,
	portfolio: portfolioScreen,
	vision: visionScreen,
};

// Meta tags exports
export const defaultMetaTags = generatePageMeta({
	title: baseShorTitle,
	description: defaultDescription,
	path: '/',
	ogImage: ogImages.home,
});

export const aboutMetaTags = generatePageMeta({
	title: baseShorTitle,
	description: aboutDescription,
	path: pathToAbout,
	ogImage: ogImages.about,
});

export const portfolioMetaTags = generatePageMeta({
	title: `${authorPseudo} — ${shortTitlePortfolio}`,
	description: portfolioDescription,
	path: pathToProjects,
	ogImage: ogImages.portfolio,
});

export const cvMetaTags = generatePageMeta({
	title: ` Resume — ${authorPseudo} — Frontend Developer`,
	description:
		'Architect of a countercultural ecosystem. Developing an alternative operating system for reality through Gonzo Journalism, Cinema, GameDev & Tech.',
	path: '/cv',
	ogImage: ogImages.about,
});
