import useAnimateOnScroll from '../config/useAnimateOnScroll';
import { authorPseudo } from '../components/metaTagsBasic';

const Copyright = () => {
	// Animation hook
	const [pRef, isVisible] = useAnimateOnScroll<HTMLParagraphElement>(0.5);

	return (
		<div className='copyright'>
			<p ref={pRef} className={`copyright-text ${isVisible ? 'is-visible' : ''}`}>
				{new Date().getFullYear()} <span className='symbol'>&copy;</span> {authorPseudo}
			</p>
		</div>
	);
};

export default Copyright;
