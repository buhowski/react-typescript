import Slider from '../../components/Slider';
import { dataSlider } from './components/SliderDataArticles';
import GeneralStructure from './GeneralStructure';
import { gamesTextData } from './components/textData';

const StartupFilms = () => {
	return (
		<GeneralStructure
			title=''
			textData={gamesTextData}
			Slider={<Slider dataSlider={dataSlider} />}
		/>
	);
};

export default StartupFilms;
