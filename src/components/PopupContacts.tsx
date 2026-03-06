import Socials from './socials/Socials';
import socialData from './socials/socialData';

const PopupContacts = () => {
	return (
		<div className={`idea-contacts`}>
			<Socials
				socialData={socialData}
				items={[{ id: 'telegram' }, { id: 'instagram' }, { id: 'linkedin' }, { id: 'mail' }]}
			/>
		</div>
	);
};

export default PopupContacts;
