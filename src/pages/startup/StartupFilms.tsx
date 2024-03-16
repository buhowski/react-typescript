import Slider from '../../components/Slider';
import { dataSlider } from './components/SliderDataFilms';
import GeneralStructure from './GeneralStructure';
import { filmsTextData } from './components/textData';

const StartupFilms = () => {
	return (
		<GeneralStructure
			title=''
			textData={filmsTextData}
			Slider={<Slider dataSlider={dataSlider} />}
		/>
	);
};

export default StartupFilms;
