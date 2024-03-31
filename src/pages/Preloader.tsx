import React, { useState, useEffect } from 'react';

const Preloader = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 800);

		return () => clearTimeout(timer);
	}, []);

	return loading ? (
		<div className='preloader'>
			<div className='lds-spinner'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	) : null;
};

export default Preloader;
