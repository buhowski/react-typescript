import {
	EmailLayout,
	EmailPreheader,
	EmailHeader,
	EmailH2,
	EmailText,
	EmailLinkList,
	EmailBulletList,
	EmailDivider,
	EmailFooter,
} from '../EmailTemplate';

const InvestorsUA = ({ lang }: { lang?: string }) => {
	return (
		<EmailLayout lang={lang}>
			{/* Preview Subject */}
			<EmailPreheader text='Капіталізуємо смисли — інвестиції в альтернативну операційну систему реальності' />

			<EmailHeader />

			<EmailText content='Привіт.' />

			<EmailText content='Я Олександр — ідейний розробник і сценарист. Створюю незалежний медіапростір. Пишу з пропозицією про приватне інвестування та стратегічне партнерство.' />

			<EmailH2 content='СУТЬ' />

			<EmailText content='Розробляю контркультурну екосистему з ядром у вигляді журналу та соцмережі. Вона масштабується у кіновиробництво, геймдев та IT. Додатково інтегруються стрімінг і хаб для дистрибуції власних проєктів. Мета — змінювати сприйняття реальності, пропагандуючи здоровий глузд.' />

			<EmailH2 content='ПРЕЗЕНТАЦІЯ' />

			<EmailLinkList
				items={[{ title: 'Повна картина / Бізнес-план', url: 'https://buhowski.dev/vision' }]}
			/>

			<EmailH2 content='ШУКАЮ' />

			<EmailText content='Приватних інвесторів та стратегічних партнерів. Людей із ресурсами, критичним мисленням і вайбом інтелектуального хуліганства, які готові капіталізувати смисли та масштабувати контркультуру.' />

			<EmailH2 content='ПРОПОНУЮ' />

			<EmailBulletList
				items={[
					'Частка в екосистемі на ранньому етапі — вхід у капітал до масштабування.',

					'Прозора модель повернення інвестицій через монетизацію платформи, стрімінгу та дистрибуції.',

					'Гнучкий формат участі — від разової підтримки до повноцінного партнерства.',
				]}
			/>

			<EmailH2 content='ЕЛЕМЕНТИ КАРТИНИ' />

			<EmailText content='Формую команду під готову стратегію. Є розроблені сценарії та концепти (кіно, серіали, анімація, шоу, геймдев-проєкти):' />

			<EmailLinkList
				items={[
					{ title: 'Журнал / Стратегія', url: 'https://buhowski.dev/mvp' },
					{ title: 'Кіновиробництво', url: 'https://buhowski.dev/cinema' },
					{ title: 'Геймдев', url: 'https://buhowski.dev/games' },
					{ title: 'Пілотні проєкти', url: 'https://buhowski.dev/pilots' },
				]}
			/>

			<EmailText content='Якщо відгукнулось — напишіть, обговоримо деталі.' />

			<EmailDivider />

			<EmailFooter />
		</EmailLayout>
	);
};

export default InvestorsUA;
