import { Routes, Route, useLocation } from 'react-router-dom';
import { normalizePath } from '../pages/startups/helpers/metaHelper';
import { EmailBuilder } from './EmailTemplate';
import { pathToEmails, emailsConfig } from './emailsConfig';
import EmailsPage from './EmailsPage';

export const emailRoutes = emailsConfig.map(({ path, label, subject, element }) => ({
	pathTo: path,
	label,
	pageComponent: () => <EmailBuilder subject={subject}>{element}</EmailBuilder>,
}));

const EmailApp = () => {
	const location = useLocation();

	return (
		<Routes location={location}>
			<Route path={pathToEmails} element={<EmailsPage />} />

			{emailRoutes.map(({ pathTo, pageComponent: PageComponent }) => (
				<Route key={pathTo} path={normalizePath(pathTo)} element={<PageComponent />} />
			))}
		</Routes>
	);
};

export default EmailApp;
