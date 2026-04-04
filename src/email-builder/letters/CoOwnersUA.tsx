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

const CoOwnersUA = ({ lang }: { lang?: string }) => {
	return (
		<EmailLayout lang={lang}>
			{/* Preview Subject */}
			<EmailPreheader text='Шукаю співучасників — альтернативна операційна система реальності' />

			<EmailHeader />

			<EmailText content='Привіт.' />

			<EmailText content='Я Олександр — ідейний розробник і сценарист. Створюю незалежний медіапростір. Пишу з пропозицією про співпрацю.' />

			<EmailH2 content='СУТЬ' />

			<EmailText content='Розробляю контркультурну екосистему з ядром у вигляді журналу та соцмережі. Вона масштабується у кіновиробництво, геймдев та IT. Додатково інтегруються стрімінг і хаб для дистрибуції власних проєктів. Мета — змінювати сприйняття реальності, пропагандуючи здоровий глузд.' />

			<EmailH2 content='ПРЕЗЕНТАЦІЯ' />

			<EmailLinkList
				items={[{ title: 'Повна картина / Бізнес-план', url: 'https://buhowski.dev/vision' }]}
			/>

			<EmailH2 content='ШУКАЮ' />

			<EmailText content='Співзасновників, партнерів і творчих співучасників. Людей із критичним мисленням, вільним почуттям гумору та вайбом інтелектуального хуліганства.' />

			<EmailH2 content='ПРОПОНУЮ' />

			<EmailBulletList
				items={[
					'Рівноправне партнерство — частка в екосистемі, вплив на стратегію.',

					'Власний напрям всередині платформи з повною автономією.',

					'Гнучкий формат — від співавторства до реалізації ваших ідей.',
				]}
			/>

			<EmailH2 content='ЕЛЕМЕНТИ КАРТИНИ' />

			<EmailText content='Формую команду під готову стратегію. Є розроблені сценарії та концепти (кіно, серіали, анімація, шоу, геймдев-проєкти):' />

			<EmailLinkList
				items={[
					{ title: 'Журнал / Стратегія', url: 'https://buhowski.dev/mvp' },
					{ title: 'Кіновиробництво', url: 'https://buhowski.dev/cinema' },
					{ title: 'Геймдев', url: 'https://buhowski.dev/gamedev' },
					{ title: 'Пілотні проєкти', url: 'https://buhowski.dev/pilots' },
				]}
			/>

			<EmailText content='Якщо відгукнулось — напишіть, обговоримо деталі.' />

			<EmailDivider />

			<EmailFooter />
		</EmailLayout>
	);
};

export default CoOwnersUA;
