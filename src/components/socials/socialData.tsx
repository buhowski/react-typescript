import { urlGitHub, urlLinkedIn, urlTelegram } from '../urlsData';
import urlCV from '../../assets/CV_Alexander_Tsiomakh_Frontend.pdf';
import { GithubIcon, LinkedInIcon, TelegramIcon, CvIcon } from './svg/icons';

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
		link: urlCV,
		title: 'Resume',
		icon: CvIcon,
	},

	// {
	// 	link: urlCoindrop,
	// 	title: 'Support My Inner Creator',
	// 	iconClass: DonateIcon,
	// },
];

export default socialData;
