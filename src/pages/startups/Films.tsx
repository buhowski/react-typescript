import Slider from './PageStructure/Slider';
import IdeaContent from './PageStructure/IdeaContent';

import { dataSlider } from './data/films/SliderData';
import { filmsTextData } from './data/films/textData';

const StartupFilms = () => {
	return (
		<IdeaContent
			title='Startup Ideas'
			textData={filmsTextData}
			Slider={<Slider dataSlider={dataSlider} />}
		/>
	);
};

export default StartupFilms;
