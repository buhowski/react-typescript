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

	// Track scroll position for active ID
	useEffect(() => {
		const container = document.querySelector('.page-container') as HTMLElement;
		if (!container || sortedHeadings.length === 0) return;

		const triggerOffset = useTabletLarge ? 95 : 150;

		const handleScroll = () => {
			const containerTop = container.getBoundingClientRect().top;
			let newActiveHeadingId: string | null = null;
			let minDistance = Infinity;

			sortedHeadings.forEach((heading) => {
				const headingElement = document.getElementById(heading.id);
				if (headingElement) {
					const topRelativeToContainer = headingElement.getBoundingClientRect().top - containerTop;
					const distance = topRelativeToContainer - triggerOffset;
					if (distance <= 0 && Math.abs(distance) < Math.abs(minDistance)) {
						minDistance = distance;
						newActiveHeadingId = heading.id;
					}
				}
			});
			setActiveHeadingId(newActiveHeadingId);
		};

		container.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		return () => container.removeEventListener('scroll', handleScroll);
	}, [useTabletLarge, headingsVersion, sortedHeadings]);

	// Custom fast smooth scroll
	const animateScroll = useCallback((container: HTMLElement, targetY: number, duration: number) => {
		const startY = container.scrollTop;
		const diff = targetY - startY;
		let startTime: number | null = null;

		const step = (currentTime: number) => {
			if (!startTime) startTime = currentTime;
			const progress = currentTime - startTime;
			const percent = Math.min(progress / duration, 1);
			const easing = 1 - Math.pow(1 - percent, 3); // easeOutCubic

			container.scrollTop = startY + diff * easing;
			if (progress < duration) window.requestAnimationFrame(step);
		};
		window.requestAnimationFrame(step);
	}, []);

	// Handle TOC selection
	const handleTableOfContentSelect = useCallback(
		(headingId: string) => {
			const targetElement = document.getElementById(headingId);
			const pageContainer = document.querySelector('.page-container') as HTMLElement;

			if (targetElement && pageContainer) {
				const scrollOffset = useTabletLarge ? 80 : 86;
				const containerTop = pageContainer.getBoundingClientRect().top;
				const targetTop = targetElement.getBoundingClientRect().top;
				const currentScrollTop = pageContainer.scrollTop;
				const scrollTo = targetTop - containerTop + currentScrollTop - scrollOffset;

				// scroll speed animation
				animateScroll(pageContainer, scrollTo, 400);
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
