import React from 'react';
// import useScripts from '../../components/use-scripts';
import Socials from '../../components/socials/Socials';

import './Home.scss';

const Home = () => {
	// useScripts('js/chunk-app-drawing.js');
	// useScripts('js/app-drawing.js');

	return (
		<div className='wrapper home-wrapper d-flex'>
			<div className='name-container'>
				<h1 className='base-title'>Alexander Tsiomakh</h1>
				<h2 className='tag-color'>Front-End Developer</h2>
				<Socials />
			</div>

			{/*############## CONTENT WITH PHOTO DRAWING ##############*/}
			<div id='app'></div>
		</div>
	);
};

export default Home;
