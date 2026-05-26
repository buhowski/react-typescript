export const fastScrollTo = (targetY: number = 0, duration: number = 20): void => {
	const startY = window.pageYOffset || document.documentElement.scrollTop;
	const startTime = performance.now();
	const distance = startY - targetY;

	const animate = (currentTime: number) => {
		const elapsed = currentTime - startTime;
		const progress = Math.min(elapsed / duration, 1);
		const currentY = startY - distance * progress;

		window.scrollTo(0, currentY);

		if (progress < 1) {
			requestAnimationFrame(animate);
		} else {
			window.scrollTo(0, targetY);
		}
	};

	if (Math.abs(startY - targetY) > 0.5) {
		requestAnimationFrame(animate);
	}
};

export const toggleScrollLock = (isLocked: boolean): void => {
	document.documentElement.classList.toggle('is-locked', isLocked);
};
