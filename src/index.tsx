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
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual';
		}

		const timer = setTimeout(() => {
			setShowPreloader(false);
			document.body?.classList.add('is-ready');
		}, 900);

		return () => {
			clearTimeout(timer);
			document.body?.classList.remove('is-ready');
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
