import { Routes, Route, useLocation } from 'react-router-dom';
import { normalizePath } from '../pages/startups/helpers/metaHelper';
import { EmailBuilder } from './EmailTemplate';
import EmailToCoOwnersUA from './EmailToCoOwnersUA';

const emailRouteBuilder = (path: string, Element: React.ReactElement) => ({
	pathTo: path,
	pageComponent: () => <EmailBuilder>{Element}</EmailBuilder>,
});

// HTML Email Routes URLs
// co-owners-ua
// co-owners-en
// investors-ua
// investors-en
// cinema-pitch
// gamedev-pitch
// collab-ua
export const emailRoutes = [emailRouteBuilder('/test', <EmailToCoOwnersUA lang='uk' />)];

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
