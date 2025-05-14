import PageStructure from './PageStructure/PageStructure';

import { dataSlider } from './pages/films/dataSlider';
import { filmsTextData } from './pages/films/dataFilmsPreview';

const StartupFilms = () => {
	return (
		<PageStructure
			pageClassName='startup-ideas'
			langDisable={['ru']}
			textData={filmsTextData}
			sliderData={dataSlider}
		/>
	);
};

export default StartupFilms;
