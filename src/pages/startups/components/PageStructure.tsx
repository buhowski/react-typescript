import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { startupsMetaTags } from '../../../components/metaTags';
import { useTabletLargeQuery } from '../../../config/useMediaQuery';
import { LANGUAGES, getInitialLanguage } from '../helpers/languageHelpers';
import { useStickyHeader } from '../helpers/useStickyHeader';
import { useActiveHeadingTracking } from '../helpers/useActiveHeadingTracking';
import { PageProps, LanguageCode } from '../../../types/common';
import { VideoPlaybackProvider } from '../helpers/VideoPlaybackContext';
import PageHelmet from '../../../config/PageHelmet';
import PopupContacts from '../../../components/PopupContacts';
import Copyright from '../../../components/Copyright';
import PitchContainer from './PitchContainer';
import LanguageSwitcher from './LanguageSwitcher';
import StartupNavigation from './StartupNavigation';
import Slider from '../../../components/Slider';
import TableOfContent from './TableOfContent';
import { ArrowLeftIcon } from '../../../assets/svg/icons';

import '../Startups.scss';

interface PageStructureProps extends PageProps {
	initialLang?: LanguageCode;
}

const PageStructure: React.FC<PageStructureProps> = ({ pageData, backButton, initialLang }) => {
	const useTabletLarge = useTabletLargeQuery();

	// Group state variables and refs for better readability.
	const [currentLang, setCurrentLang] = useState<LanguageCode>(
		(initialLang as LanguageCode) ||
			getInitialLanguage(
				pageData,
				LANGUAGES.filter((lang) => pageData?.[lang]?.length > 0)
			)
	);
	const [initialLangReady, setInitialLangReady] = useState(false);
	const [currentDesktopSliderContent, setCurrentDesktopSliderContent] = useState<any[]>([]);
	const [canRenderFooter, setCanRenderFooter] = useState(false);

	const allHeadingsMapRef = useRef(new Map());
	const pitchRefs = useRef<(HTMLDivElement | null)[]>([]);
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
		() => LANGUAGES.filter((lang) => pageData?.[lang]?.length > 0),
		[pageData]
	);

	// Unified language initialization and update logic.
	useEffect(() => {
		const storedLang = localStorage.getItem('currentLang') || null;
		const newLang =
			initialLang || storedLang || getInitialLanguage(pageData, availableLangs) || 'en';

		if (newLang !== currentLang) {
			setCurrentLang(newLang as LanguageCode);
			localStorage.setItem('currentLang', newLang);
		}

		allHeadingsMapRef.current.clear();
		setHeadingsVersion((prev) => prev + 1);
		setInitialLangReady(true);
		isDesktopSliderContentInitialized.current = false;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initialLang, pageData, availableLangs, setHeadingsVersion]);

	const contentToRender = useMemo(() => {
		const currentLangContent = pageData[currentLang] || [];
		const englishContent = pageData.en || [];

		return currentLangContent.map((item, index) => {
			const englishItem = englishContent[index];
			return {
				...item,
				sliderContent: item.sliderContent || englishItem?.sliderContent,
				pagePreviewUrl: item.pagePreviewUrl || englishItem?.pagePreviewUrl,
			};
		});
	}, [pageData, currentLang]);

	// Update active PitchContainer's slider content on scroll
	const handleScrollUpdateSlider = useCallback(() => {
		const pageContainer = document.querySelector('.page-container');

		if (!pageContainer || !initialLangReady || !contentToRender.length) {
			return;
		}

		const containerTop = pageContainer.getBoundingClientRect().top;
		let scrollOffset = 200;

		let newActivePitchIndex = 0;

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
		setCurrentDesktopSliderContent((prevContent) => {
			if (JSON.stringify(newSliderContent) !== JSON.stringify(prevContent)) {
				return newSliderContent;
			}
			return prevContent;
		});
	}, [initialLangReady, contentToRender]);

	// Attach scroll listener and handle initial slider content
	useEffect(() => {
		const pageContainer = document.querySelector('.page-container');
		if (!pageContainer) return;

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
			if (pageData?.[lang]?.length) {
				setCurrentLang(lang);
				localStorage.setItem('currentLang', lang);
				allHeadingsMapRef.current.clear();
				setHeadingsVersion((prev) => prev + 1);
			}
		},
		[pageData, allHeadingsMapRef, setHeadingsVersion]
	);

	// Delayed footer render after content and language are ready
	useEffect(() => {
		if (useTabletLarge && initialLangReady && contentToRender.length > 0) {
			const timer = setTimeout(() => setCanRenderFooter(true), 1000);
			return () => clearTimeout(timer);
		}
	}, [initialLangReady, contentToRender, useTabletLarge]);

	// Set document language based on current language
	useEffect(() => {
		document.documentElement.lang = currentLang;
	}, [currentLang]);

	return (
		<VideoPlaybackProvider>
			<PageHelmet metaTags={startupsMetaTags} />

			<LanguageSwitcher
				currentLang={currentLang}
				availableLangs={availableLangs}
				changeLanguage={changeLanguage}
			/>

			<div className={`startup-action ${isActive ? 'is-active' : ''}`}>
				<div className='wrapper'>
					{/* back navigation */}
					{backButton && (
						<NavLink to={backButton} className='idea-back'>
							{ArrowLeftIcon}
							<span>Back</span>
						</NavLink>
					)}
				</div>

				<StartupNavigation />
			</div>

			<div className='wrapper wrapper--idea'>
				<div className='idea-section'>
					<div className='idea-info'>
						{initialLangReady &&
							contentToRender.map((structure, index) => {
								const fallbackFilmsPreview = pageData.en?.[index]?.pagePreviewUrl;
								return (
									<PitchContainer
										key={index}
										index={index}
										ref={(el) => (pitchRefs.current[index] = el)}
										structure={{
											...structure,
											pagePreviewUrl: structure.pagePreviewUrl || fallbackFilmsPreview,
										}}
										currentLanguage={currentLang}
										sliderContent={structure.sliderContent}
										onHeadingsExtracted={handleHeadingsExtracted}
									/>
								);
							})}
						{useTabletLarge && (
							<div className='copy-tablet'>
								{canRenderFooter && <Copyright />}
								<PopupContacts />
							</div>
						)}
					</div>
					<div className={`lang-sidebar ${'lang-sidebar--has-toc'}`}>
						<TableOfContent
							activeHeadingId={activeHeadingId}
							onSelectIndex={handleTableOfContentSelect}
							headings={sortedHeadings}
						/>
						<div className='desktop-slider'>
							{!useTabletLarge && (
								<Slider slides={currentDesktopSliderContent} currentLanguage={currentLang} />
							)}
						</div>
					</div>
				</div>
			</div>
		</VideoPlaybackProvider>
	);
};

export default React.memo(PageStructure);
