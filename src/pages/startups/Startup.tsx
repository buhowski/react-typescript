import PageStructure from './PageStructure/PageStructure';

import { dataSlider } from './data/startup/SliderData';
import { startupTextData } from './data/startup/textData';

const Startup = () => {
	return (
		<PageStructure
			pageClassName=''
			langDisable=''
			textData={startupTextData}
			sliderData={dataSlider}
		/>
	);
};

export default Startup;
