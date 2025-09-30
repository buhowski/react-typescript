// PageStructure.tsx
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useTabletLargeQuery } from '../../../config/useMediaQuery';
import { getInitialLanguage } from '../helpers/languageHelper';
import { useStickyHeader } from '../helpers/useStickyHeader';
import { useActiveHeadingTracking } from '../helpers/useActiveHeadingTracking';
import { VideoPlaybackProvider } from '../helpers/VideoPlaybackContext';
import PopupContacts from '../../../components/PopupContacts';
import Copyright from '../../../components/Copyright';
import PitchContainer from './PitchContainer';
import LanguageSwitcher from './LanguageSwitcher';
import StartupNavigation from './StartupNavigation';
import Slider from '../../../components/Slider';
import TableOfContent from './TableOfContent';
import { SinglePageProps, LANGUAGES, LanguageCode, htmlLangMap } from '../../../types/common';
import BackButton from './BackButton';
import '../Startups.scss';

const PageStructure: React.FC<SinglePageProps> = ({ pageData, backButton, initialLang }) => {
	const useTabletLarge = useTabletLargeQuery();
	const isActive = useStickyHeader();

	const [initialLangReady, setInitialLangReady] = useState(false);
	const [currentDesktopSliderContent, setCurrentDesktopSliderContent] = useState<any[]>([]);
	const [canRenderCopyright, setCanRenderCopyright] = useState(false);
	const [pitchContainersLoading, setPitchContainersLoading] = useState<Record<number, boolean>>({});

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

	// Language setup
	const [currentLang, setCurrentLang] = useState<LanguageCode>(initialLang || 'ua');
	const availableLangs = useMemo(
		() => [...LANGUAGES].filter((lang) => pageData?.[lang]?.length),
		[pageData]
	);

	useEffect(() => {
		const langToSet = initialLang || getInitialLanguage(pageData, availableLangs);
		localStorage.setItem('currentLang', langToSet);
		if (langToSet !== currentLang) setCurrentLang(langToSet);
		allHeadingsMapRef.current.clear();
		setHeadingsVersion((prev) => prev + 1);
		setInitialLangReady(true);
		isDesktopSliderContentInitialized.current = false;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initialLang, pageData, availableLangs, setHeadingsVersion]);

	useEffect(() => {
		document.documentElement.lang = htmlLangMap[currentLang];
	}, [currentLang]);

	const dispatchLanguageChange = (lang: LanguageCode) => {
		window.dispatchEvent(new CustomEvent('languageChange', { detail: { lang } }));
	};

	const changeLanguage = useCallback(
		(lang: LanguageCode) => {
			if (pageData?.[lang]?.length) {
				setCurrentLang(lang);
				localStorage.setItem('currentLang', lang);
				dispatchLanguageChange(lang);
				allHeadingsMapRef.current.clear();
				setHeadingsVersion((prev) => prev + 1);
			}
		},
		[pageData, allHeadingsMapRef, setHeadingsVersion]
	);

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

	useEffect(() => {
		const initialLoadingState: Record<number, boolean> = {};
		contentToRender.forEach((_, index) => (initialLoadingState[index] = true));
		setPitchContainersLoading(initialLoadingState);

		if (contentToRender.length === 0) setPitchContainersLoading({});
	}, [contentToRender]);

	const handleHeadingsExtractedWithLoading = useCallback(
		(index: number, headings: any[]) => {
			handleHeadingsExtracted(index, headings);
			setPitchContainersLoading((prev) => ({ ...prev, [index]: false }));
		},
		[handleHeadingsExtracted]
	);

	const isContentLoading = useMemo(
		() => Object.values(pitchContainersLoading).some((isLoading) => isLoading === true),
		[pitchContainersLoading]
	);

	const handleScrollUpdateSlider = useCallback(() => {
		const pageContainer = document.querySelector('.page-container');

		if (!pageContainer || !initialLangReady || !contentToRender.length) return;

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
		setCurrentDesktopSliderContent((prevContent) =>
			JSON.stringify(newSliderContent) !== JSON.stringify(prevContent)
				? newSliderContent
				: prevContent
		);
	}, [initialLangReady, contentToRender]);

	useEffect(() => {
		const pageContainer = document.querySelector('.page-container');
		if (!pageContainer) return;

		if (!isDesktopSliderContentInitialized.current && initialLangReady && contentToRender.length) {
			setCurrentDesktopSliderContent(contentToRender[0]?.sliderContent || []);
			isDesktopSliderContentInitialized.current = true;
		}

		pageContainer.addEventListener('scroll', handleScrollUpdateSlider, { passive: true });
		handleScrollUpdateSlider();

		return () => pageContainer.removeEventListener('scroll', handleScrollUpdateSlider);
	}, [handleScrollUpdateSlider, initialLangReady, contentToRender]);

	useEffect(() => {
		if (useTabletLarge && initialLangReady && contentToRender.length) {
			const timer = setTimeout(() => setCanRenderCopyright(true), 1000);

			return () => clearTimeout(timer);
		}
	}, [initialLangReady, contentToRender, useTabletLarge]);

	return (
		<VideoPlaybackProvider>
			<LanguageSwitcher
				currentLang={currentLang}
				availableLangs={availableLangs}
				changeLanguage={changeLanguage}
			/>

			<div className={`startup-action ${isActive ? 'is-active' : ''}`}>
				{!useTabletLarge && backButton && (
					<div className='wrapper'>
						<BackButton to={backButton} />
					</div>
				)}

				<StartupNavigation />
			</div>

			<div className='wrapper wrapper--idea'>
				<div className='idea-section'>
					<div className='idea-info' lang={htmlLangMap[currentLang]}>
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
										onHeadingsExtracted={handleHeadingsExtractedWithLoading}
									/>
								);
							})}

						{useTabletLarge && (
							<div className='copy-tablet'>
								{canRenderCopyright && <Copyright />}

								<PopupContacts />
							</div>
						)}
					</div>

					<div className={`lang-sidebar ${'lang-sidebar--has-toc'}`}>
						<TableOfContent
							activeHeadingId={activeHeadingId}
							onSelectIndex={handleTableOfContentSelect}
							headings={sortedHeadings}
							isLoadingContent={isContentLoading}
						/>

						<div className='desktop-slider'>
							{!useTabletLarge && (
								<Slider slides={currentDesktopSliderContent} currentLanguage={currentLang} />
							)}
						</div>
					</div>

					{useTabletLarge && backButton && <BackButton to={backButton} />}
				</div>
			</div>
		</VideoPlaybackProvider>
	);
};

export default React.memo(PageStructure);
