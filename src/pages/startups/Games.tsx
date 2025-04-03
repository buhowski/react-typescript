import Slider from '../../components/Slider';
import IdeaContent from './PageStructure/PageStructure';

import { dataSlider } from './data/games/SliderData';
import { gamesTextData } from './data/games/textData';

const StartupGames = () => {
	return (
		<IdeaContent
			title='Pitch 01. Video Game'
			pageClassName='startup-ideas'
			langDisable={['ru']}
			textData={gamesTextData}
			Slider={<Slider dataSlider={dataSlider} />}
		/>
	);
};

export default StartupGames;
