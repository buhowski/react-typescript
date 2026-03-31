import { useState, useEffect } from 'react';

export const useStickyHeader = () => {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const startupAction = document.querySelector('.startup-action');

		if (!startupAction) return;

		const handleScroll = () => {
			const rect = startupAction.getBoundingClientRect();
			const newIsActive = rect.top <= 0;

			setIsActive((prev) => (prev === newIsActive ? prev : newIsActive));
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return isActive;
};
