import React from 'react';
import PageHelmet from '../../../components/PageHelmet';
import PageStructure from '../components/PageStructure';
import { SinglePageProps } from '../../../types/common';
import { visionMetaTags } from './startupsMetaTags';

// Wrapper component for any single startup page
const StartupsWrapper: React.FC<SinglePageProps> = ({
	pageData,
	backButton,
	initialLang,
	metaTags,
}) => {
	return (
		<>
			{/* SEO Meta Tags */}
			<PageHelmet metaTags={metaTags || visionMetaTags} />

			{/* Page */}
			<PageStructure pageData={pageData} backButton={backButton} initialLang={initialLang} />
		</>
	);
};

export default StartupsWrapper;
