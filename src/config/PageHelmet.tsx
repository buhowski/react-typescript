import { Helmet } from 'react-helmet-async';

interface MetaTags {
	title?: string;
	description?: string;
	canonicalUrl?: string;

	// Open Graph Meta Tags
	ogUrl?: string;
	ogTitle?: string;
	ogDescription?: string;
	ogImage?: string;

	// Twitter Meta Tags
	twitterUrl?: string;
	twitterTitle?: string;
	twitterDescription?: string;
	twitterImage?: string;
}

interface PageHelmetProps {
	metaTags: MetaTags;
}

const PageHelmet: React.FC<PageHelmetProps> = ({ metaTags }) => {
	const finalTwitterUrl = metaTags.twitterUrl || metaTags.ogUrl;
	const finalTwitterTitle = metaTags.twitterTitle || metaTags.ogTitle;
	const finalTwitterDescription = metaTags.twitterDescription || metaTags.ogDescription;
	const finalTwitterImage = metaTags.twitterImage || metaTags.ogImage;

	return (
		<Helmet>
			{metaTags.title && <title>{metaTags.title}</title>}
			{metaTags.description && <meta name='description' content={metaTags.description} />}
			{metaTags.canonicalUrl && <link rel='canonical' href={metaTags.canonicalUrl} />}

			{/* Open Graph Meta Tags */}
			{metaTags.ogUrl && <meta property='og:url' content={metaTags.ogUrl} />}
			{metaTags.ogTitle && <meta property='og:title' content={metaTags.ogTitle} />}
			{metaTags.ogDescription && (
				<meta property='og:description' content={metaTags.ogDescription} />
			)}
			{metaTags.ogImage && <meta property='og:image' content={metaTags.ogImage} />}

			{/* Twitter Meta Tags */}
			{finalTwitterUrl && <meta property='twitter:url' content={finalTwitterUrl} />}
			{finalTwitterTitle && <meta name='twitter:title' content={finalTwitterTitle} />}
			{finalTwitterDescription && (
				<meta name='twitter:description' content={finalTwitterDescription} />
			)}
			{finalTwitterImage && <meta name='twitter:image' content={finalTwitterImage} />}
		</Helmet>
	);
};

export default PageHelmet;
