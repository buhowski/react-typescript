import PageStructure from './PageStructure/PageStructure';
import { dataGamesText } from './pages/games/dataTextGames';

const StartupGames = () => {
	return <PageStructure textData={dataGamesText} />;
};

export default StartupGames;
