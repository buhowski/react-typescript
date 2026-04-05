import { useState } from 'react';
import Preloader from '../components/Preloader';

const CV_ID = '15IDBAOM4IXY8bGrNw467RB0JY7lvx4CPNjS1AFFIxx4';
const cvPreview = `https://docs.google.com/document/d/${CV_ID}/preview?rm=minimal&chrome=false&embedded=true`;
const cvFullPreview = `https://docs.google.com/document/d/${CV_ID}/view`;
const cvDownload = `https://docs.google.com/document/d/${CV_ID}/export?format=pdf`;

const CVPage = () => {
	const [loaded, setLoaded] = useState(false);

	return (
		<div className={`resume ${loaded ? 'is-loaded' : ''}`}>
			<div className='resume__actions'>
				<h1>Resume</h1>

				<a
					href={cvDownload}
					download='CV_Olexander_Tsiomakh_Frontend.pdf'
					target='_blank'
					rel='noopener noreferrer'
					className='resume__download'
					title='Download PDF version'
				>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' width='20' height='22'>
						<path d='M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z' />
					</svg>
					PDF
				</a>

				<a
					href={cvFullPreview}
					target='_blank'
					rel='noopener noreferrer'
					className='resume__download'
					title='Open in new tab'
				>
					Full View
				</a>
			</div>

			<div className='resume__wrapper'>
				{!loaded && <Preloader />}

				<iframe
					onLoad={() => setLoaded(true)}
					src={cvPreview}
					title='Resume Preview'
					className='resume__frame'
				/>
			</div>
		</div>
	);
};

export default CVPage;
