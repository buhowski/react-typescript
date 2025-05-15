const Preloader = () => {
	return (
		<div className='preloader'>
			<div className='preloader__spinner'>
				{Array(12)
					.fill(null)
					.map((_, index) => (
						<span className='preloader__spinner-span' key={index}></span>
					))}
			</div>
		</div>
	);
};

export default Preloader;
