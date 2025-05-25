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

// Helper to get initial language
const getInitialLanguage = (textData: PageProps['textData'], availableLangs: LanguageCode[]) => {
	const storedLang = localStorage.getItem('currentLang') as LanguageCode | null;
	if (storedLang && textData?.[storedLang]?.length) {
		return storedLang;
	}
	return availableLangs.includes('ua') ? 'ua' : availableLangs[0] || 'en';
};

// Custom hook for sticky header
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

// Custom hook for active heading and TOC
const useActiveHeadingTracking = (
	useTabletLarge: boolean,
	allHeadingsMapRef: React.MutableRefObject<Map<number, HeadingInfo[]>>
) => {
	const [activeHeadingId, setActiveHeadingId] = useState<string | null>(null);
	const [headingsVersion, setHeadingsVersion] = useState(0);

	// Callback to collect headings
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

	// Derives sorted headings
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

	// Tracks active heading on scroll
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

		let triggerOffset = 190;

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
	const handleTableOfContentSelect = useCallback((headingId: string) => {
		const targetElement = document.getElementById(headingId);
		const pageContainer = document.querySelector('.page-container');

		if (targetElement && pageContainer) {
			const containerTop = pageContainer.getBoundingClientRect().top;
			const targetTop = targetElement.getBoundingClientRect().top;
			const currentScrollTop = pageContainer.scrollTop;
			let scrollOffset = 60;
			const scrollTo = targetTop - containerTop + currentScrollTop - scrollOffset;

			pageContainer.scrollTo({
				top: scrollTo,
				behavior: 'smooth',
			});
		} else {
			console.warn(`Could not find element with ID: ${headingId}.`);
		}
	}, []);

	// Exposes setHeadingsVersion
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
	const [initialLangReady, setInitialLangReady] = useState(false);
	const allHeadingsMapRef = useRef<Map<number, HeadingInfo[]>>(new Map());

	const pitchRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [currentDesktopSliderContent, setCurrentDesktopSliderContent] = useState<any[]>([]);

	// Tracks if desktop slider content is initialized
	const isDesktopSliderContentInitialized = useRef(false);

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

	// Effect for initial language setup
	useEffect(() => {
		const initialLang = getInitialLanguage(textData, availableLangs);
		setCurrentLang(initialLang);
		allHeadingsMapRef.current.clear();
		setHeadingsVersion((prev) => prev + 1);
		setInitialLangReady(true);
		isDesktopSliderContentInitialized.current = false;
	}, [textData, availableLangs, allHeadingsMapRef, setHeadingsVersion]);

	// Callback to update active PitchContainer's slider content on scroll
	const handleScrollUpdateSlider = useCallback(() => {
		const pageContainer = document.querySelector('.page-container');
		if (!pageContainer || !initialLangReady || !contentToRender.length) {
			return;
		}

		const containerTop = pageContainer.getBoundingClientRect().top;
		const scrollOffset = 150; // Offset from top of container

		let newActivePitchIndex: number = 0;

		for (let i = pitchRefs.current.length - 1; i >= 0; i--) {
			const pitchElement = pitchRefs.current[i];
			if (pitchElement) {
				const rect = pitchElement.getBoundingClientRect();
				if (rect.top <= containerTop + scrollOffset && rect.bottom > containerTop) {
					newActivePitchIndex = i;
					break;
				}
			}
		}

		const newSliderContent = contentToRender[newActivePitchIndex]?.sliderContent || [];

		// Use functional update to avoid currentDesktopSliderContent in useCallback deps
		setCurrentDesktopSliderContent((prevContent) => {
			if (JSON.stringify(newSliderContent) !== JSON.stringify(prevContent)) {
				return newSliderContent;
			}
			return prevContent;
		});
	}, [initialLangReady, contentToRender]);

	// Effect to attach scroll listener and handle initial slider content
	useEffect(() => {
		const pageContainer = document.querySelector('.page-container');
		if (!pageContainer) return;

		// Initialize slider content once
		if (
			!isDesktopSliderContentInitialized.current &&
			initialLangReady &&
			contentToRender.length > 0
		) {
			setCurrentDesktopSliderContent(contentToRender[0]?.sliderContent || []);
			isDesktopSliderContentInitialized.current = true;
		}

		pageContainer.addEventListener('scroll', handleScrollUpdateSlider, { passive: true });
		handleScrollUpdateSlider();

		return () => {
			pageContainer.removeEventListener('scroll', handleScrollUpdateSlider);
		};
	}, [handleScrollUpdateSlider, initialLangReady, contentToRender]);

	const changeLanguage = useCallback(
		(lang: LanguageCode) => {
			if (textData?.[lang]?.length) {
				setCurrentLang(lang);
				localStorage.setItem('currentLang', lang);
				allHeadingsMapRef.current.clear();
				setHeadingsVersion((prev) => prev + 1);
			}
		},
		[textData, allHeadingsMapRef, setHeadingsVersion]
	);

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
						{initialLangReady &&
							contentToRender.map((structure, index) => {
								const fallbackFilmsPreview = textData.en?.[index]?.filmsPreviewUrl;

								return (
									<PitchContainer
										key={index}
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

					<div className={`lang-sidebar ${tableOfContent ? 'lang-sidebar--has-toc' : ''}`}>
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
								<Slider slides={currentDesktopSliderContent} currentLanguage={currentLang} />
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default React.memo(PageStructure);
