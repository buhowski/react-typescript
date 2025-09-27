import { pathToAbout, pathToProjects } from './urlsData';
import { website, generatePageMeta } from '../pages/startups/helpers/metaHelper';

// Author and page titles
const author = 'Olexander Tsiomakh — ';
const shortTitleAbout = 'Explorer ⋅ Developer ⋅ Creator';
const shortTitlePortfolio = 'Creative Portfolio ⋅ Dev & Design';
const baseShorTitle = `${author}${shortTitleAbout}`;

// Page descriptions
const defaultDescription =
	'Crafting projects and ideas, building worlds, and sharing creations. From Planet Earth, Solar System.';
const aboutDescription =
	'A creator at the crossroads of code, storytelling, design, and vision-shaping experiences.';
const portfolioDescription =
	'Dive into a collection of projects that combine creativity, functionality, and quality web design.';

// Open Graph images
const ogImages = {
	home: `${website}/screenshot_plan.jpg`,
	about: `${website}/screenshot_about.jpg`,
	portfolio: `${website}/screenshot_portfolio.jpg`,
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
	title: `${author}${shortTitlePortfolio}`,
	description: portfolioDescription,
	path: pathToProjects,
	ogImage: ogImages.portfolio,
});
