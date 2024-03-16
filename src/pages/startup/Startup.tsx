import Slider from '../../components/Slider';
import { dataSlider } from './components/SliderDataStartup';
import GeneralStructure from './GeneralStructure';
import { startupTextData } from './components/textData';

const StartupFilms = () => {
	return (
		<GeneralStructure
			title='Startup Presentation'
			textData={startupTextData}
			Slider={<Slider dataSlider={dataSlider} />}
		/>
	);
};

export default StartupFilms;
