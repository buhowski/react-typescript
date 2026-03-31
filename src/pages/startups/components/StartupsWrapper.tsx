import React from 'react';
import PageHelmet from '../../../components/PageHelmet';
import PageStructure from '../components/PageStructure';
import { SinglePageProps } from '../../../types/common';
import { visionMetaTags } from './startupsMetaTags';

// Wrapper component for any single startup page
const StartupsWrapper: React.FC<SinglePageProps> = ({
	pageData,
	backButtonPath,
	initialLang,
	metaTags,
}) => {
	return (
		<>
			{/* SEO Meta Tags */}
			<PageHelmet metaTags={metaTags || visionMetaTags} />

			{/* Page */}
			<PageStructure
				pageData={pageData}
				backButtonPath={backButtonPath}
				initialLang={initialLang}
			/>
		</>
	);
};

export default StartupsWrapper;
