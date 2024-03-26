import React, { useState, useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import { NavLink } from 'react-router-dom';
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

						{block.pitchFormatTitle && <Subtitle subtitle={block.pitchFormatTitle} />}

						{block.pitchFormatText && <Text text={block.pitchFormatText} />}

						{block.pitchInfo && <PitchInfo pitchInfo={block.pitchInfo} />}

						{useTabletLarge && blockIndex === 0 && Slider}

						{block.title && (
							<Title titleClassname='idea-block__title' title={block.title} />
						)}

						{block.text && <Text text={block.text} />}

						{block.subtitle && <Subtitle subtitle={block.subtitle} />}

						{block.list && <List listItems={block.list} />}

						{block.subtitle2 && <Subtitle subtitle={block.subtitle2} />}

						{block.list2 && <List listItems={block.list2} />}

						{block.subtitle3 && <Subtitle subtitle={block.subtitle3} />}

						{block.text2 && <Text text={block.text2} />}

						{block.subtitle4 && <Subtitle subtitle={block.subtitle4} />}

						{block.text3 && <Text text={block.text3} />}
					</div>
				))}

				<LastWords lastWords={structure.lastWords} />

				{useTabletLarge && <Copyright />}

				{/* contacts info */}
				<div className='copy-tablet'>{useTabletLarge && <PopupContacts />}</div>
			</div>
		));
		// return textData.map((structure: TextStructure, index) => (
		// 	<div key={index} className='pitch-container'>
		// 		{/* Text Section */}
		// 		{structure.section.map((block: Block, blockIndex) => (
		// 			<div className='idea-block' key={blockIndex}>
		// 				{block.pitchTitle && (
		// 					<Headline pitchNumber={block.pitchNumber} pitchTitle={block.pitchTitle} />
		// 				)}

		// 				{block.pitchFormatTitle && <Subtitle subtitle={block.pitchFormatTitle} />}

		// 				{block.pitchFormatText && <Text text={block.pitchFormatText} />}

		// 				{block.pitchInfo && <PitchInfo pitchInfo={block.pitchInfo} />}

		// 				{useTabletLarge && blockIndex === 0 && Slider}

		// 				{block.title && (
		// 					<Title titleClassname='idea-block__title' title={block.title} />
		// 				)}

		// 				{block.text && <Text text={block.text} />}

		// 				{block.subtitle && <Subtitle subtitle={block.subtitle} />}

		// 				{block.list && <List listItems={block.list} />}

		// 				{block.subtitle2 && <Subtitle subtitle={block.subtitle2} />}

		// 				{block.list2 && <List listItems={block.list2} />}

		// 				{block.subtitle3 && <Subtitle subtitle={block.subtitle3} />}

		// 				{block.text2 && <Text text={block.text2} />}

		// 				{block.subtitle4 && <Subtitle subtitle={block.subtitle4} />}

		// 				{block.text3 && <Text text={block.text3} />}
		// 			</div>
		// 		))}

		// 		<LastWords lastWords={structure.lastWords} />

		// 		{useTabletLarge && <Copyright />}

		// 		{/* contacts info */}
		// 		<div className='copy-tablet'>{useTabletLarge && <PopupContacts />}</div>
		// 	</div>
		// ));
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
			handleTabClick('2');
		}
	}, [currentTab, langDisable]);

	return (
		<div className={`wrapper wrapper--idea ${pageClassName} ${langDisable}`}>
			<div className='idea-tabs idea-tabs--urls'>
				{startupsNav.map(({ pageLink, pageName }, i) => (
					<NavLink to={pageLink} end className={`idea-tabs__btn`} key={i}>
						{pageName}
					</NavLink>
				))}
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
							style={{ height: '100%', paddingRight: '30px' }}
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
