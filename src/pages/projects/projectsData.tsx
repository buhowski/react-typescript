import BgNakashima from './images/nakashima-screen.jpg';
// import BgArchitect from './images/architect.jpg';
// import bgPalms from './images/rooms.jpg';
import bgEnde from './images/ende.jpg';
import bgFaberAcademy from './images/faber-academy.jpeg';
import bgFaberBooks from './images/faber.jpg';
import bgBentley from './images/bentley.jpg';
import bgStartup from './images/startup.jpg';
import nascentdesign from './images/nascent.jpg';
import sendpotion from './images/sendpotion.jpg';
import hbv from './images/hbv.jpg';
import mb from './images/mb.jpg';

import { pathToStartup } from '../../components/urlsData';

const projectsData = [
	{
		img: bgStartup,
		url: `${pathToStartup}`,
		urlCode: 'https://github.com/buhowski/react-typescript',
		name: 'Portfolio / Startups',
		description: `Practice / Performing all related tasks of the full development cycle.`,
		skills: ['UI/UX', 'SCSS', 'TypeScrpt', 'React', 'SEO', 'PWA'],
		alt: 'Screenshot of the Portfolio / Startups project homepage',
	},

	{
		img: sendpotion,
		url: `https://demo-showcase-sendpotion.netlify.app`,
		name: 'Potion AI',
		description: `Date: 2022 | Responsive Web Design + Animations`,
		skills: ['CSS', 'GSAP', 'JavaScript'],
		alt: 'Screenshot of Potion AI website with responsive design and animations',
	},

	{
		img: mb,
		url: 'https://markbuchananproperty.co.uk/',
		name: 'Mark Buchanan',
		description: 'Date: 2025 | Cross-browser, Responsive Web Design. Frontend + WordPress.',
		skills: ['SCSS', 'JavaScript', 'PHP', 'WordPress'],
		alt: 'Screenshot of Mark Buchanan property website homepage',
	},

	{
		img: nascentdesign,
		url: `https://nascentdesign.com`,
		name: 'Nascent Design',
		description: `Date: 2021 | Cross-browser, Responsive Web Design + Animations`,
		skills: ['SCSS', 'JavaScript', 'GSAP'],
		alt: 'Screenshot of Nascent Design website homepage with animated elements',
	},

	{
		img: hbv,
		url: 'https://homesbyvictoria.co.uk/',
		name: 'Homes By Victoria',
		description: 'Date: 2024 | Cross-browser, Responsive Web Design. Frontend + WordPress.',
		skills: ['SCSS', 'JavaScript', 'PHP', 'WordPress'],
		alt: 'Screenshot of Homes By Victoria real estate website homepage',
	},

	{
		img: bgBentley,
		url: 'https://www.bentley-skinner.co.uk',
		name: 'Bentley & Skinner',
		description:
			'Date: 2022 | Cross-browser, Responsive Web Design + Animations + Frontend for WordPress.',
		skills: ['SCSS', 'JavaScript', 'GSAP', 'WordPress'],
		alt: 'Screenshot of Bentley & Skinner jewelry and antique website',
	},

	{
		img: bgFaberAcademy,
		url: 'https://faberacademy.com',
		name: 'Faber Academy',
		description: `Date: 2021 | Cross-browser, Responsive Web Design + Animations + Frontend for WordPress.`,
		skills: ['SCSS', 'JavaScript', 'GSAP', 'Google Maps API'],
		alt: 'Screenshot of Faber Academy website, a writing courses platform',
	},

	{
		img: bgFaberBooks,
		url: 'https://www.faber.co.uk/',
		name: 'Faber',
		description:
			'Date: 2021 | Cross-browser, Responsive Web Design + Animations + Frontend for WordPress.',
		skills: ['SCSS', 'JavaScript', 'GSAP', 'Pixel Perfect', 'WordPress'],
		alt: 'Screenshot of Faber Books publisher website',
	},

	{
		img: BgNakashima,
		url: 'https://nakashimawoodworkers.com/',
		name: 'Nakashima Woodworkers',
		description: 'Date: 2019 | The Furniture Studio.',
		skills: ['HTML', 'CSS', 'JavaScript', 'Barba.js', 'JS Animations'],
		alt: 'Screenshot of Nakashima Woodworkers furniture studio website',
	},

	{
		img: bgEnde,
		url: 'https://www-somosende-com.vercel.app',
		name: 'Somos ENDE',
		description:
			'Date: 2019 | Content studio.  We make animations, videos and digital media consulting.',
		skills: ['HTML', 'CSS', 'JavaScript', 'Animations'],
		alt: 'Screenshot of Somos ENDE content studio website with animations',
	},

	// {
	// 	img: BgArchitect,
	// 	url: 'https://www-williamslester-com.vercel.app',
	// 	name: 'Architects',
	// 	description: 'Architects Practice based in Ringwood, Hampshire and has grown over the last 30 years to become one of the most respected and successful architectural practices in the region.',
	// 	skills: ['HTML', 'CSS', 'JavaScript', 'Barba.js', 'JS Animations'],
	// },

	// {
	// 	img: bgPalms,
	// 	url: 'https://twobunchpalms-com.vercel.app',
	// 	name: 'Two Bunch Palms',
	// 	description: 'Hot springs – sustainable hotel – desert hideaway.',
	// 	skills: ['HTML', 'CSS', 'JavaScript', 'JS Animations', 'Flatpickr Calendar'],
	// },
];

export default projectsData;
