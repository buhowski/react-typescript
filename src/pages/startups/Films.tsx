import Slider from '../../components/Slider';
import PageStructure from './PageStructure/PageStructure';

import { dataSlider } from './data/films/SliderData';
import { filmsTextData } from './data/films/textData';

const StartupFilms = () => {
	return (
		<PageStructure
			pageClassName='startup-ideas'
			langDisable={['ru']}
			textData={filmsTextData}
			Slider={<Slider dataSlider={dataSlider} />}
		/>
	);
};

export default StartupFilms;
