import React from 'react';
import Socials from '../../components/socials/Socials';

import './Home.scss';
import DrawCanvas from './DrawCanvas';

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
			<DrawCanvas />
			<div id='app'></div>
		</div>
	);
};

export default Home;
