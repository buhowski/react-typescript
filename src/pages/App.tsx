import React, { useEffect } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.scss';
import Header from '../components/header/Header';

import Home from './home/Home';
import About from './about/About';
import Projects from './projects/Projects';
import Idea from './idea/Idea';

const routesData = [
	{
		pathTo: '',
		pageComponent: <Home />,
	},
	{
		pathTo: 'about',
		pageComponent: <About />,
	},
	{
		pathTo: 'projects',
		pageComponent: <Projects />,
	},
	{
		pathTo: 'idea',
		pageComponent: <Idea />,
	},
];

const App = () => {
	useEffect(() => {
		if (window.innerWidth <= 768) {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);

			window.addEventListener('resize', () => {
				let vh = window.innerHeight * 0.01;
				document.documentElement.style.setProperty('--vh', `${vh}px`);
			});
		}
	});

	const location = useLocation();

	return (
		<TransitionGroup>
			<CSSTransition key={location.key} classNames='slide' timeout={1700}>
				<div id='page' className='page'>
					<div className='page-container'>
						<Header />
						<Routes location={location}>
							{routesData.map(({ pathTo, pageComponent }, i) => {
								return <Route path={`/${pathTo}`} element={pageComponent} key={i} />;
							})}
						</Routes>
					</div>
				</div>
			</CSSTransition>
		</TransitionGroup>
	);
};

export default App;
