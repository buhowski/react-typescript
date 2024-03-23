import Slider from './PageStructure/Slider';
import IdeaContent from './PageStructure/IdeaContent';

import { dataSlider } from './data/startup/SliderData';
import { startupTextData } from './data/startup/textData';

const Startup = () => {
	return (
		<IdeaContent
			title='Core Concept Presentation'
			textData={startupTextData}
			Slider={<Slider dataSlider={dataSlider} />}
		/>
	);
};

export default Startup;
