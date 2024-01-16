import { useEffect } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { pathToIdea, pathToAbout, pathToProjects } from './components/urlsData';

import './styles/App.scss';

import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Idea from './pages/idea/Idea';

const routesData = [
	{
		pathTo: '',
		pageComponent: <Home />,
	},
	{
		pathTo: pathToAbout,
		pageComponent: <About />,
	},
	{
		pathTo: pathToProjects,
		pageComponent: <Projects />,
	},
	{
		pathTo: pathToIdea,
		pageComponent: <Idea />,
	},
];

const App = () => {
	useEffect(() => {
		if (window.innerWidth <= 1024) {
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
