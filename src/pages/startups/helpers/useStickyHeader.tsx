import { useState, useEffect } from 'react';

export const useStickyHeader = (ref: React.RefObject<HTMLElement>) => {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const handleScroll = () => {
			const rect = element.getBoundingClientRect();
			const newIsActive = rect.top <= 0;
			setIsActive((prev) => (prev === newIsActive ? prev : newIsActive));
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, [ref]);

	return isActive;
};
