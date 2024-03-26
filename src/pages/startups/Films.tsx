import Slider from '../../components/Slider';
import PageStructure from './PageStructure/PageStructure';

import { dataSlider } from './data/films/SliderData';
import { filmsTextData } from './data/films/textData';

const StartupFilms = () => {
	return (
		<PageStructure
			title='Pitch 01'
			pageClassName='startup-ideas'
			textData={filmsTextData}
			Slider={<Slider dataSlider={dataSlider} />}
		/>
	);
};

export default StartupFilms;
