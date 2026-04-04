import { useState } from 'react';
import Preloader from '../components/Preloader';

const CV_ID = '15IDBAOM4IXY8bGrNw467RB0JY7lvx4CPNjS1AFFIxx4';
const cvDownload = `https://docs.google.com/document/d/${CV_ID}/export?format=pdf`;
const cvPreview = `https://docs.google.com/viewer?url=${encodeURIComponent(cvDownload)}&embedded=true`;

const CVPage = () => {
	const [loaded, setLoaded] = useState(false);

	return (
		<div className={`resume ${loaded ? 'is-loaded' : ''}`}>
			{/* PRELOADER OVERLAY */}

			<div className='wrapper'>
				<div className='resume__wrapper'>
					{!loaded && <Preloader />}

					<iframe
						onLoad={() => setLoaded(true)}
						src={cvPreview}
						title='Resume Preview'
						allow='autoplay'
						loading='lazy'
						referrerPolicy='no-referrer'
						sandbox='allow-same-origin allow-scripts allow-popups allow-forms'
						className='resume__frame'
						style={{
							width: '100%',
							height: '100%',
							border: 'none',
						}}
					/>
				</div>
			</div>

			<div className='resume__actions'>
				<span>Resume</span>

				<a
					href={cvDownload}
					download='CV_Olexander_Tsiomakh_Frontend.pdf'
					target='_blank'
					rel='noopener noreferrer'
					className='resume__download'
				>
					Download PDF
				</a>
			</div>
		</div>
	);
};

export default CVPage;
