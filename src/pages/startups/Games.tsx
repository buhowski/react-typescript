import Slider from './PageStructure/Slider';
import IdeaContent from './PageStructure/IdeaContent';

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
