import socialData from './socialData';
import './Socials.scss';
import DonateSvg from './svg/Donate-svg';

const Socials = () => {
	return (
		<div className='contact-menu d-flex-c'>
			{socialData.map(({ link, title, iconClass }, index) => {
				return (
					<a
						className='d-flex-c-c'
						key={index}
						href={link}
						target='_blank'
						rel='noopener noreferrer'
					>
						<span className='title'>{title}</span>
						<span className={iconClass}>
							{iconClass === 'icon-donate' && <DonateSvg />}
						</span>
					</a>
				);
			})}
		</div>
	);
};

export default Socials;
