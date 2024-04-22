import Slider from '../../components/Slider';
import PageStructure from './PageStructure/PageStructure';

import { dataSlider } from './data/startup/SliderData';
import { startupTextData } from './data/startup/textData';

const Startup = () => {
	return (
		<PageStructure
			title='Presentation'
			pageClassName=''
			langDisable=''
			textData={startupTextData}
			Slider={<Slider dataSlider={dataSlider} />}
		/>
	);
};

export default Startup;
