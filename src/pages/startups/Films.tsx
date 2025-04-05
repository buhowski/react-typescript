import PageStructure from './PageStructure/PageStructure';

import { dataSlider } from './data/films/SliderData';
import { filmsTextData } from './data/films/textData';

const StartupFilms = () => {
	return (
		<PageStructure
			pageClassName='startup-ideas'
			langDisable={['ru']}
			textData={filmsTextData}
			// toc={true}
			sliderData={dataSlider}
		/>
	);
};

export default StartupFilms;
