import { useState, useEffect } from 'react';

export const useStickyHeader = () => {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const pageContainer = document.querySelector('.page-container');
		const startupAction = document.querySelector('.startup-action');
		if (!pageContainer || !startupAction) return;

		const handleScroll = () => {
			const newIsActive =
				startupAction.getBoundingClientRect().top <= pageContainer.getBoundingClientRect().top;
			setIsActive((prev) => (prev === newIsActive ? prev : newIsActive));
		};

		pageContainer.addEventListener('scroll', handleScroll);
		return () => pageContainer.removeEventListener('scroll', handleScroll);
	}, []);

	return isActive;
};
