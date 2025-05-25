import PageStructure from './PageStructure/PageStructure';
import { dataStartup } from './pages/startup/dataStartup';

const Startup = () => {
	return <PageStructure textData={dataStartup} tableOfContent={true} />;
};

export default Startup;
