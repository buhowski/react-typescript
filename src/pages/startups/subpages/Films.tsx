import Slider from '../components/Slider';
import { dataSlider } from '../data/SlidersData/SliderDataFilms';
import IdeaContent from '../components/IdeaContent';
import { filmsTextData } from '../data/textData';

const StartupFilms = () => {
	return (
		<IdeaContent
			title='Film Startups'
			textData={filmsTextData}
			Slider={<Slider dataSlider={dataSlider} />}
		/>
	);
};

export default StartupFilms;
