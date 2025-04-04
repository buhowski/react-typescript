import IdeaContent from './PageStructure/PageStructure';

import { dataSlider } from './data/games/SliderData';
import { gamesTextData } from './data/games/textData';

const StartupGames = () => {
	return (
		<IdeaContent
			pageClassName='startup-ideas'
			langDisable={['ru']}
			textData={gamesTextData}
			sliderData={dataSlider}
		/>
	);
};

export default StartupGames;
