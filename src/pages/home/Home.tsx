import Socials from '../../components/socials/Socials';
import DrawCanvas from './DrawCanvas';

import './Home.scss';

const Home = () => {
	return (
		<div className='wrapper home-wrapper d-flex'>
			<div className='name-container'>
				<h1 className='base-title'>
					Alexander <span>Tsiomakh</span>
				</h1>
				<h2 className='tag-color'>Front-End Developer</h2>
				<Socials />
			</div>

			<DrawCanvas />
		</div>
	);
};

export default Home;
