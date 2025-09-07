import React from 'react';
import PageStructure from '../components/PageStructure';
import { SinglePageProps } from '../../../types/common';

// Wrapper component for any single startup page
const StartupsWrapper: React.FC<SinglePageProps> = ({ pageData, backButton, initialLang }) => {
	return <PageStructure pageData={pageData} backButton={backButton} initialLang={initialLang} />;
};

export default StartupsWrapper;
