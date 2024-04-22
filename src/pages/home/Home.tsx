import Socials from '../../components/socials/Socials';
import DrawCanvas from './DrawCanvas';

import './Home.scss';

const Home = () => {
	return (
		<div className='wrapper home-wrapper'>
			<div className='name-container'>
				<h1 className='name-container__title h1'>
					Olexander <span>Tsiomakh</span>
				</h1>

				<h2 className='name-container__position'>Front-End Developer</h2>

				<Socials />
			</div>

			<DrawCanvas />
		</div>
	);
};

export default Home;
