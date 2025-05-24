import PageStructure from './PageStructure/PageStructure';
import { dataGames } from './pages/games/dataGames';

const StartupGames = () => {
	return <PageStructure textData={dataGames} />;
};

export default StartupGames;
