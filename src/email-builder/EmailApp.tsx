import { Routes, Route, useLocation } from 'react-router-dom';
import { normalizePath } from '../pages/startups/helpers/metaHelper';
import { EmailBuilder } from './EmailTemplate';
import InvestorsUA from './letters/InvestorsUA';
import CoOwnersUA from './letters/CoOwnersUA';
import CoProductionUA from './letters/CoProductionUA';

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
		'/investors-ua',
		<InvestorsUA lang='uk' />,
		'Інвестиції та стратегічне партнерство: Контркультурна екосистема (Медіа, Кіно, Геймдев, Tech)',
	),

	emailRouteBuilder(
		'/co-owners-ua',
		<CoOwnersUA lang='uk' />,
		'Партнерство: Контркультурна екосистема (Медіа, Кіно, Геймдев, Tech)',
	),

	emailRouteBuilder(
		'/co-production-ua',
		<CoProductionUA lang='uk' />,
		'Co-Production / Pitch: Cinematic Concepts',
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
