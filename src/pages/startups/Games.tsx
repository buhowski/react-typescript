import IdeaContent from './PageStructure/PageStructure';

import { dataSlider } from './pages/games/SliderData';
import { gamesTextData } from './pages/games/textData';

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
