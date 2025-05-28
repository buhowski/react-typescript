// TODO: Polyfill fixes yarn build using old "react-snap": "^1.23.0" with  "react-markdown": "^10.1.0",
import './polyfills';

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

	// useEffect(() => {
	// 	// Ensure rootElement was found before proceeding

	// 	// Timer to ensure preloader shows for at least 800ms
	// 	const timer = setTimeout(() => {
	// 		setShowPreloader(false);
	// 		// This makes the #root element visible via the CSS in index.html
	// 		rootElement.classList.add('is-ready');
	// 	}, 950);

	// 	// Cleanup function: runs if the Root component unmounts (unlikely but good practice)
	// 	return () => {
	// 		clearTimeout(timer);
	// 		rootElement.classList.remove('is-ready');
	// 	};
	// }, []);

	useEffect(() => {
		if (!rootElement) return;

		let done = false;

		const finish = () => {
			if (done) return;
			done = true;
			setShowPreloader(false);
			rootElement.classList.add('is-ready');
		};

		const fallback = setTimeout(finish, 800);

		document.fonts.ready.then(() => {
			setTimeout(finish, 200);
		});

		return () => {
			clearTimeout(fallback);
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
