import {
	emailIcons,
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
	const socialLinks = [
		{
			url: 'https://t.me/olexander_tsiomakh',
			icon: emailIcons.tg.src,
			alt: emailIcons.tg.alt,
		},
		{
			url: 'https://www.instagram.com/buhowski',
			icon: emailIcons.ig.src,
			alt: emailIcons.ig.alt,
		},
		{
			url: 'https://www.linkedin.com/in/olexander-tsiomakh-34a364239/',
			icon: emailIcons.in.src,
			alt: emailIcons.in.alt,
		},
	];

	return (
		<EmailLayout lang={lang}>
			<EmailHeader />

			<EmailText>Привіт.</EmailText>

			<EmailText>
				Я Олександр — ідейний розробник, сценарист і дослідник. Пишу тобі, бо бачу потенціал для
				синергії у створенні продукту, що виходить за межі стандартних IT-рішень.
			</EmailText>

			<EmailH2>ПРОЄКТ</EmailH2>

			<EmailText>
				Розважальний контркультурний журнал та соціальна платформа для тих, хто втомився від
				"успішного успіху" і шукає справжність, інтелектуальний гумор та естетику андерграунду.
			</EmailText>

			<EmailH2>ГОЛОВНА ПРЕЗЕНТАЦІЯ</EmailH2>

			<EmailLinkList
				items={[{ title: 'Візія / Бізнес-план / Цінності', url: 'https://buhowski.dev/vision' }]}
			/>

			<EmailH3 top={25}>ТЕХНІЧНИЙ СТЕК ТА MVP</EmailH3>

			<EmailLinkList
				items={[
					{ title: 'MVP / Прототип журналу', url: 'https://buhowski.dev/mvp' },

					{ title: 'Кіновиробництво (Cinema Industry)', url: 'https://buhowski.dev/cinema' },
				]}
			/>

			<EmailH2>ШУКАЮ В ПАРТНЕРИ</EmailH2>

			<EmailBulletList
				items={[
					'Співзасновників з експертизою в маркетингу або дистрибуції',

					'Креаторів, готових до експериментів зі смислами',

					'Людей, які цінують вайб інтелектуального хуліганства',
				]}
			/>

			<EmailText>
				Якщо тобі відгукується такий підхід — переглянь презентацію. Буду радий обговорити можливі
				точки дотику за кавою або в месенджері.
			</EmailText>

			<EmailDivider />

			<EmailFooter socialLinks={socialLinks} />
		</EmailLayout>
	);
};

export default EmailToCoOwnersUA;
