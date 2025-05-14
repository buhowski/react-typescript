import PageStructure from './PageStructure/PageStructure';

import { dataSlider } from './pages/startup/SliderData';
import { startupTextData } from './pages/startup/textData';

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
