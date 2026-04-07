import { useState } from 'react';
import Preloader from '../components/Preloader';
import PageHelmet from '../components/PageHelmet';
import { cvMetaTags } from '../components/metaTagsBasic';
import { pathToProjects } from '../components/urlsData';
// import useChromeMobile from '../config/useChromeMobile';

const docId = '12rOT1Pa4Z-Usau2Xkh-QTXweDTZJJTKvadrJKmRpCk0';
const docExportPDF = `https://docs.google.com/document/d/${docId}/export?format=pdf`;

// DEFAULT (Desktop/Safari/In-App)
// const doc = `https://docs.google.com/document/d/${docId}/preview?rm=minimal&embedded=true`;

// CHROME MOBILE ONLY (Proxy Viewer)
// const docMobile = `https://docs.google.com/viewer?url=${encodeURIComponent(docExportPDF)}`;

const docPDF = `https://drive.google.com/file/d/${docId}/preview`;

const CVActions = ({ link, downloadFile }: { link: string; downloadFile: string }) => {
	return (
		<nav className='resume__actions'>
			{/* <h1>Resume</h1> */}

			<a
				href={link}
				target='_blank'
				rel='noopener noreferrer'
				className='resume__btn'
				title='View Portfolio'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 576 512'
					width='20'
					height='20'
					fill='currentColor'
				>
					<path d='M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.4 78.1-95.4 92.9-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.8-35.7-46.1-87.7-92.9-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128z' />
				</svg>
				Portfolio
			</a>

			<a
				href={downloadFile}
				download='CV_Olexander_Tsiomakh_Frontend.pdf'
				target='_blank'
				rel='noopener noreferrer'
				className='resume__btn'
				title='Download PDF'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 448 512'
					width='20'
					height='22'
					fill='currentColor'
				>
					<path d='M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z' />
				</svg>
				Get CV
			</a>
		</nav>
	);
};

const CVPage = () => {
	const [loaded, setLoaded] = useState(false);
	// const isChromeMobile = useChromeMobile();

	return (
		<div className={`resume ${loaded ? 'is-loaded' : ''}`}>
			<PageHelmet metaTags={cvMetaTags} />

			{!loaded && <Preloader />}

			<CVActions link={pathToProjects} downloadFile={docExportPDF} />

			<iframe
				// src={isChromeMobile ? docPDF : doc}
				src={docPDF}
				onLoad={() => setLoaded(true)}
				className='resume__frame'
				title='Resume'
				allow='fullscreen'
				sandbox='allow-downloads allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-modals'
				// referrerPolicy='no-referrer'
			/>
		</div>
	);
};

export default CVPage;
