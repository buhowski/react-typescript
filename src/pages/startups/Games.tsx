import PageStructure from './PageStructure/PageStructure';
import { dataGamesSlider } from './pages/games/dataSliderGames';
import { dataGamesText } from './pages/games/dataTextGames';

const StartupGames = () => {
	return <PageStructure textData={dataGamesText} sliderData={dataGamesSlider} />;
};

export default StartupGames;
