import Socials from './socials/Socials';
import socialData from './socials/socialData';

const PopupContacts = () => {
	return (
		<div className={`idea-contacts`}>
			<Socials
				socialData={socialData}
				items={[{ id: 'instagram' }, { id: 'telegram' }, { id: 'mail' }, { id: 'linkedin' }]}
			/>
		</div>
	);
};

export default PopupContacts;
