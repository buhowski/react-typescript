import React, { useLayoutEffect, useRef } from 'react';
import { LanguageSwitcherProps } from '../../../types/common';

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
	currentLang,
	availableLangs,
	changeLanguage,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		// Update the CSS variables for the background indicator
		const updateIndicator = () => {
			const activeBtn = container.querySelector<HTMLElement>('.idea-lang__btn.active');

			if (activeBtn) {
				container.style.setProperty('--indicator-left', `${activeBtn.offsetLeft}px`);
				container.style.setProperty('--indicator-width', `${activeBtn.offsetWidth}px`);
			}
		};

		// Initial calculation after render
		updateIndicator();

		// Observe size changes of the container or buttons
		const resizeObserver = new ResizeObserver(updateIndicator);
		resizeObserver.observe(container);

		// Handle window resize as a secondary fallback
		window.addEventListener('resize', updateIndicator);

		return () => {
			resizeObserver.disconnect();
			window.removeEventListener('resize', updateIndicator);
		};
	}, [currentLang, availableLangs]);

	return (
		<div className='idea-lang' ref={containerRef}>
			{availableLangs.map((lang) => (
				<button
					key={lang}
					onClick={() => changeLanguage(lang)}
					className={`idea-lang__btn ${currentLang === lang ? 'active' : ''}`}
				>
					{lang.toUpperCase()}
				</button>
			))}
		</div>
	);
};

export default LanguageSwitcher;
