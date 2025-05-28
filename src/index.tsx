// TODO: Polyfill fixes yarn build using old "react-snap": "^1.23.0" with  "react-markdown": "^10.1.0",
import './polyfills';

import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

import './styles/App.scss';
import App from './App';
import Preloader from './components/Preloader';

const rootElement = document.getElementById('root') as HTMLElement;
const helmetContext: Record<string, any> = {};

const Root = () => {
	// Preloader visibility state
	const [showPreloader, setShowPreloader] = useState(true);

	// useCallback to memoize the handler, though not strictly necessary here
	const handlePageReady = useCallback(async () => {
		await document.fonts.ready;
		setTimeout(() => {
			setShowPreloader(false);
			rootElement.classList.add('is-ready');
		}, 300);
	}, []);

	useEffect(() => {
		if (document.readyState === 'complete') {
			handlePageReady();
		} else {
			window.addEventListener('load', handlePageReady);
			return () => window.removeEventListener('load', handlePageReady);
		}
	}, [handlePageReady]);

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
