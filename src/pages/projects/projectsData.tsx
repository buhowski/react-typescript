import bgNakashima from './images/nakashima-screen.jpg';
import bgEnde from './images/ende.jpg';
import bgFaberAcademy from './images/faber-academy.jpeg';
import bgFaberBooks from './images/faber.jpg';
import bgBentley from './images/bentley.jpg';
import bgStartup from './images/startup.webp';
import nascentdesign from './images/nascent.jpg';
import sendpotion from './images/sendpotion.jpg';
import hbv from './images/hbv.jpg';
import mb from './images/mb.jpg';

import { pathToVision } from '../../components/urlsData';

const projectsData = [
	{
		img: bgStartup,
		url: pathToVision,
		urlCode: 'https://github.com/buhowski/react-typescript',
		name: 'Media Ecosystem',
		year: '2026',
		description: `High‑performance multilingual SPA/PWA`,
		skills: ['React', 'TypeScript', 'SCSS', 'Canvas', 'PWA', 'SEO', 'UI/UX'],
		alt: 'Screenshot of My Startups project homepage showcasing startup business plans, full development cycle execution, React and TypeScript programming, UI/UX design, creative scripting, genius-level problem solving, strategic brainstorming, innovative design systems, SCSS styling, SEO optimization, Progressive Web App functionality, media innovation, tech entrepreneurship, interactive digital solutions, inventive coding, forward-thinking creative projects',
	},

	{
		img: mb,
		url: 'https://markbuchananproperty.co.uk/',
		name: 'Mark Buchanan',
		year: '2025',
		description: 'Conversion‑focused WordPress e‑commerce with responsive UI/UX',
		skills: ['JavaScript', 'SCSS', 'WordPress', 'PHP'],
		alt: 'Screenshot of Mark Buchanan property website homepage',
	},

	{
		img: hbv,
		url: 'https://homesbyvictoria.co.uk/',
		name: 'Homes By Victoria',
		year: '2024',
		description: 'Custom WordPress e‑commerce with optimized UI/UX',
		skills: ['JavaScript', 'SCSS', 'WordPress', 'PHP'],
		alt: 'Screenshot of Homes By Victoria real estate website homepage',
	},

	{
		img: sendpotion,
		url: `https://demo-showcase-sendpotion.netlify.app`,
		name: 'Potion AI',
		year: '2022',
		description: `Motion‑driven UI with GSAP animations`,
		skills: ['JavaScript', 'GSAP', 'Styles'],
		alt: 'Screenshot of Potion AI website homepage showing responsive web design and animations',
	},

	{
		img: nascentdesign,
		url: `https://nascentdesign.com`,
		name: 'Nascent Design',
		year: '2021',
		description: `Responsive Design with GSAP animations`,
		skills: ['JavaScript', 'GSAP', 'SCSS'],
		alt: 'Screenshot of Nascent Design website homepage with animations',
	},

	{
		img: bgBentley,
		url: 'https://www.bentley-skinner.co.uk',
		name: 'Bentley & Skinner',
		year: '2022',
		description: 'Pixel Perfect WordPress e‑commerce with GSAP & Barba.js transitions',
		skills: ['JavaScript', 'Barba.js', 'GSAP', 'SCSS', 'WordPress'],
		alt: 'Screenshot of Bentley & Skinner jewelry and antique website homepage',
	},

	{
		img: bgFaberAcademy,
		url: 'https://faberacademy.com',
		name: 'Faber Academy',
		year: '2021',
		description: 'Pixel Perfect WordPress e‑commerce with GSAP animations',
		skills: ['JavaScript', 'GSAP', 'SCSS', 'WordPress', 'Google Maps API'],
		alt: 'Screenshot of Faber Academy writing courses platform homepage',
	},

	{
		img: bgFaberBooks,
		url: 'https://www.faber.co.uk/',
		name: 'Faber',
		year: '2021',
		description: 'Pixel Perfect WordPress e‑commerce with responsive UI/UX',
		skills: ['JavaScript', 'GSAP', 'SCSS', 'WordPress', 'Pixel Perfect'],
		alt: 'Screenshot of Faber Books publisher website homepage',
	},

	{
		img: bgEnde,
		url: 'https://www-somosende-com.vercel.app',
		name: 'Somos ENDE',
		year: '2019',
		description: 'Responsive site with custom animations',
		skills: ['JavaScript', 'HTML', 'CSS'],
		alt: 'Screenshot of Somos ENDE content studio website homepage with animations',
	},

	{
		img: bgNakashima,
		url: 'https://nakashimawoodworkers.com/',
		name: 'Nakashima Woodworkers',
		year: '2019',
		description: 'Responsive site with Barba.js transitions',
		skills: ['JavaScript', 'Barba.js', 'HTML', 'CSS'],
		alt: 'Screenshot of Nakashima Woodworkers furniture studio website homepage',
	},
];

export default projectsData;
