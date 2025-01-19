import { useState } from 'react';
import { urlTelegram, urlEmail, urlLinkedIn, urlInstagram } from './urlsData';
import { useTabletLargeQuery } from '../hooks/useMediaQuery';

const dataContacts = [
	{
		name: 'Telegram: ',
		url: urlTelegram,
		linkTitle: 'olexander_tsiomakh',
	},

	{
		name: 'Instagram: ',
		url: urlInstagram,
		linkTitle: 'buhowski',
	},

	{
		name: 'LinkedIn: ',
		url: urlLinkedIn,
		linkTitle: 'Olexander Tsiomakh',
	},

	{
		name: 'Email: ',
		url: `mailto:${urlEmail}`,
		linkTitle: urlEmail,
	},
];

const PopupContacts = () => {
	const useTabletLarge = useTabletLargeQuery();
	const [contacts, setContacts] = useState('');
	const [height, setHeight] = useState('');

	const toggleShowContacts = () => {
		const el = document.querySelector('.idea-contacts__list-items') as HTMLElement;
		const elHeight = el ? el.offsetHeight : 0;

		setContacts('show');
		setHeight(`${elHeight}px`);
	};

	const toggleShowContactsHide = () => {
		setContacts('');
		setHeight('0');
	};

	return (
		<div className={`idea-contacts ${contacts}`} onMouseLeave={toggleShowContactsHide}>
			<div className='idea-contacts__list' style={{ height: `${height}` }}>
				<div className='idea-contacts__list-items'>
					{dataContacts.map((item: any, i) => (
						<p key={i} className={item.supportClass}>
							{item.name}

							<a href={item.url} target='_blank' rel='noopener noreferrer'>
								{item.linkTitle}
							</a>
						</p>
					))}
				</div>
			</div>

			<button
				onMouseEnter={!useTabletLarge ? toggleShowContacts : undefined}
				onClick={toggleShowContacts}
				type='button'
				className='nav-link nav-link--underline'
			>
				Contact Info
			</button>
		</div>
	);
};

export default PopupContacts;
