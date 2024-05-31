import { Helmet } from 'react-helmet-async';

interface MetaTags {
	title?: string;
	description?: string;
	canonicalUrl?: string;

	ogUrl?: string;
	ogTitle?: string;
	ogDescription?: string;
	ogImage?: string;
}

interface PageHelmetProps {
	metaTags: MetaTags;
}

const PageHelmet: React.FC<PageHelmetProps> = ({ metaTags }) => {
	return (
		<Helmet>
			{metaTags.title && <title>{metaTags.title}</title>}
			{metaTags.description && (
				<meta name='description' content={metaTags.description} />
			)}
			{metaTags.canonicalUrl && <link rel='canonical' href={metaTags.canonicalUrl} />}

			{/* Open Graph Meta Tags */}
			{metaTags.ogUrl && <meta property='og:url' content={metaTags.ogUrl} />}
			{metaTags.ogTitle && <meta property='og:title' content={metaTags.ogTitle} />}
			{metaTags.ogDescription && (
				<meta property='og:description' content={metaTags.ogDescription} />
			)}
			{metaTags.ogImage && <meta property='og:image' content={metaTags.ogImage} />}

			{/* Twitter Meta Tags */}
			{metaTags.ogUrl && <meta property='twitter:url' content={metaTags.ogUrl} />}
			{metaTags.ogTitle && <meta name='twitter:title' content={metaTags.ogTitle} />}
			{metaTags.ogDescription && (
				<meta name='twitter:description' content={metaTags.ogDescription} />
			)}
			{metaTags.ogImage && <meta name='twitter:image' content={metaTags.ogImage} />}
		</Helmet>
	);
};

export default PageHelmet;
