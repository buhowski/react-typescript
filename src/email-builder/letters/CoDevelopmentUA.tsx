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

const CoDevelopmentUA = ({ lang }: { lang?: string }) => {
	return (
		<EmailLayout lang={lang}>
			{/* Preview Subject */}
			<EmailPreheader text='Dark Fantasy Odyssey у трьох частинах — Тіні Козаків. Сага' />

			<EmailHeader />

			<EmailText content='Привіт.' />

			<EmailText content='Я Олександр — ідейний розробник і сценарист. Маю готові концепти для відеоігрових проєктів. Шукаю партнерів для спільної реалізації.' />

			<EmailH2 content='ПРОЄКТИ' />

			<EmailText content='Епічна Dark Fantasy Odyssey / Action RPG — серія з трьох частин. Масштабний шлях від містичної Київської Русі IX століття до альтернативного кіберфутуризму з власною міфологією, лором і переосмисленою історією людства. Релігія, влада і людська природа — без фільтрів.' />

			<EmailText content='Сформовані світи з авторським баченням та готовою основою для виробництва:' />

			<EmailLinkList
				items={[
					{ title: 'Тіні Козаків: Сага', url: 'https://buhowski.dev/saga' },
					{ title: 'Частина I: Шепіт Забутих', url: 'https://buhowski.dev/saga-1' },
					{ title: 'Частина II: Попіл Коханих', url: 'https://buhowski.dev/saga-2' },
					{ title: 'Частина III: Квантовий Стрибок', url: 'https://buhowski.dev/saga-3' },
				]}
			/>

			<EmailH2 content='ШУКАЮ' />

			<EmailText content='Видавців, ко-розробників, інвесторів та ігрові студії для спільної реалізації, залучення ресурсів та виходу проєктів у виробництво.' />

			<EmailH2 content='МАСШТАБ' />

			<EmailText content='Геймдев — частина глобальної екосистеми (журнал, контркультурне медіа, кіновиробництво, технології):' />

			<EmailLinkList
				items={[{ title: 'Повна картина / Бізнес-план', url: 'https://buhowski.dev/vision' }]}
			/>

			<EmailText content='Якщо відгукнулось — напишіть, обговоримо деталі.' />

			<EmailDivider />

			<EmailFooter />
		</EmailLayout>
	);
};

export default CoDevelopmentUA;
