// // TODO: Reusable page for all
import React from 'react';
import PageStructure from './components/PageStructure';
import { PageProps } from '../../types/common';

const SinglePage: React.FC<PageProps> = ({ textData, backButton }) => {
	return <PageStructure textData={textData} backButton={backButton} />;
};

export default SinglePage;
