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
		// Wait for fonts and window load, then hide preloader
		const handlePageReady = async () => {
			await document.fonts.ready;

			rootElement.classList.add('is-ready');

			setTimeout(() => {
				setShowPreloader(false);
			}, 200); // time to remove preloader
		};

		if (document.readyState === 'complete') {
			handlePageReady();
		} else {
			window.addEventListener('load', handlePageReady);
			return () => window.removeEventListener('load', handlePageReady);
		}
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
