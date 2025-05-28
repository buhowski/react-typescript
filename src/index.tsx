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

	// Handle page load and fonts ready
	useEffect(() => {
		const handlePageReady = async () => {
			await document.fonts.ready;

			setTimeout(() => {
				setShowPreloader(false);

				rootElement.classList.add('is-ready');
			}, 300);
		};

		if (document.readyState === 'complete') {
			handlePageReady();
		} else {
			window.addEventListener('load', handlePageReady);
			return () => window.removeEventListener('load', handlePageReady);
		}
	}, []);

	// Remove 'is-ready' class and show preloader on Firefox bfcache restore
	useEffect(() => {
		const onPageShow = (event: PageTransitionEvent) => {
			if (event.persisted) {
				rootElement.classList.remove('is-ready');

				setShowPreloader(true);
			}
		};

		window.addEventListener('pageshow', onPageShow);
		return () => window.removeEventListener('pageshow', onPageShow);
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
