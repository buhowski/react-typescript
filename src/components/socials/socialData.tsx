import { urlGitHub, urlLinkedIn, urlTelegram, urlInstagram, urlEmail } from '../urlsData';
import { GithubIcon, LinkedInIcon, TelegramIcon, InstagramIcon, MailIcon } from './svg/icons';
// import urlCV from '../../assets/CV_Olexander_Tsiomakh_Frontend.pdf';

interface SocialItem {
	link: string;
	title: string;
	icon: React.ReactNode;
	id: string;
}

const socialData: SocialItem[] = [
	{
		link: urlGitHub,
		title: 'GitHub',
		icon: GithubIcon,
		id: 'github',
	},

	{
		link: urlLinkedIn,
		title: 'LinkedIn',
		icon: LinkedInIcon,
		id: 'linkedin',
	},

	{
		link: urlTelegram,
		title: 'Telegram',
		icon: TelegramIcon,
		id: 'telegram',
	},

	{
		link: urlInstagram,
		title: 'Instagram',
		icon: InstagramIcon,
		id: 'instagram',
	},

	{
		link: `mailto:${urlEmail}`,
		title: 'Email',
		icon: MailIcon,
		id: 'mail',
	},

	// {
	// 	link: urlCV,
	// 	title: 'Resume',
	// 	icon: CvIcon,
	// 	id: 'cv',
	// },

	// {
	// 	link: urlCoindrop,
	// 	title: 'Support My Inner Creator',
	// 	iconClass: DonateIcon,
	// 	id: 'donate',
	// },
];

export default socialData;
