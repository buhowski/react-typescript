import { useState } from 'react';
import { urlTelegram, urlEmail, urlLinkedIn } from './urlsData';

const dataContacts = [
	{
		name: 'Telegram: ',
		url: urlTelegram,
		linkTitle: 'Write To Me',
	},
	{
		name: 'Email: ',
		url: urlEmail,
		linkTitle: 'a.tsiomakh@gmail.com',
	},
	{
		name: 'LinkedIn: ',
		url: urlLinkedIn,
		linkTitle: 'Alexander Tsiomakh',
	},
];

const PopupContacts = () => {
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
				onMouseOver={toggleShowContacts}
				type='button'
				className='a nav-link nav-link--underline'
			>
				Get In Touch
			</button>
		</div>
	);
};

export default PopupContacts;
