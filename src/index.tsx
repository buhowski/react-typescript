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
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Ensure rootElement was found before proceeding
		if (!rootElement) {
			console.error('Root element (#root) not found in the DOM.');
			return;
		}

		// Timer to ensure preloader shows for at least 800ms
		const timer = setTimeout(() => {
			setIsLoading(false);
			// This makes the #root element visible via the CSS in index.html
			rootElement.classList.add('is-ready');
		}, 860);

		// Cleanup function: runs if the Root component unmounts (unlikely but good practice)
		return () => {
			clearTimeout(timer);
			rootElement.classList.remove('is-ready');
		};
	}, []);

	return (
		<>
			{isLoading && <Preloader />}

			<HelmetProvider context={helmetContext}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</HelmetProvider>
		</>
	);
};

ReactDOM.createRoot(rootElement).render(<Root />);
