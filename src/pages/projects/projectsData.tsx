import BgNakashima from './images/nakashima-screen.jpg';
import BgArchitect from './images/architect.jpg';
import bgPalms from './images/rooms.jpg';
import bgEnde from './images/ende.jpg';
import bgFaberAcademy from './images/faber-academy.jpeg';
import bgFaberBooks from './images/faber.jpg';
import bgBentley from './images/bentley.jpg';
import bgStartup from './images/startup.jpg';
import nascentdesign from './images/nascent.jpg';
import sendpotion from './images/sendpotion.jpg';

import { pathToStartup } from '../../components/urlsData';

const projectsData = [
	{
		img: bgStartup,
		url: `${pathToStartup}`,
		urlCode: 'https://github.com/buhowski/react-typescript',
		name: 'Portfolio + My Startups',
		desk: `Performing all related tasks of the full development cycle.`,
		skills: ['UI/UX', 'SCSS', 'TypeScrpt', 'React', 'SEO', 'PWA'],
	},

	{
		img: sendpotion,
		url: `https://demo-showcase-sendpotion.netlify.app`,
		name: 'Potion AI',
		desk: `Responsive Web Design + Animations`,
		skills: ['CSS', 'GSAP', 'JavaScript'],
	},

	{
		img: nascentdesign,
		url: `https://nascentdesign.com`,
		name: 'Nascent Design',
		desk: `Cross-browser, Responsive Web Design + Animations`,
		skills: ['SCSS', 'JavaScript', 'GSAP'],
	},

	{
		img: bgBentley,
		url: 'https://www.bentley-skinner.co.uk',
		name: 'Bentley & Skinner',
		desk: 'Cross-browser, Responsive Web Design + Animations + Frontend for WordPress.',
		skills: ['SCSS', 'JavaScript', 'GSAP', 'WordPress'],
	},

	{
		img: bgFaberAcademy,
		url: 'https://faberacademy.com',
		name: 'Faber Academy',
		desk: `Cross-browser, Responsive Web Design + Animations + Frontend for WordPress.`,
		skills: ['SCSS', 'JavaScript', 'GSAP', 'Google Maps API'],
	},

	{
		img: bgFaberBooks,
		url: 'https://www.faber.co.uk/',
		name: 'Faber',
		desk: 'Cross-browser, Responsive Web Design + Animations + Frontend for WordPress.',
		skills: ['SCSS', 'JavaScript', 'GSAP', 'Pixel Perfect', 'WordPress'],
	},

	{
		img: BgArchitect,
		url: 'https://www-williamslester-com.vercel.app',
		name: 'Architects',
		desk: 'Architects Practice based in Ringwood, Hampshire and has grown over the last 30 years to become one of the most respected and successful architectural practices in the region.',
		skills: ['HTML', 'CSS', 'JavaScript', 'Barba.js', 'JS Animations'],
	},

	{
		img: BgNakashima,
		url: 'https://nakashimawoodworkers.com/',
		name: 'Nakashima Woodworkers',
		desk: 'The Furniture Studio.',
		skills: ['HTML', 'CSS', 'JavaScript', 'Barba.js', 'JS Animations'],
	},
	{
		img: bgEnde,
		url: 'https://www-somosende-com.vercel.app',
		name: 'Somos ENDE',
		desk: 'Content studio.  We make animations, videos and digital media consulting.',
		skills: ['HTML', 'CSS', 'JavaScript', 'Animations'],
	},

	{
		img: bgPalms,
		url: 'https://twobunchpalms-com.vercel.app',
		name: 'Two Bunch Palms',
		desk: 'Hot springs – sustainable hotel – desert hideaway.',
		skills: ['HTML', 'CSS', 'JavaScript', 'JS Animations', 'Flatpickr Calendar'],
	},
];

export default projectsData;
