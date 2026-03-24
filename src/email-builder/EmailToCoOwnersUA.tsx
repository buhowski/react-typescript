import {
	EmailLayout,
	EmailHeader,
	EmailH2,
	EmailH3,
	EmailText,
	EmailLinkList,
	EmailBulletList,
	EmailDivider,
	EmailFooter,
} from './EmailTemplate';

const EmailToCoOwnersUA = ({ lang }: { lang?: string }) => {
	return (
		<EmailLayout lang={lang}>
			<EmailHeader />

			<EmailText content='Привіт.' />

			<EmailText content='Я Олександр — ідейний розробник, сценарист і дослідник. Створюю незалежний медіапростір і пишу з пропозицією творчої та ділової співпраці для формування кола партнерів.' />

			<EmailH2 content='ПРОЄКТ' />

			<EmailText content='Розважальний контркультурний журнал та соціальна платформа масштабуються у кіновиробництво, геймдев і технологічні розробки.' />

			<EmailText content='Наступний крок — запуск стрімінгового сервісу та ігрового хабу під власні проєкти.' />

			<EmailText content='Зараз на етапі формування команди.' />

			<EmailText content='Є детальна презентація, стратегія та готові сценарії. Концепти для кіно, серіалів, анімації, пілотних шоу і геймдев-проєктів.' />

			<EmailH2 content='ГОЛОВНА ПРЕЗЕНТАЦІЯ' />

			<EmailLinkList
				items={[{ title: 'Повна картина / Бізнес-план', url: 'https://buhowski.dev/vision' }]}
			/>

			<EmailH3 top={10} content='ДЕТАЛІ' />

			<EmailLinkList
				items={[
					{ title: 'Стратегія / Журнал', url: 'https://buhowski.dev/mvp' },
					{ title: 'Кіновиробництво', url: 'https://buhowski.dev/cinema' },
					{ title: 'Геймдев', url: 'https://buhowski.dev/cinema' },
					{ title: 'Презентаційні шоу', url: 'https://buhowski.dev/cinema' },
				]}
			/>

			<EmailH2 content='ШУКАЮ' />

			<EmailText content='Співзасновників, партнерів і творців з критичним мисленням, схожою оцінкою реальності та вайбом інтелектуального хуліганства.' />

			<EmailH2 content='ПРОПОНУЮ' />

			<EmailBulletList
				items={[
					'Рівноправне партнерство з часткою в екосистемі та участь у формуванні стратегії.',

					'Власний напрям всередині платформи — з повною творчою свободою і автономією.',

					'Співавторство або консультування проєктів.',
				]}
			/>

			<EmailText content='Якщо відгукнулось — напишіть, обговоримо деталі.' />

			<EmailDivider />

			<EmailFooter />
		</EmailLayout>
	);
};

export default EmailToCoOwnersUA;
