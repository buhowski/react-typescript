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

const EmailToInvestorsUA = ({ lang }: { lang?: string }) => {
	return (
		<EmailLayout lang={lang}>
			{/* Preview Subject */}
			<EmailPreheader text='Капіталізуємо смисли — масштабуємо незалежне медіа-ядро в IT-екосистему' />

			<EmailHeader />

			<EmailText content='Привіт.' />

			<EmailText content='Я Олександр — ідейний розробник, сценарист і дослідник. Створюю незалежний медіапростір. Пишу з пропозицією про приватне інвестування та стратегічне партнерство.' />

			<EmailH2 content='СУТЬ' />

			<EmailText content='Розробляю контркультурну екосистему: журнал і соцмережа як ядро, що масштабується у кіновиробництво, геймдев та IT. Зі стрімінгом і хабом для дистрибуції власних проєктів, що змінюють сприйняття реальності та пропагандують розвиток.' />

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

export default EmailToInvestorsUA;
