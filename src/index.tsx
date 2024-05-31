import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import Preloader from './pages/Preloader';

// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const helmetContext = {};

root.render(
	// TODO: learn tests
	// <React.StrictMode>

	<HelmetProvider context={helmetContext}>
		{/* Page Preloader */}
		<Preloader />

		{/* web application */}
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</HelmetProvider>

	// </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
