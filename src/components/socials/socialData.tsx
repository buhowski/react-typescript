import { urlGitHub, urlLinkedIn, urlTelegram, urlInstagram } from '../urlsData';
import { GithubIcon, LinkedInIcon, TelegramIcon, InstagramIcon } from './svg/icons';
import urlCV from '../../assets/CV_Olexander_Tsiomakh_Frontend.pdf';

const socialData = [
	{
		link: urlGitHub,
		title: 'GitHub',
		icon: GithubIcon,
	},

	{
		link: urlLinkedIn,
		title: 'LinkedIn',
		icon: LinkedInIcon,
	},

	{
		link: urlTelegram,
		title: 'Telegram',
		icon: TelegramIcon,
	},

	{
		link: urlInstagram,
		title: 'Instagram',
		icon: InstagramIcon,
	},

	// {
	// 	link: urlCV,
	// 	title: 'Resume',
	// 	icon: CvIcon,
	// },

	// {
	// 	link: urlCoindrop,
	// 	title: 'Support My Inner Creator',
	// 	iconClass: DonateIcon,
	// },
];

export default socialData;
