import useAnimateOnScroll from '../config/useAnimateOnScroll';

const Copyright = () => {
	// Animation hook
	const [pRef, isVisible] = useAnimateOnScroll<HTMLParagraphElement>(0.5);

	return (
		<div className='idea-copy'>
			<p ref={pRef} className={`copyright-text ${isVisible ? 'is-visible' : ''}`}>
				{new Date().getFullYear()} <span className='symbol'>&copy;</span> Olexander Tsiomakh
			</p>
		</div>
	);
};

export default Copyright;
