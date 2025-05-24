import Socials from './socials/Socials';
import socialData from './socials/socialData';
import { WithLanguage } from '../types/common';

const contactTitles = {
	en: 'Get in touch — open to discussions and proposals',
	ua: 'На звʼязку — відкритий до обговорень і пропозицій',
	ru: 'На связи — открыт к обсуждениям и предложениям',
};

//  Disable h3 title
const displayTitle = false;

const PopupContacts = ({ currentLanguage }: WithLanguage) => {
	const titleText =
		contactTitles[currentLanguage as keyof typeof contactTitles] || contactTitles.en || null;

	return (
		<div className={`idea-contacts`}>
			{displayTitle && <h3>{titleText}</h3>}

			<Socials
				socialData={socialData}
				items={[{ id: 'instagram' }, { id: 'telegram' }, { id: 'mail' }, { id: 'linkedin' }]}
			/>
		</div>
	);
};

export default PopupContacts;
