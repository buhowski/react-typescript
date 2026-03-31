import { useState, useEffect, useMemo, useCallback } from 'react';
import { HeadingInfo, CollectedHeading } from '../../../types/common';

const showReloadAlert = (): void => {
	alert('Page will reload due to resolution change.\nStay Cool 😎 [Rock ’n’ Roll]');
	window.location.reload();
};

export const useActiveHeadingTracking = (
	useTabletLarge: boolean,
	allHeadingsMapRef: React.MutableRefObject<Map<number, HeadingInfo[]>>,
) => {
	const [activeHeadingId, setActiveHeadingId] = useState<string | null>(null);
	const [headingsVersion, setHeadingsVersion] = useState(0);

	// Extract headings data
	const handleHeadingsExtracted = useCallback(
		(pitchIndex: number, headings: CollectedHeading[]) => {
			allHeadingsMapRef.current.set(
				pitchIndex,
				headings.map((h) => ({ ...h, pitchIndex })),
			);
			setHeadingsVersion((prev) => prev + 1);
		},
		[allHeadingsMapRef],
	);

	// Sort headings by index
	const sortedHeadings = useMemo(() => {
		const combinedHeadings: HeadingInfo[] = [];
		Array.from(allHeadingsMapRef.current.keys())
			.sort((a, b) => a - b)
			.forEach((pitchIndex) => {
				const headingsForPitch = allHeadingsMapRef.current.get(pitchIndex);
				if (headingsForPitch) combinedHeadings.push(...headingsForPitch);
			});
		return combinedHeadings;

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [headingsVersion, allHeadingsMapRef]);

	// Track scroll position
	useEffect(() => {
		if (sortedHeadings.length === 0) return;

		const triggerOffset = useTabletLarge ? 95 : 150;

		const handleScroll = () => {
			let currentActiveId: string | null = null;

			for (const heading of sortedHeadings) {
				const element = document.getElementById(heading.id);

				if (element) {
					const rect = element.getBoundingClientRect();

					if (rect.top <= triggerOffset) {
						currentActiveId = heading.id;
					} else {
						break;
					}
				}
			}

			setActiveHeadingId(currentActiveId);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, [useTabletLarge, sortedHeadings]);

	// Custom fast smooth scroll
	const animateScroll = useCallback((targetY: number, duration: number) => {
		const startY = window.scrollY || document.documentElement.scrollTop;
		const diff = targetY - startY;
		let startTime: number | null = null;

		const step = (currentTime: number) => {
			if (!startTime) startTime = currentTime;
			const progress = currentTime - startTime;
			const percent = Math.min(progress / duration, 1);
			const easing = 1 - Math.pow(1 - percent, 3); // easeOutCubic

			window.scrollTo(0, startY + diff * easing);

			if (progress < duration) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}, []);

	// Handle TOC selection
	const handleTableOfContentSelect = useCallback(
		(headingId: string) => {
			const targetElement = document.getElementById(headingId);

			if (targetElement) {
				const scrollOffset = useTabletLarge ? 80 : 90;
				// rect.top + current scroll = absolute position in document
				const targetTop = targetElement.getBoundingClientRect().top + window.scrollY;
				const scrollTo = targetTop - scrollOffset;

				animateScroll(scrollTo, 400);
			} else {
				console.warn(`Missing ID: ${headingId}`);
				showReloadAlert();
			}
		},
		[useTabletLarge, animateScroll],
	);

	return {
		activeHeadingId,
		handleHeadingsExtracted,
		handleTableOfContentSelect,
		sortedHeadings,
		setHeadingsVersion,
	};
};
