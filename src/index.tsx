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

	useEffect(() => {
		// Ensure rootElement was found before proceeding
		if (!rootElement) {
			console.error('Root element (#root) not found in the DOM.');
			return;
		}

		// Timer to ensure preloader shows for at least 800ms
		const timer = setTimeout(() => {
			setShowPreloader(false);
			// This makes the #root element visible via the CSS in index.html
			rootElement.classList.add('is-ready');
		}, 950);

		// Cleanup function: runs if the Root component unmounts (unlikely but good practice)
		return () => {
			clearTimeout(timer);
			rootElement.classList.remove('is-ready');
		};
	}, []);

	// useEffect(() => {
	// 	let isReady = false;

	// 	// fallback if fonts hang
	// 	const fallback = setTimeout(() => {
	// 		if (!isReady) {
	// 			setShowPreloader(false);
	// 			rootElement.classList.add('is-ready');
	// 		}
	// 	}, 900);

	// 	// try wait for fonts
	// 	document.fonts.ready.then(() => {
	// 		isReady = true;
	// 		clearTimeout(fallback);
	// 		setTimeout(() => {
	// 			setShowPreloader(false);
	// 			rootElement.classList.add('is-ready');
	// 		}, 200);
	// 	});

	// 	// cleanup
	// 	return () => {
	// 		clearTimeout(fallback);
	// 		rootElement.classList.remove('is-ready');
	// 	};
	// }, []);

	// handle Firefox bfcache restore
	// useEffect(() => {
	// 	const onPageShow = (e: PageTransitionEvent) => {
	// 		if (e.persisted) {
	// 			rootElement.classList.remove('is-ready');
	// 			setShowPreloader(true);
	// 		}
	// 	};

	// 	window.addEventListener('pageshow', onPageShow);
	// 	return () => window.removeEventListener('pageshow', onPageShow);
	// }, []);

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
