import { Routes, Route, useLocation } from 'react-router-dom';
import { normalizePath } from '../pages/startups/helpers/metaHelper';
import { EmailBuilder } from './EmailTemplate';
import EmailToInvestorsUA from './letters/EmailToInvestorsUA';
import EmailToCoOwnersUA from './letters/EmailToCoOwnersUA';

const emailRouteBuilder = (path: string, Element: React.ReactElement, subject?: string) => ({
	pathTo: path,
	pageComponent: () => <EmailBuilder subject={subject}>{Element}</EmailBuilder>,
});

// HTML Email Routes URLs
// investors-ua
// co-owners-ua
// co-production-ua
// co-development-ua
// collab-ua
export const emailRoutes = [
	emailRouteBuilder(
		'/test',
		<EmailToInvestorsUA lang='uk' />,
		'Інвестиції та стратегічне партнерство: Контркультурна екосистема (Медіа, Кіно, Геймдев, Tech)',
	),

	emailRouteBuilder(
		'/investors-ua',
		<EmailToInvestorsUA lang='uk' />,
		'Інвестиції та стратегічне партнерство: Контркультурна екосистема (Медіа, Кіно, Геймдев, Tech)',
	),

	emailRouteBuilder(
		'/co-owners-ua',
		<EmailToCoOwnersUA lang='uk' />,
		'Партнерство: Контркультурна екосистема (Медіа, Кіно, Геймдев, Tech)',
	),
];

const EmailApp = () => {
	const location = useLocation();
	return (
		<Routes location={location}>
			{emailRoutes.map(({ pathTo, pageComponent: PageComponent }) => (
				<Route key={pathTo} path={normalizePath(pathTo)} element={<PageComponent />} />
			))}
		</Routes>
	);
};

export default EmailApp;
