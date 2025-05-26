import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { HeadingInfo, CollectedHeading } from '../../../types/common';

export const useActiveHeadingTracking = (
	useTabletLarge: boolean,
	allHeadingsMapRef: React.MutableRefObject<Map<number, HeadingInfo[]>>
) => {
	const [activeHeadingId, setActiveHeadingId] = useState<string | null>(null);
	const [headingsVersion, setHeadingsVersion] = useState(0);

	// handleHeadingsExtracted
	const handleHeadingsExtracted = useCallback(
		(pitchIndex: number, headings: CollectedHeading[]) => {
			allHeadingsMapRef.current.set(
				pitchIndex,
				headings.map((h) => ({ ...h, pitchIndex }))
			);
			setHeadingsVersion((prev) => prev + 1);
		},
		[allHeadingsMapRef]
	);

	// sortedHeadings
	const sortedHeadings = useMemo(() => {
		const combinedHeadings: HeadingInfo[] = [];
		Array.from(allHeadingsMapRef.current.keys())
			.sort((a, b) => a - b)
			.forEach((pitchIndex) => {
				const headingsForPitch = allHeadingsMapRef.current.get(pitchIndex);
				if (headingsForPitch) {
					combinedHeadings.push(...headingsForPitch);
				}
			});
		return combinedHeadings;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [headingsVersion, allHeadingsMapRef]);

	// Tracks active heading
	useEffect(() => {
		if (!document.querySelector('.page-container') || sortedHeadings.length === 0) {
			return;
		}

		const container = document.querySelector('.page-container') as HTMLElement;
		if (!container) return;

		const triggerOffset = useTabletLarge ? 80 : 150;

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

	// Scrolls to TOC title
	const handleTableOfContentSelect = useCallback(
		(headingId: string) => {
			const targetElement = document.getElementById(headingId);
			const pageContainer = document.querySelector('.page-container');

			if (targetElement && pageContainer) {
				const scrollOffset = useTabletLarge ? 75 : 80;
				const containerTop = pageContainer.getBoundingClientRect().top;
				const targetTop = targetElement.getBoundingClientRect().top;
				const currentScrollTop = pageContainer.scrollTop;
				const scrollTo = targetTop - containerTop + currentScrollTop - scrollOffset;

				pageContainer.scrollTo({
					top: scrollTo,
					behavior: 'smooth',
				});
			} else {
				console.warn(`Could not find element with ID: ${headingId}.`);
			}
		},
		[useTabletLarge]
	);

	return {
		activeHeadingId,
		handleHeadingsExtracted,
		handleTableOfContentSelect,
		sortedHeadings,
		setHeadingsVersion,
	};
};
