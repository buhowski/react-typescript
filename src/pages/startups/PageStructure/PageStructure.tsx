import React, { useState, useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { startupsMetaTags } from '../../../config/metaTags';
import { useTabletLargeQuery } from '../../../hooks/useMediaQuery';

import '../Startups.scss';

import PopupContacts from '../../../components/PopupContacts';
import Copyright from '../../../components/Copyright';
import { startupsNav } from '../data/startupsNav';
import { Block } from '../data/textTypes';
import {
	Headline,
	Title,
	PitchInfo,
	Text,
	Subtitle,
	List,
	LastWords,
} from './IdeaElements';

interface TextStructure {
	section: Block[];
	headline?: Block[];
	lastWords: string;
}

interface PageProps {
	title: string;
	textData: TextStructure[];
	Slider: JSX.Element;

	pageClassName?: string;
	langDisable?: string;
}

const PageStructure: React.FC<PageProps> = ({
	title,
	textData,
	Slider,
	pageClassName,
	langDisable,
}) => {
	const useTabletLarge = useTabletLargeQuery();
	const [currentTab, setCurrentTab] = useState<string>('');

	// Render text items
	const renderTextItems = () => {
		return textData.map((structure: TextStructure, index) => (
			<div key={index} className='pitch-container'>
				{/* Text Section */}
				{structure.section.map((block: Block, blockIndex) => (
					<div className='idea-block' key={blockIndex}>
						{block.pitchTitle && (
							<Headline pitchNumber={block.pitchNumber} pitchTitle={block.pitchTitle} />
						)}

						{block.pitchInfo && <PitchInfo pitchInfo={block.pitchInfo} />}

						{block.loglineTitle && (
							<Title titleClassname='idea-block__title' title={block.loglineTitle} />
						)}
						{block.loglineText && <Text text={block.loglineText} />}
						{useTabletLarge && blockIndex === 0 && Slider}

						{block.title && (
							<Title titleClassname='idea-block__title' title={block.title} />
						)}

						{block.text && <Text text={block.text} />}

						{block.subtitle && <Subtitle subtitle={block.subtitle} />}

						{block.list && <List listItems={block.list} />}

						{block.subtitle2 && <Subtitle subtitle={block.subtitle2} />}

						{block.list2 && <List listItems={block.list2} />}

						{block.text2 && <Text text={block.text2} />}

						{/* Films  */}
						{block.character01Title && <Subtitle subtitle={block.character01Title} />}
						{block.charackter01List && <List listItems={block.charackter01List} />}

						{block.character02Title && <Subtitle subtitle={block.character02Title} />}
						{block.charackter02List && <List listItems={block.charackter02List} />}

						{block.character03Title && <Subtitle subtitle={block.character03Title} />}
						{block.charackter03List && <List listItems={block.charackter03List} />}

						{block.character04Title && <Subtitle subtitle={block.character04Title} />}
						{block.charackter04List && <List listItems={block.charackter04List} />}

						{block.character05Title && <Subtitle subtitle={block.character05Title} />}
						{block.charackter05List && <List listItems={block.charackter05List} />}

						{block.character06Title && <Subtitle subtitle={block.character06Title} />}
						{block.charackter06List && <List listItems={block.charackter06List} />}
					</div>
				))}

				<LastWords lastWords={structure.lastWords} />

				{useTabletLarge && <Copyright />}

				{/* contacts info */}
				<div className='copy-tablet'>{useTabletLarge && <PopupContacts />}</div>
			</div>
		));
	};

	// Handle tab click using localStorage for persistence
	const handleTabClick = (tabId: string) => {
		setCurrentTab(tabId);
		localStorage.setItem('currentIndex', tabId);
	};

	// Tabs with pre-defined content
	const tabs = [
		{
			id: '1',
			title: 'en',
			content: renderTextItems()[1],
		},
		{
			id: '2',
			title: 'ua',
			content: renderTextItems()[2],
		},
		{
			id: '3',
			title: 'ru',
			content: renderTextItems()[0],
		},
	];

	// Handle tab click using localStorage for persistence
	useEffect(() => {
		try {
			const currentIndex = localStorage.getItem('currentIndex');
			setCurrentTab(currentIndex ? currentIndex : '1');
		} catch (error) {
			// Handle error as needed (e.g., set a default tab index)
			console.error('Error retrieving currentIndex from localStorage:', error);

			handleTabClick('1');
		}

		if (langDisable && currentTab === '3') {
			handleTabClick('1');
		}
	}, [currentTab, langDisable]);

	return (
		<div className={`wrapper wrapper--idea ${pageClassName} ${langDisable}`}>
			<Helmet>
				<title>{startupsMetaTags.title}</title>
				<meta name='description' content={startupsMetaTags.description} />

				{/* Open Graph Meta Tags */}
				<meta property='og:url' content={startupsMetaTags.ogUrl} />
				<meta property='og:title' content={startupsMetaTags.ogTitle} />
				<meta property='og:description' content={startupsMetaTags.ogDescription} />
				<meta property='og:image' content={startupsMetaTags.ogImage} />

				{/* Twitter Meta Tags */}
				<meta property='twitter:url' content={startupsMetaTags.ogUrl} />
				<meta name='twitter:title' content={startupsMetaTags.ogTitle} />
				<meta name='twitter:description' content={startupsMetaTags.ogDescription} />
				<meta name='twitter:image' content={startupsMetaTags.ogImage} />
			</Helmet>

			<div className='startup-action'>
				<div className='idea-tabs idea-tabs--urls'>
					{startupsNav.map(({ pageLink, pageName }, i) => (
						<NavLink to={pageLink} end className={`idea-tabs__btn`} key={i}>
							{pageName}
						</NavLink>
					))}
				</div>
			</div>

			<div className='idea-section'>
				<div className='idea-info'>
					{useTabletLarge && title && <h1 className='startup-title h2'>{title}</h1>}

					{/* language tabs */}
					<div className='idea-tabs idea-tabs--lang'>
						{/* Here goes tab items*/}
						{tabs.map((tab) => (
							<button
								className={`idea-tabs__btn ${tab.title} ${
									currentTab === tab.id ? 'active' : ''
								}`}
								key={tab.id}
								onClick={() => handleTabClick(tab.id)}
							>
								{tab.title}
							</button>
						))}
					</div>

					{/* Tabs content */}
					{useTabletLarge ? (
						<>
							{tabs.map((tab) => (
								<div key={tab.id} className='idea-content'>
									{currentTab === tab.id && tab.content}
								</div>
							))}
						</>
					) : (
						// For Desktop custom scrollbar
						<SimpleBar
							style={{ height: '100%', paddingRight: '40px' }}
							autoHide={false}
						>
							{title && <h1 className='startup-title h2'>{title}</h1>}

							{tabs.map((tab) => (
								<div key={tab.id} className='idea-content'>
									{currentTab === tab.id && tab.content}
								</div>
							))}
						</SimpleBar>
					)}
				</div>

				{/* Desktop Slider */}
				<div className='desktop-slider'>{!useTabletLarge && Slider}</div>
			</div>
		</div>
	);
};

export default PageStructure;
