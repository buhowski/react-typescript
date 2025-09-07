import PageStructure from '../../../components/PageStructure';
import { dataText } from './dataText';
import { pathToCinema } from '../../../../../components/urlsData';

const TheCorp = () => {
	return <PageStructure textData={dataText} backButton={pathToCinema} />;
};

export default TheCorp;
