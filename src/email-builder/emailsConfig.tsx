import InvestorsUA from './letters/InvestorsUA';
import CoOwnersUA from './letters/CoOwnersUA';
import CoProductionUA from './letters/CoProductionUA';
import CoDevelopmentUA from './letters/CoDevelopmentUA';
import CollabUA from './letters/CollabUA';

export const pathToMails = '/mails';

export const emailsConfig = [
	{
		path: '/investors-ua',
		label: 'Інвестори',
		subject:
			'Інвестиції та стратегічне партнерство: Контркультурна екосистема (Медіа, Кіно, Геймдев, Tech)',
		element: <InvestorsUA lang='uk' />,
	},

	{
		path: '/co-owners-ua',
		label: 'Співвласники',
		subject: 'Партнерство: Контркультурна екосистема (Медіа, Кіно, Геймдев, Tech)',
		element: <CoOwnersUA lang='uk' />,
	},

	{
		path: '/collab-ua',
		label: 'Колаборація',
		subject: 'Колаборація / Пітч: Час робити контркультуру',
		element: <CollabUA lang='uk' />,
	},

	{
		path: '/co-production-ua',
		label: 'Кінематограф',
		subject: 'Co-Production / Pitch: Cinematic Concepts',
		element: <CoProductionUA lang='uk' />,
	},

	{
		path: '/co-development-ua',
		label: 'Геймдев',
		subject: 'Co-Development / Pitch: Gamedev Concepts',
		element: <CoDevelopmentUA lang='uk' />,
	},
];
