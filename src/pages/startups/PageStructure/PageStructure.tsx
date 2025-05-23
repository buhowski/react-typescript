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
import { LanguageCode, SlideItem } from '../../../types/common';

import '../Startups.scss';

interface TextDataItem {
	markdownAPI?: string;
	filmsPreviewUrl?: string;
	sliderContent?: SlideItem[];
}

// Props for the PageStructure component
interface PageProps {
	textData: Record<LanguageCode, TextDataItem[]>;
	tableOfContent?: boolean;
}

const LANGUAGES: LanguageCode[] = ['en', 'ua', 'ru'];

// Main component for structuring startup pages
const PageStructure: React.FC<PageProps> = ({ textData, tableOfContent = false }) => {
	const useTabletLarge = useTabletLargeQuery();
	const [currentLang, setCurrentLang] = useState<LanguageCode>('en');
	const [isActive, setIsActive] = useState(false);
	const [activePitchIndex, setActivePitchIndex] = useState(0);
	const [activeTextIndex, setActiveTextIndex] = useState(0);
	const pitchRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Filters for languages that have content available
	const availableLangs = useMemo(
		() => LANGUAGES.filter((lang) => textData?.[lang]?.length > 0),
		[textData]
	);

	// Initializes current language from localStorage or falls back
	useEffect(() => {
		const storedLang = localStorage.getItem('currentLang') as LanguageCode | null;
		const initialLang =
			storedLang && textData?.[storedLang]?.length
				? storedLang
				: availableLangs.includes('ua')
				? 'ua'
				: availableLangs[0] || 'en';
		setCurrentLang(initialLang);
	}, [textData, availableLangs]);

	// Handles changing the active language
	const changeLanguage = useCallback(
		(lang: LanguageCode) => {
			if (textData?.[lang]?.length) {
				setCurrentLang(lang);
				localStorage.setItem('currentLang', lang);
			}
		},
		[textData]
	);

	// Manages 'isActive' state for the sticky header based on scroll position
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

	// Determines content to render based on current language, with English fallback
	const contentToRender = useMemo(() => {
		const currentLangContent = textData[currentLang] || [];
		const englishContent = textData.en || [];

		// Map over the current language content (or its fallback)
		return currentLangContent.map((item, index) => {
			const englishItem = englishContent[index];

			return {
				...item,
				sliderContent: item.sliderContent || englishItem?.sliderContent,
				filmsPreviewUrl: item.filmsPreviewUrl || englishItem?.filmsPreviewUrl,
			};
		});
	}, [textData, currentLang]);

	// Tracks the active pitch section based on scroll position (desktop only)
	useEffect(() => {
		if (useTabletLarge || pitchRefs.current.length === 0) return;

		const container = document.querySelector('.page-container');
		if (!container) return;

		const triggerOffset = 140;

		const handleScroll = () => {
			const containerTop = container.getBoundingClientRect().top;
			let newActiveIndex = 0;
			for (let i = 0; i < pitchRefs.current.length; i++) {
				const ref = pitchRefs.current[i];
				if (!ref) continue;
				const topRelativeToContainer = ref.getBoundingClientRect().top - containerTop;

				if (topRelativeToContainer <= triggerOffset) {
					newActiveIndex = i;
				}
			}
			setActivePitchIndex(newActiveIndex);
			setActiveTextIndex(newActiveIndex);
		};

		container.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		return () => container.removeEventListener('scroll', handleScroll);
	}, [useTabletLarge, contentToRender]);

	// Handles click on Table of Content item, scrolls to corresponding pitch section
	const handleTableOfContentSelect = useCallback((index: number) => {
		const targetPitch = pitchRefs.current[index];

		if (targetPitch) {
			const pageContainer = document.querySelector('.page-container');

			if (pageContainer) {
				const containerTop = pageContainer.getBoundingClientRect().top;
				const targetTop = targetPitch.getBoundingClientRect().top;
				const currentScrollTop = pageContainer.scrollTop;
				const scrollOffset = 80;
				let scrollTo = targetTop - containerTop + currentScrollTop;
				scrollTo -= scrollOffset;

				pageContainer.scrollTo({
					top: scrollTo,
					behavior: 'smooth',
				});
			}
		}
	}, []);

	// const desktopSliderData = useMemo(() => {
	// 	return {
	// 		en: [
	// 			// Hardcoding to 'en' key for the desktop slider makes it stable.
	// 			{
	// 				sliderContent: textData.en?.[activePitchIndex]?.sliderContent || [],
	// 			},
	// 		],
	// 	};
	// }, [textData.en, activePitchIndex]);
	const desktopSliderData = useMemo(() => {
		return {
			[currentLang]: [
				{
					sliderContent: contentToRender[activePitchIndex]?.sliderContent || [],
				},
			],
		};
	}, [contentToRender, currentLang, activePitchIndex]);

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
						{contentToRender.map((structure, index) => {
							const fallbackFilmsPreview = textData.en?.[index]?.filmsPreviewUrl;

							return (
								<PitchContainer
									key={index}
									structure={{
										...structure,
										filmsPreviewUrl: structure.filmsPreviewUrl || fallbackFilmsPreview,
									}}
									index={index}
									currentLanguage={currentLang}
									sliderContent={structure.sliderContent}
									ref={(el) => (pitchRefs.current[index] = el)}
								/>
							);
						})}

						{/* Renders copyright/contacts based on tablet/large screen query */}
						{useTabletLarge && <Copyright />}
						<div className='copy-tablet'>{useTabletLarge && <PopupContacts />}</div>
					</div>

					<div className='lang-sidebar'>
						<LanguageSwitcher
							currentLang={currentLang}
							availableLangs={availableLangs}
							changeLanguage={changeLanguage}
						/>

						{/* Renders Table of Content if enabled and multiple sections exist */}
						{tableOfContent && contentToRender.length > 1 && (
							<TableOfContent
								contentLength={contentToRender.length}
								activeIndex={activeTextIndex}
								onSelectIndex={handleTableOfContentSelect}
							/>
						)}

						<div className='desktop-slider'>
							{/* Renders main Slider for desktop, showing only the active pitch's content */}
							{!useTabletLarge && (
								<Slider dataSlider={desktopSliderData} currentLanguage={currentLang} isActive={0} />
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default React.memo(PageStructure);
