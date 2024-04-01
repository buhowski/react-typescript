import socialData from './socialData';
import './Socials.scss';

const Socials = () => {
	return (
		<div className='contact-menu d-flex-c'>
			{socialData.map(({ link, title, icon }, index) => {
				return (
					<a
						className='d-flex-c-c'
						key={index}
						href={link}
						target='_blank'
						rel='noopener noreferrer'
					>
						<span className='title'>{title}</span>
						<span className='contact-menu__icon'>{icon}</span>
					</a>
				);
			})}
		</div>
	);
};

export default Socials;
