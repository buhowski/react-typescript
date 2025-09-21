import bgNakashima from './images/nakashima-screen.jpg';
import bgEnde from './images/ende.jpg';
import bgFaberAcademy from './images/faber-academy.jpeg';
import bgFaberBooks from './images/faber.jpg';
import bgBentley from './images/bentley.jpg';
import bgStartup from './images/startup-poster.jpg';
import nascentdesign from './images/nascent.jpg';
import sendpotion from './images/sendpotion.jpg';
import hbv from './images/hbv.jpg';
import mb from './images/mb.jpg';

import { pathToVision } from '../../components/urlsData';

const projectsData = [
	{
		img: bgStartup,
		url: `${pathToVision}`,
		urlCode: 'https://github.com/buhowski/react-typescript',
		name: 'Business Plan',
		description: `Startups include: Magazine ⋅ Media ⋅ Cinema ⋅ Games ⋅ Tech`,
		skills: ['Scenario', 'Design', 'SCSS', 'TypeScript', 'React', 'SEO', 'PWA'],
		alt: 'Screenshot of My Startups project homepage showcasing startup business plans, full development cycle execution, React and TypeScript programming, UI/UX design, creative scripting, genius-level problem solving, strategic brainstorming, innovative design systems, SCSS styling, SEO optimization, Progressive Web App functionality, media innovation, tech entrepreneurship, interactive digital solutions, inventive coding, forward-thinking creative projects',
	},

	{
		img: sendpotion,
		url: `https://demo-showcase-sendpotion.netlify.app`,
		name: 'Potion AI',
		description: `2022 | Responsive Web Design & Animations`,
		skills: ['CSS', 'GSAP', 'JavaScript'],
		alt: 'Screenshot of Potion AI website homepage showing responsive web design and animations',
	},

	{
		img: mb,
		url: 'https://markbuchananproperty.co.uk/',
		name: 'Mark Buchanan',
		description: '2025 | Cross-browser Responsive Web & WordPress',
		skills: ['SCSS', 'JavaScript', 'PHP', 'WordPress'],
		alt: 'Screenshot of Mark Buchanan property website homepage',
	},

	{
		img: nascentdesign,
		url: `https://nascentdesign.com`,
		name: 'Nascent Design',
		description: `2021 | Cross-browser Responsive Web & Animations`,
		skills: ['SCSS', 'JavaScript', 'GSAP'],
		alt: 'Screenshot of Nascent Design website homepage with animations',
	},

	{
		img: hbv,
		url: 'https://homesbyvictoria.co.uk/',
		name: 'Homes By Victoria',
		description: '2024 | Cross-browser Responsive Web & WordPress',
		skills: ['SCSS', 'JavaScript', 'PHP', 'WordPress'],
		alt: 'Screenshot of Homes By Victoria real estate website homepage',
	},

	{
		img: bgBentley,
		url: 'https://www.bentley-skinner.co.uk',
		name: 'Bentley & Skinner',
		description: '2022 | Cross-browser Responsive Web, Animations & WordPress',
		skills: ['SCSS', 'JavaScript', 'GSAP', 'WordPress'],
		alt: 'Screenshot of Bentley & Skinner jewelry and antique website homepage',
	},

	{
		img: bgFaberAcademy,
		url: 'https://faberacademy.com',
		name: 'Faber Academy',
		description: '2021 | Cross-browser Responsive Web, Animations & WordPress',
		skills: ['SCSS', 'JavaScript', 'GSAP', 'Google Maps API'],
		alt: 'Screenshot of Faber Academy writing courses platform homepage',
	},

	{
		img: bgFaberBooks,
		url: 'https://www.faber.co.uk/',
		name: 'Faber',
		description: '2021 | Cross-browser Responsive Web, Animations & WordPress',
		skills: ['SCSS', 'JavaScript', 'GSAP', 'Pixel Perfect', 'WordPress'],
		alt: 'Screenshot of Faber Books publisher website homepage',
	},

	{
		img: bgNakashima,
		url: 'https://nakashimawoodworkers.com/',
		name: 'Nakashima Woodworkers',
		description: '2019 | Cross-browser Responsive Web, Animations & Barba.js',
		skills: ['HTML', 'CSS', 'JavaScript', 'Barba.js', 'JS Animations'],
		alt: 'Screenshot of Nakashima Woodworkers furniture studio website homepage',
	},

	{
		img: bgEnde,
		url: 'https://www-somosende-com.vercel.app',
		name: 'Somos ENDE',
		description: '2019 | Responsive Web with Animations',
		skills: ['HTML', 'CSS', 'JavaScript', 'Animations'],
		alt: 'Screenshot of Somos ENDE content studio website homepage with animations',
	},
];

export default projectsData;
