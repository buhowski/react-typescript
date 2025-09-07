import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';

// Startup Pages
import { startupsMap } from './pages/startups/startupsRoutes';
import { pathToAbout, pathToProjects } from './components/urlsData';

// Collect all routes
export const routesData = [
	{ pathTo: '/', pageComponent: Home },
	{ pathTo: pathToAbout, pageComponent: About },
	{ pathTo: pathToProjects, pageComponent: Projects },

	// Startups routes
	...Object.entries(startupsMap).map(([path, Component]) => ({
		pathTo: path,
		pageComponent: Component,
	})),
];
