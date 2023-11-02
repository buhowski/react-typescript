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
						<span className={iconClass}>
							{iconClass === 'icon-donate' ? <DonateSvg /> : null}
						</span>
					</a>
				);
			})}
		</div>
	);
};

export default Socials;
