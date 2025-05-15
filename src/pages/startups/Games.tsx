import IdeaContent from './PageStructure/PageStructure';
import { dataSlider } from './pages/games/dataSlider';
import { dataGamesText } from './pages/games/dataGamesText';

const StartupGames = () => {
	return <IdeaContent textData={dataGamesText} sliderData={dataSlider} />;
};

export default StartupGames;
