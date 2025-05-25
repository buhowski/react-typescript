import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import PageHelmet from '../../../config/PageHelmet';
import { startupsMetaTags } from '../../../components/metaTags';
import { useTabletLargeQuery } from '../../../config/useMediaQuery';
import PopupContacts from '../../../components/PopupContacts';
import Copyright from '../../../components/Copyright';
import PitchContainer from './PitchContainer';
import LanguageSwitcher from './LanguageSwitcher';
import StartupNavigation from './StartupNavigation';
import Slider from '../../../components/Slider';
import TableOfContent from './TableOfContent';
import { LanguageCode, PageProps, HeadingInfo, CollectedHeading } from '../../../types/common';

import '../Startups.scss';

const LANGUAGES: LanguageCode[] = ['en', 'ua', 'ru'];

// Helper function to get initial language
const getInitialLanguage = (textData: PageProps['textData'], availableLangs: LanguageCode[]) => {
	const storedLang = localStorage.getItem('currentLang') as LanguageCode | null;
	if (storedLang && textData?.[storedLang]?.length) {
		return storedLang;
	}
	return availableLangs.includes('ua') ? 'ua' : availableLangs[0] || 'en';
};

// Custom hook for scroll-based header activation
const useStickyHeader = () => {
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

// Custom hook for active heading tracking and TOC management
const useActiveHeadingTracking = (
	useTabletLarge: boolean,
	allHeadingsMapRef: React.MutableRefObject<Map<number, HeadingInfo[]>>
) => {
	const [activeHeadingId, setActiveHeadingId] = useState<string | null>(null);
	const [headingsVersion, setHeadingsVersion] = useState(0);

	// Callback to collect headings from each PitchContainer
	const handleHeadingsExtracted = useCallback(
		(pitchIndex: number, headings: CollectedHeading[]) => {
			// Store headings for this pitchIndex, preserving their order from MarkdownBlock
			allHeadingsMapRef.current.set(
				pitchIndex,
				headings.map((h) => ({ ...h, pitchIndex }))
			);
			setHeadingsVersion((prev) => prev + 1);
		},
		[allHeadingsMapRef]
	);

	// Derives a flattened, sorted array of all headings from the map
	const sortedHeadings = useMemo(() => {
		const combinedHeadings: HeadingInfo[] = [];
		// Sort pitch indices to ensure overall order
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
	}, [headingsVersion, allHeadingsMapRef]); // headingsVersion is a deliberate dependency to force re-computation

	// Tracks the active heading based on scroll position (desktop only)
	useEffect(() => {
		if (
			useTabletLarge ||
			!document.querySelector('.page-container') ||
			sortedHeadings.length === 0
		) {
			return;
		}

		const container = document.querySelector('.page-container') as HTMLElement;
		if (!container) return;

		const triggerOffset = 190;

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

	// Handles click on Table of Content item, scrolls to corresponding text title
	const handleTableOfContentSelect = useCallback((headingId: string) => {
		const targetElement = document.getElementById(headingId);
		const pageContainer = document.querySelector('.page-container');

		if (targetElement && pageContainer) {
			const containerTop = pageContainer.getBoundingClientRect().top;
			const targetTop = targetElement.getBoundingClientRect().top;
			const currentScrollTop = pageContainer.scrollTop;
			const scrollOffset = 80;
			const scrollTo = targetTop - containerTop + currentScrollTop - scrollOffset;

			pageContainer.scrollTo({
				top: scrollTo,
				behavior: 'smooth',
			});
		} else {
			console.warn(`Could not find element with ID: ${headingId}.`);
		}
	}, []);

	// Expose setHeadingsVersion for external triggers (like language change)
	return {
		activeHeadingId,
		handleHeadingsExtracted,
		handleTableOfContentSelect,
		sortedHeadings,
		setHeadingsVersion,
	};
};

const PageStructure: React.FC<PageProps> = ({ textData, tableOfContent = false }) => {
	const useTabletLarge = useTabletLargeQuery();
	const [currentLang, setCurrentLang] = useState<LanguageCode>('en');
	const [initialLangReady, setInitialLangReady] = useState(false); // New state to control rendering
	const pitchRefs = useRef<(HTMLDivElement | null)[]>([]);
	const allHeadingsMapRef = useRef<Map<number, HeadingInfo[]>>(new Map());

	const {
		activeHeadingId,
		handleHeadingsExtracted,
		handleTableOfContentSelect,
		sortedHeadings,
		setHeadingsVersion,
	} = useActiveHeadingTracking(useTabletLarge, allHeadingsMapRef);
	const isActive = useStickyHeader();

	const availableLangs = useMemo(
		() => LANGUAGES.filter((lang) => textData?.[lang]?.length > 0),
		[textData]
	);

	// Effect to determine and set the initial language
	useEffect(() => {
		const initialLang = getInitialLanguage(textData, availableLangs);
		setCurrentLang(initialLang);
		// Always clear and trigger re-collection to ensure fresh state on initial load
		allHeadingsMapRef.current.clear();
		setHeadingsVersion((prev) => prev + 1);
		// Mark initial language as ready after setup
		setInitialLangReady(true);
	}, [textData, availableLangs, allHeadingsMapRef, setHeadingsVersion]);

	const changeLanguage = useCallback(
		(lang: LanguageCode) => {
			if (textData?.[lang]?.length) {
				setCurrentLang(lang);
				localStorage.setItem('currentLang', lang);
				allHeadingsMapRef.current.clear(); // Clear all headings on language change
				setHeadingsVersion((prev) => prev + 1); // Trigger re-collection and TOC update
			}
		},
		[textData, allHeadingsMapRef, setHeadingsVersion]
	);

	const contentToRender = useMemo(() => {
		const currentLangContent = textData[currentLang] || [];
		const englishContent = textData.en || [];

		return currentLangContent.map((item, index) => {
			const englishItem = englishContent[index];
			return {
				...item,
				sliderContent: item.sliderContent || englishItem?.sliderContent,
				filmsPreviewUrl: item.filmsPreviewUrl || englishItem?.filmsPreviewUrl,
			};
		});
	}, [textData, currentLang]);

	const desktopSliderContent = useMemo(() => {
		return textData.en?.[0]?.sliderContent || [];
	}, [textData.en]);

	if (!contentToRender.length) return null;

	return (
		<>
			<PageHelmet metaTags={startupsMetaTags} />

			<div className={`startup-action ${isActive ? 'is-active' : ''}`}>
				<StartupNavigation />
			</div>

			<div className='wrapper wrapper--idea'>
				<div className='idea-section'>
					<div className='idea-info'>
						{/* Conditionally render PitchContainers only when initial language is ready */}
						{initialLangReady &&
							contentToRender.map((structure, index) => {
								const fallbackFilmsPreview = textData.en?.[index]?.filmsPreviewUrl;

								return (
									<PitchContainer
										key={index} // Removed dynamic key to prevent content jumps
										index={index}
										ref={(el) => (pitchRefs.current[index] = el)}
										structure={{
											...structure,
											filmsPreviewUrl: structure.filmsPreviewUrl || fallbackFilmsPreview,
										}}
										currentLanguage={currentLang}
										sliderContent={structure.sliderContent}
										onHeadingsExtracted={handleHeadingsExtracted}
									/>
								);
							})}

						{useTabletLarge && <Copyright />}

						<div className='copy-tablet'>
							{useTabletLarge && <PopupContacts currentLanguage={currentLang} />}
						</div>
					</div>

					<div className='lang-sidebar'>
						<LanguageSwitcher
							currentLang={currentLang}
							availableLangs={availableLangs}
							changeLanguage={changeLanguage}
						/>

						{tableOfContent && (
							<TableOfContent
								activeHeadingId={activeHeadingId}
								onSelectIndex={handleTableOfContentSelect}
								headings={sortedHeadings}
							/>
						)}

						<div className='desktop-slider'>
							{!useTabletLarge && (
								<Slider slides={desktopSliderContent} currentLanguage={currentLang} />
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default React.memo(PageStructure);
