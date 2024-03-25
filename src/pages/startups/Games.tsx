import Slider from '../../components/Slider';
import IdeaContent from './PageStructure/PageStructure';

import { dataSlider } from './data/games/SliderData';
import { gamesTextData } from './data/games/textData';

const StartupGames = () => {
	return (
		<IdeaContent
			title='Startup Ideas'
			textData={gamesTextData}
			Slider={<Slider dataSlider={dataSlider} />}
		/>
	);
};

export default StartupGames;
