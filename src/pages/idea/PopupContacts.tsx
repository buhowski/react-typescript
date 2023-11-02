import { Component } from 'react';

const dataContacts = [
	{
		name: 'Telegram:',
		url: 'https://t.me/atsiomakh',
		linkTitle: 'Write To Me',
	},
	{
		name: 'Gmail:',
		url: 'mailto:a.tsiomakh@gmail.com',
		linkTitle: 'a.tsiomakh@gmail.com',
	},
	{
		name: 'LinkedIn:',
		url: 'https://www.linkedin.com/in/buhowski',
		linkTitle: 'Alexander Tsiomakh',
	},
];

class PopupContacts extends Component {
	state = {
		activeIndex: 0,
		setContacts: null,
		setHeight: 0,
	};

	toggleShowContacts = () => {
		if (window.innerWidth > 1280) {
			const el = document.querySelector(
				'.slider-container .idea-contacts__list-items'
			) as HTMLElement;
			const elHeight = el ? el.offsetHeight : 0;

			this.setState({
				setContacts: 'show',
				setHeight: `${elHeight}px`,
			});
		} else {
			const el = document.querySelector(
				'.slider-container ~ .idea-contacts .idea-contacts__list-items'
			) as HTMLElement;

			const elHeight = el ? el.offsetHeight : 0;
			this.setState({
				setContacts: 'show',
				setHeight: `${elHeight}px`,
			});
		}
	};

	toggleShowContactsHide = () => {
		this.setState({
			setContacts: '',
			setHeight: 0,
		});
	};

	render() {
		return (
			<div
				className={`idea-contacts ${this.state.setContacts}`}
				onMouseLeave={this.toggleShowContactsHide}
			>
				<div
					className='idea-contacts__list'
					style={{ height: `${this.state.setHeight}` }}
				>
					<div className='idea-contacts__list-items'>
						{dataContacts.map((item: any, i) => (
							<p key={i} className={item.supportClass}>
								{item.name}{' '}
								<a href={item.url} target='_blank' rel='noopener noreferrer'>
									{item.linkTitle}
								</a>
							</p>
						))}
					</div>
				</div>

				<button
					onMouseOver={this.toggleShowContacts}
					type='button'
					className='a nav-link nav-link--underline'
				>
					Get In Touch
				</button>
			</div>
		);
	}
}

export default PopupContacts;
