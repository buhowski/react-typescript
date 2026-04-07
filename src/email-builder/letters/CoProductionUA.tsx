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

const CoProductionUA = ({ lang }: { lang?: string }) => {
	return (
		<EmailLayout lang={lang}>
			{/* Preview Subject */}
			<EmailPreheader text='Авторські сценарії та концепти — кіно, серіали, анімація' />

			<EmailHeader />

			<EmailText content='Привіт.' />

			<EmailText content='Я Олександр — ідейний розробник і сценарист. Маю готові сценарії та ідеї для кіно, серіалів і анімації. Шукаю партнерів для спільної реалізації.' />

			<EmailH2 content='ПРОЄКТИ' />

			<EmailText content='В основі кожного концепту — авторське бачення і готова основа для виробництва. Різні жанри й формати — кожен зі своїм характером:' />

			<EmailLinkList
				items={[{ title: 'Список з логлайнами', url: 'https://buhowski.dev/cinema' }]}
			/>

			<EmailH2 content='СЕРІАЛИ' />

			<EmailLinkList
				items={[
					{
						title: 'The Corp .!.',
						url: 'https://buhowski.dev/corp',
						genre: 'Reality Satire Mockumentary',
					},
				]}
			/>

			<EmailLinkList
				items={[
					{
						title: 'Європейські Українці',
						url: 'https://buhowski.dev/ukropeans',
						genre: 'Nihilistic Absurdist Satire',
					},
				]}
			/>

			<EmailH2 content='ФІЛЬМИ' />

			<EmailLinkList
				items={[
					{
						title: 'Волинська Свадьба: Кімната Женіха',
						url: 'https://buhowski.dev/volyn',
						genre: 'Borderline Action Farce',
					},
				]}
			/>

			<EmailLinkList
				items={[
					{
						title: 'Одного разу... в Україні',
						url: 'https://buhowski.dev/once',
						genre: 'Existential Social Tragedy',
					},
				]}
			/>

			<EmailLinkList
				items={[
					{
						title: 'Вона + Він',
						url: 'https://buhowski.dev/she-he',
						genre: 'Urban Verse Tragic Romance',
					},
				]}
			/>

			<EmailH2 content='АНІМАЦІЯ' />

			<EmailLinkList
				items={[
					{
						title: "Дерев'яне Чтиво",
						url: 'https://buhowski.dev/wooden',
						genre: 'Folk Noir Crime Comedy',
					},
				]}
			/>

			<EmailLinkList
				items={[
					{
						title: 'Пригоди Ліліт',
						url: 'https://buhowski.dev/lilith',
						genre: 'Dark Fantasy Comedy / Series',
					},
				]}
			/>

			<EmailH2 content='ШУКАЮ' />

			<EmailText content='Продюсерів, інвесторів і студії для спільної реалізації, залучення ресурсів та виходу проєктів у виробництво.' />

			<EmailH2 content='МАСШТАБ' />

			<EmailText content='Кінематограф — пазл глобальної картини та частина альтернативної ОС реальності (контркультурного журналу, геймдеву, технологій):' />

			<EmailLinkList
				items={[{ title: 'Повна картина / Бізнес-план', url: 'https://buhowski.dev/vision' }]}
			/>

			<EmailText content='Якщо відгукнулось — напишіть, обговоримо деталі.' />

			<EmailDivider />

			<EmailFooter />
		</EmailLayout>
	);
};

export default CoProductionUA;
