import { useLayoutEffect } from 'react';

export const useActiveIndicator = (
	containerRef: React.RefObject<HTMLElement>,
	activeSelector: string,
) => {
	useLayoutEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const updateIndicator = () => {
			const activeEl = container.querySelector<HTMLElement>(activeSelector);
			if (!activeEl) return;

			const x = activeEl.offsetLeft;
			const width = activeEl.offsetWidth;

			container.style.setProperty('--indicator-x', `${x}px`);
			container.style.setProperty('--indicator-width', `${width}px`);
		};

		updateIndicator();

		const resizeObserver = new ResizeObserver(updateIndicator);
		resizeObserver.observe(container);

		const mutationObserver = new MutationObserver(updateIndicator);
		mutationObserver.observe(container, { attributes: true, subtree: true });

		window.addEventListener('resize', updateIndicator);
		container.addEventListener('scroll', updateIndicator);

		return () => {
			resizeObserver.disconnect();
			mutationObserver.disconnect();
			window.removeEventListener('resize', updateIndicator);
			container.removeEventListener('scroll', updateIndicator);
		};
	}, [containerRef, activeSelector]);
};
