import BgNakashima from './images/nakashima-screen.jpg';
import BgSprey from './images/spreybox.jpg';
import BgFoundation from './images/tse-foundation.jpg';
import BgArchitect from './images/architect.jpg';
import BgBottleService from './images/bottle-service.jpg';
import BgDrinkHaus from './images/drink-haus.jpg';
import bgInfiniteFood from './images/infinite-food.jpg';
import bgMensch from './images/mensch.jpg';
import bgMeNotebooks from './images/notebooks.jpg';
import bgPalms from './images/rooms.jpg';
import bgEnde from './images/ende.jpg';
import bgFaber from './images/faber.jpg';
import bgFaberBooks from './images/faber-books.jpg';
import bgBentley from './images/bentley.jpg';
import bgGalleryImg from './images/gallery-img.webp';
import bgStartup from './images/startup.webp';
import nascentdesign from './images/nascentdesign.webp';

import { pathToStartup } from '../../components/urlsData';

const projectsData = [
	{
		img: bgStartup,
		url: `${pathToStartup}`,
		urlCode: 'https://github.com/buhowski/react-typescript',
		name: 'Portfolio + My Startups',
		desk: `Create React App, React Hooks, TypeScript, React Transition, React Router, SCSS + font files, React SimpleBar, CRACO, Jest. Netlify / Vercel deploy via GitHub. SEO + Progressive Web App. Achieved 100% of Web Performance Optimization.`,
		skills: ['UI/UX', 'SCSS', 'TypeScrpt', 'React', 'PWA'],
	},

	{
		img: bgFaber,
		url: 'https://faberacademy.com/',
		name: 'Faber Academy',
		desk: `Website Markup from Scratch. Cross-browser Responsive Web Design + Animations + Frontend for WordPress.`,
		skills: [
			'Twig',
			'SCSS',
			'JavaScript',
			'GSAP',
			'Pixel Perfect',
			'Admin Panel',
			'WordPress',
			'Google Maps API',
		],
	},

	{
		img: bgBentley,
		url: 'https://www.bentley-skinner.co.uk/',
		name: 'Bentley & Skinner',
		desk: 'Website Markup from Scratch. Cross-browser Responsive Web Design + Animations + Frontend for WordPress.',
		skills: [
			'Twig',
			'SCSS',
			'JavaScript',
			'GSAP',
			'Pixel Perfect',
			'Admin Panel',
			'WordPress',
		],
	},

	{
		img: nascentdesign,
		url: `https://nascentdesign.com/`,
		name: 'Nascent Design',
		desk: `Pixel Perfect, Cross-browser, Responsive Web Design + Animations`,
		skills: ['SCSS', 'JavaScript', 'GSAP', 'Pixel Perfect'],
	},

	{
		img: bgFaberBooks,
		url: 'https://www.faber.co.uk/',
		name: 'Faber',
		desk: 'Website Markup from Scratch. Cross-browser Responsive Web Design + Animations + Frontend for WordPress.',
		skills: [
			'Twig',
			'SCSS',
			'JavaScript',
			'GSAP',
			'Pixel Perfect',
			'Admin Panel',
			'WordPress',
		],
	},

	{
		img: BgArchitect,
		url: 'https://www-williamslester-com.vercel.app',
		name: 'Architects',
		desk: 'Williams Lester is an RIBA Chartered Architects Practice based in Ringwood, Hampshire and has grown over the last 30 years to become one of the most respected and successful architectural practices in the region. We provide a high quality professional service and have developed specialist expertise in residential development, conservation, retirement living and master-planning.	Handling all Front-End tasks',
		skills: ['HTML', 'CSS', 'JavaScript', 'Barba.js', 'JS Animations'],
	},

	{
		img: BgBottleService,
		url: 'https://www-youngspirits-co-uk.vercel.app',
		name: 'Young Spirits',
		desk: 'The secret weapon of U.K. Small distillers & producers',
		skills: ['HTML', 'CSS', 'JavaScript', 'Google Maps API', 'Apply Form'],
	},

	{
		img: BgNakashima,
		url: 'https://nakashimawoodworkers.com/',
		name: 'Nakashima Woodworkers',
		desk: 'The Furniture Studio. Handling all Front-End tasks',
		skills: ['HTML', 'CSS', 'JavaScript', 'Barba.js', 'JS Animations'],
	},

	{
		img: bgGalleryImg,
		url: 'https://gentle-longma-c7daf2.netlify.app/',
		urlCode: 'https://github.com/buhowski/infinite-image-gallery',
		name: 'Image Gallery',
		desk: 'Infinite Image Gallery with search, using Unsplash API',
		skills: ['HTML', 'CSS', 'JavaScript', 'Fetch API'],
	},

	{
		img: BgFoundation,
		url: 'https://tse-foundation-org.vercel.app',
		name: 'TSE Foundation',
		desk: 'We help people to understand their unique place in the broader human narrative. Handling all Front-End tasks',
		skills: ['HTML', 'CSS', 'JavaScript', 'Form', 'Barba.js', 'JS Animations'],
	},

	{
		img: bgPalms,
		url: 'https://twobunchpalms-com.vercel.app',
		name: 'Two Bunch Palms',
		desk: 'Hot springs – sustainable hotel – desert hideaway. Handling all Front-End tasks',
		skills: ['HTML', 'CSS', 'JavaScript', 'JS Animations'],
	},

	{
		img: bgMensch,
		url: 'https://mensch.vercel.app',
		name: 'Mensch',
		desk: 'We are an agency, specialized in innovation, team performance, and venture acceleration. Handling all Front-End tasks',
		skills: ['HTML', 'CSS', 'JavaScript', 'Form Submit'],
	},

	{
		img: BgSprey,
		url: 'https://spraybox.vercel.app',
		name: 'Spraybox Magazine',
		desk: 'ARTWORKS, CONCEPTS, INTERIORS & BRAND DESIGN. Handling all Front-End tasks',
		skills: ['HTML', 'CSS', 'JavaScript', 'JS Animations'],
	},

	{
		img: bgMeNotebooks,
		url: 'https://modnotebooks-com.vercel.app',
		name: 'Mode Notebooks',
		desk: 'A paper notebook that syncs to the cloud. Handling all Front-End tasks',
		skills: ['HTML', 'CSS', 'JavaScript', 'Checkout'],
	},

	{
		img: bgEnde,
		url: 'https://www-somosende-com.vercel.app',
		name: 'Somos ENDE',
		desk: 'We are an audiovisual content studio.  We make animations, videos and digital media consulting. Handling all Front-End tasks',
		skills: ['HTML', 'CSS', 'JavaScript'],
	},

	{
		img: bgInfiniteFood,
		url: 'https://infinityfoodsretail-coop.vercel.app',
		name: 'Infinite Food',
		desk: 'SHOP. Infinite Food. Handling all Front-End tasks',
		skills: ['HTML', 'CSS', 'JavaScript'],
	},

	{
		img: BgDrinkHaus,
		url: 'https://drink.haus/',
		name: 'Drink Haus',
		desk: 'Haus is a beverage brand creating better products for the modern drinker, originally founded by Helena Price Hambrecht and Woody Hambrecht in 2019. The alcohol industry hasn’t changed in 100 years, so Haus is on a mission to redesign how it works — from the ingredients used, to the way the bottles are shipped directly to your doorstep.',
		skills: ['HTML', 'CSS', 'JavaScript'],
	},
];

export default projectsData;
