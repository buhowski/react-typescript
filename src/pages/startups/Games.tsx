import PageStructure from './PageStructure/PageStructure';
import { dataGamesSlider } from './pages/games/dataGamesSlider';
import { dataGamesText } from './pages/games/dataGamesText';

const StartupGames = () => {
	return <PageStructure textData={dataGamesText} sliderData={dataGamesSlider} />;
};

export default StartupGames;
