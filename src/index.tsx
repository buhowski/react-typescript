import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import './styles/App.scss';
import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;
const helmetContext: Record<string, any> = {};

// APPLICATION
const Root = () => {
	useEffect(() => {
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual';
		}
	}, []);

	return (
		<HelmetProvider context={helmetContext}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</HelmetProvider>
	);
};

// MOUNT ROOT
ReactDOM.createRoot(rootElement).render(<Root />);
