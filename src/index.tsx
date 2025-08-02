// TODO: Polyfill fixes yarn build using old "react-snap": "^1.23.0" with  "react-markdown": "^10.1.0",
// import './polyfills';

import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './styles/App.scss';
import App from './App';
import Preloader from './components/Preloader';

const rootElement = document.getElementById('root') as HTMLElement;
const helmetContext: Record<string, any> = {};

const Root = () => {
	// Preloader visibility state
	const [showPreloader, setShowPreloader] = useState(true);

	useEffect(() => {
		// Ensure rootElement was found before proceeding
		if (!rootElement) return;

		// Timer to ensure preloader shows for at least 800ms
		const timer = setTimeout(() => {
			setShowPreloader(false);
			// This makes the #root element visible via the CSS in index.html
			rootElement.classList.add('is-ready');
		}, 800);

		// Cleanup function: runs if the Root component unmounts (unlikely but good practice)
		return () => {
			clearTimeout(timer);
			rootElement.classList.remove('is-ready');
		};
	}, []);

	return (
		<>
			{showPreloader && <Preloader />}

			<HelmetProvider context={helmetContext}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</HelmetProvider>
		</>
	);
};

ReactDOM.createRoot(rootElement).render(<Root />);
