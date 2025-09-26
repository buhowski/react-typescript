import { Helmet } from 'react-helmet-async';
import { PageHelmetProps } from '../types/common';

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
			{metaTags.langAlternates?.map((a) => (
				<link key={a.hreflang} rel='alternate' hrefLang={a.hreflang} href={a.href} />
			))}

			{/* Open Graph Meta Tags */}
			{metaTags.ogUrl && <meta property='og:url' content={metaTags.ogUrl} />}
			{metaTags.ogTitle && <meta property='og:title' content={metaTags.ogTitle} />}
			{metaTags.ogDescription && (
				<meta property='og:description' content={metaTags.ogDescription} />
			)}
			{metaTags.ogImage && <meta property='og:image' content={metaTags.ogImage} />}

			{/* Twitter Meta Tags */}
			{finalTwitterUrl && <meta name='twitter:url' content={finalTwitterUrl} />}
			{finalTwitterTitle && <meta name='twitter:title' content={finalTwitterTitle} />}
			{finalTwitterDescription && (
				<meta name='twitter:description' content={finalTwitterDescription} />
			)}
			{finalTwitterImage && <meta name='twitter:image' content={finalTwitterImage} />}
		</Helmet>
	);
};

export default PageHelmet;
