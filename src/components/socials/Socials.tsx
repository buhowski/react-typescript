import React from 'react';
import socialData from './socialData';
import './Socials.scss';
import DonateSvg from './Donate-svg';

const Socials = () => {
	return (
		<div className='contact-menu d-flex-c'>
			{socialData.map(({ link, targetBlank, relSecure, title, iconClass }, i) => {
				return (
					<a
						className='d-flex-c-c'
						href={link}
						target={targetBlank}
						rel={relSecure}
						key={i}
					>
						<span className='title'>{title}</span>
						<span className={iconClass}></span>
					</a>
				);
			})}

			<a
				className='d-flex-c-c donation-link'
				href='https://coindrop.to/buhowski'
				target='_blank'
				rel='noopener noreferrer'
			>
				<span className='title'>Support My Inner Creator</span>
				<span className='icon-donate'>
					<DonateSvg />
				</span>
			</a>
		</div>
	);
};

export default Socials;
