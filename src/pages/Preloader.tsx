import { useState, useEffect } from 'react';

const Preloader = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 777);

		return () => clearTimeout(timer);
	}, []);

	return loading ? (
		<div className='preloader'>
			<div className='preloader__spinner'>
				{Array(12)
					.fill(null)
					.map((_, index) => (
						<span className='preloader__spinner-span' key={index}></span>
					))}
			</div>
		</div>
	) : null;
};

export default Preloader;
