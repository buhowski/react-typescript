import { Routes, Route, useLocation } from 'react-router-dom';
import { normalizePath } from '../pages/startups/helpers/metaHelper';
import { EmailBuilder } from './EmailTemplate';
import InvestorsUA from './letters/InvestorsUA';
import CoOwnersUA from './letters/CoOwnersUA';
import CoProductionUA from './letters/CoProductionUA';
import CoDevelopmentUA from './letters/CoDevelopmentUA';
import CollabUA from './letters/CollabUA';

const emailRouteBuilder = (path: string, Element: React.ReactElement, subject?: string) => ({
	pathTo: path,
	pageComponent: () => <EmailBuilder subject={subject}>{Element}</EmailBuilder>,
});

// HTML Email Routes URLs
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

	emailRouteBuilder(
		'/co-development-ua',
		<CoDevelopmentUA lang='uk' />,
		'Co-Development / Pitch: Gamedev Concepts',
	),

	emailRouteBuilder(
		'/collab-ua',
		<CollabUA lang='uk' />,
		'Колаборація / Пітч: Час робити контркультуру',
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
