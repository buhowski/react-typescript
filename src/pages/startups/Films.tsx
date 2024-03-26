import Slider from '../../components/Slider';
import PageStructure from './PageStructure/PageStructure';

import { dataSlider } from './data/films/SliderData';
import { filmsTextData } from './data/films/textData';

const StartupFilms = () => {
	return (
		<PageStructure
			title='Pitch 01. TV Series'
			pageClassName='startup-ideas'
			langDisable='language-disable'
			textData={filmsTextData}
			Slider={<Slider dataSlider={dataSlider} />}
		/>
	);
};

export default StartupFilms;
