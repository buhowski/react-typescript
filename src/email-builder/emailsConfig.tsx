import InvestorsUA from './letters/InvestorsUA';
import CoOwnersUA from './letters/CoOwnersUA';
import CoProductionUA from './letters/CoProductionUA';
import CoDevelopmentUA from './letters/CoDevelopmentUA';
import CollabUA from './letters/CollabUA';

export const pathToEmails = '/emails';

export const emailsConfig = [
	{
		path: '/investors-ua',
		label: 'Для інвесторів',
		subject:
			'Інвестиції та стратегічне партнерство: Контркультурна екосистема (Медіа, Кіно, Геймдев, Tech)',
		element: <InvestorsUA lang='uk' />,
	},
	{
		path: '/co-owners-ua',
		label: 'Партнерство',
		subject: 'Партнерство: Контркультурна екосистема (Медіа, Кіно, Геймдев, Tech)',
		element: <CoOwnersUA lang='uk' />,
	},
	{
		path: '/co-production-ua',
		label: 'Co-Production',
		subject: 'Co-Production / Pitch: Cinematic Concepts',
		element: <CoProductionUA lang='uk' />,
	},
	{
		path: '/co-development-ua',
		label: 'Co-Development',
		subject: 'Co-Development / Pitch: Gamedev Concepts',
		element: <CoDevelopmentUA lang='uk' />,
	},
	{
		path: '/collab-ua',
		label: 'Колаборація',
		subject: 'Колаборація / Пітч: Час робити контркультуру',
		element: <CollabUA lang='uk' />,
	},
];
