import React, { useLayoutEffect, useRef } from 'react';
import { LanguageSwitcherProps } from '../../../types/common';

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
	currentLang,
	availableLangs,
	changeLanguage,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (!containerRef.current) return;

		// Update indicator position and width
		const updateIndicator = () => {
			const activeBtn = containerRef.current?.querySelector<HTMLElement>('.idea-lang__btn.active');

			if (activeBtn && containerRef.current) {
				containerRef.current.style.setProperty('--indicator-left', `${activeBtn.offsetLeft}px`);
				containerRef.current.style.setProperty('--indicator-width', `${activeBtn.offsetWidth}px`);
			}
		};

		// Initial update
		requestAnimationFrame(updateIndicator);

		// Observe container changes
		const resizeObserver = new ResizeObserver(updateIndicator);
		resizeObserver.observe(containerRef.current);

		// Fallback: update on window resize
		window.addEventListener('resize', updateIndicator);

		return () => {
			resizeObserver.disconnect();
			window.removeEventListener('resize', updateIndicator);
		};
	}, [currentLang]);

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
