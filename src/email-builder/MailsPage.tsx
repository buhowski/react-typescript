import { EmailLayout, EmailPadding, EmailH2, EmailLinkList, EmailFooter } from './EmailTemplate';
import { emailsConfig } from './emailsConfig';

import './MailsPage.scss';

const MailsPage = ({ lang }: { lang?: string }) => {
	const navItems = emailsConfig.map((item) => ({
		title: item.label,
		url: item.path,
	}));

	return (
		<div className='mails-page'>
			<EmailLayout lang={lang}>
				<EmailPadding />

				<EmailH2 content='Пропозиції' />

				<EmailLinkList items={navItems} />

				<EmailFooter />
			</EmailLayout>
		</div>
	);
};

export default MailsPage;
