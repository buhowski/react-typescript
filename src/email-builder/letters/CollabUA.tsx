import {
	EmailLayout,
	EmailPreheader,
	EmailHeader,
	EmailH2,
	EmailText,
	EmailLinkList,
	EmailDivider,
	EmailFooter,
} from '../EmailTemplate';

const CollabUA = ({ lang }: { lang?: string }) => {
	return (
		<EmailLayout lang={lang}>
			{/* Preview Subject */}
			<EmailPreheader text='Готові пілоти — творчий ляпас застарілому мисленню' />

			<EmailHeader />

			<EmailText content='Привіт.' />

			<EmailText content='Я Олександр — ідейний розробник і сценарист. Маю концепції для відеошоу і шукаю креативних співучасників для реалізації творчості.' />

			<EmailH2 content='ПРОЄКТИ' />

			<EmailText content='Вже готові сценарії та ідеї для старту. Імпровізація, чорний гумор та естетика абсурду як інструмент інтелектуальної провокації:' />

			<EmailLinkList
				items={[
					{ title: 'Список з логлайнами', url: 'https://buhowski.dev/pilots' },
					{
						title: 'Вимір Мінус Ноль',
						url: 'https://buhowski.dev/podcast',
						genre: 'Sketch Comedy / Talk Show',
					},
					{
						title: 'Вечір у БОГА',
						url: 'https://buhowski.dev/god',
						genre: 'Satirical Comedy / Theatrical Show',
					},
					{
						title: 'Бійцівський Клуб Санта Барбара',
						url: 'https://buhowski.dev/cry-club',
						genre: 'Dark Comedy / Reality Show',
					},
				]}
			/>

			<EmailH2 content='ШУКАЮ' />

			<EmailText content='Кріейторів, режисерів, продюсерів. Тих, хто вже створює контент або тільки хоче почати. Людей із критичним мисленням, вільним почуттям гумору та вайбом інтелектуального хуліганства.' />

			<EmailText content='Усі реалізовані проєкти зможете використовувати на власних каналах.' />

			<EmailH2 content='МАСШТАБ' />

			<EmailText content='Відеошоу — пілотний етап та точка входу в альтернативну ОС реальності (контркультурного журналу, кіновиробництва, геймдеву, технологій):' />

			<EmailLinkList
				items={[{ title: 'Повна картина / Бізнес-план', url: 'https://buhowski.dev/vision' }]}
			/>

			<EmailText content='Якщо відгукнулось — напишіть, обговоримо деталі.' />

			<EmailDivider />

			<EmailFooter />
		</EmailLayout>
	);
};

export default CollabUA;
