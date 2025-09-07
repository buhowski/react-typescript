import PageStructure from '../../../components/PageStructure';
import { dataText } from './dataText';
import { pathToCinema } from '../../../../../components/urlsData';

const EuropeanUkrainians = () => {
	return <PageStructure textData={dataText} backButton={pathToCinema} />;
};

export default EuropeanUkrainians;
