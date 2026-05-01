import { Routes, Route, useLocation } from 'react-router-dom';
import { normalizePath } from '../pages/startups/helpers/metaHelper';
import { EmailBuilder } from './EmailTemplate';
import { pathToMails, emailsConfig } from './emailsConfig';
import MailsPage from './MailsPage';

export const emailRoutes = emailsConfig.map(({ path, label, subject, element }) => ({
	pathTo: path,
	label,
	pageComponent: () => <EmailBuilder subject={subject}>{element}</EmailBuilder>,
}));

const MailsApp = () => {
	const location = useLocation();

	return (
		<Routes location={location}>
			<Route path={pathToMails} element={<MailsPage />} />

			{emailRoutes.map(({ pathTo, pageComponent: PageComponent }) => (
				<Route key={pathTo} path={normalizePath(pathTo)} element={<PageComponent />} />
			))}
		</Routes>
	);
};

export default MailsApp;
