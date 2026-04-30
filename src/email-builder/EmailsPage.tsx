import {
	EmailLayout,
	EmailPad,
	EmailH2,
	EmailLinkList,
	EmailDivider,
	EmailFooter,
} from './EmailTemplate';
import { emailsConfig } from './emailsConfig';

import './EmailsPage.scss';

const EmailsPage = ({ lang }: { lang?: string }) => {
	const navItems = emailsConfig.map((item) => ({
		title: item.label,
		url: item.path,
	}));

	return (
		<div className='emails-page'>
			<EmailLayout lang={lang}>
				<EmailPad />

				<EmailH2 content='E' />

				<EmailLinkList items={navItems} />

				<EmailDivider />
				<EmailFooter />
			</EmailLayout>
		</div>
	);
};

export default EmailsPage;
