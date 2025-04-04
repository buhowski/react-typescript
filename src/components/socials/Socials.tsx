import React from 'react';
import './Socials.scss';

interface SocialItem {
	link: string;
	title: string;
	icon: React.ReactNode;
	id: string;
}

interface SocialsProps {
	socialData: SocialItem[];
	items?: { id: string }[];
}

const Socials: React.FC<SocialsProps> = ({ socialData, items }) => {
	let displayData: SocialItem[] = socialData;

	if (items && items.length > 0) {
		displayData = items
			.map((item) => socialData.find((dataItem) => dataItem.id === item.id))
			.filter(Boolean) as SocialItem[];
	}

	return (
		<div className='contact-menu'>
			{displayData.map(({ link, title, icon, id }, index) => (
				<a
					className='contact-menu__item'
					key={id || index}
					href={link}
					target='_blank'
					rel='noopener noreferrer'
				>
					<span className='title'>{title}</span>
					<span className='contact-menu__icon'>{icon}</span>
				</a>
			))}
		</div>
	);
};

export default Socials;
