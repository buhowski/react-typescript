import { useRef, useEffect, useState, MutableRefObject } from 'react';

const useAnimateOnScroll = <T extends HTMLElement>(
	threshold = 0.5
): [MutableRefObject<T | null>, boolean] => {
	// Ref
	const elementRef = useRef<T | null>(null);

	// Visibility state
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Current ref
		const currentRef = elementRef.current;
		if (!currentRef) return;

		// Observer setup
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold }
		);

		// Start observing
		observer.observe(currentRef);

		// Cleanup
		return () => {
			observer.unobserve(currentRef);
		};
	}, [threshold]);

	// Return ref and visibility state
	return [elementRef, isVisible];
};

export default useAnimateOnScroll;
