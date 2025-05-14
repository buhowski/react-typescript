import PageStructure from '../../../PageStructure/PageStructure';

import { dataSlider } from '../dataSlider';
import { filmsTextData } from './dataText';

const EuropeanUkrainians = () => {
	return (
		<PageStructure
			pageClassName='startup-ideas'
			langDisable={['ru']}
			textData={filmsTextData}
			sliderData={dataSlider}
		/>
	);
};

export default EuropeanUkrainians;
