import Slider from '../../../components/Slider';
import { dataSlider } from '../data/SlidersData/SliderDataStartup';
import IdeaContent from '../components/IdeaContent';
import { startupTextData } from '../data/textData';

const StartupMain = () => {
	return (
		<IdeaContent
			title='Startup Presentation'
			textData={startupTextData}
			Slider={<Slider dataSlider={dataSlider} />}
		/>
	);
};

export default StartupMain;
