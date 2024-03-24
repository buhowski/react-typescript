import React, { useState, useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import { NavLink } from 'react-router-dom';
import { useTabletLargeQuery } from '../../../hooks/useMediaQuery';

import '../Startups.scss';

import PopupContacts from '../../../components/PopupContacts';
import Copyright from '../../../components/Copyright';
import { startupsNav } from '../data/startupsNav';
import { Block } from '../data/textTypes';
import { Text, Subtitle, Title, List, SubtitleBig, LastWords } from './IdeaElements';

// Define interfaces for better type safety
interface TextStructure {
	section: Block[];
	lastWords: string;
}

interface PageProps {
	title: string;
	textData: TextStructure[];
	Slider: JSX.Element;
}

const PageStructure: React.FC<PageProps> = ({ title, textData, Slider }) => {
	const useTabletLarge = useTabletLargeQuery();
	const [currentTab, setCurrentTab] = useState<string>('');

	// Function to render text section
	const renderTextSection = (structure: TextStructure) => {
		return structure.section.map((block: Block, blockIndex) => (
			<div className='idea-block' key={blockIndex}>
				{block.titleBig && (
					<Title titleClassname='idea-block__titleBig' title={block.titleBig} />
				)}

				{block.subtitleBig && <SubtitleBig subtitleBig={block.subtitleBig} />}

				{block.title && (
					<Title titleClassname='idea-block__title' title={block.title} />
				)}

				{block.text && <Text text={block.text} />}

				{block.subtitle && <Subtitle subtitle={block.subtitle} />}

				{block.list && <List items={block.list} />}

				{block.subtitle2 && <Subtitle subtitle={block.subtitle2} />}

				{block.list2 && <List items={block.list2} />}

				{block.subtitle3 && <Subtitle subtitle={block.subtitle3} />}

				{block.text2 && <Text text={block.text2} />}

				{block.subtitle4 && <Subtitle subtitle={block.subtitle4} />}

				{block.text3 && <Text text={block.text3} />}
			</div>
		));
	};

	// Render text items
	const renderTextItems = () => {
		return textData.map((structure: TextStructure, index) => (
			<div key={index}>
				{renderTextSection(structure)}

				<LastWords lastWords={structure.lastWords} />

				{useTabletLarge && <Copyright />}
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
			id: '3',
			title: 'ua',
			content: renderTextItems()[2],
		},
		{
			id: '2',
			title: 'ru',
			content: renderTextItems()[0],
		},
	];

	// Handle tab click using localStorage for persistence
	useEffect(() => {
		const currentIndex = localStorage.getItem('currentIndex');
		setCurrentTab(currentIndex ? currentIndex : '1');
	}, []);

	return (
		<div className='wrapper wrapper--idea'>
			<div className='idea-tabs idea-tabs--urls'>
				{startupsNav.map(({ pageLink, pageName }, i) => (
					<NavLink to={pageLink} end className={`idea-tabs__btn`} key={i}>
						{pageName}
					</NavLink>
				))}
			</div>

			<div className='idea-section'>
				{/* contacts info */}
				{useTabletLarge && <PopupContacts />}

				<div className='idea-info'>
					{title && <h1 className='startup-title'>{title}</h1>}

					{/* language tabs */}
					<div className='idea-tabs idea-tabs--lang'>
						{/* Here goes tab items*/}
						{tabs.map((tab) => (
							<button
								className={`idea-tabs__btn ${currentTab === tab.id ? 'active' : ''}`}
								key={tab.id}
								onClick={() => handleTabClick(tab.id)}
							>
								{tab.title}
							</button>
						))}
					</div>

					{/* Tabs content */}
					{useTabletLarge ? (
						tabs.map((tab) => (
							<div key={tab.id} className='idea-content'>
								{currentTab === tab.id && tab.content}
							</div>
						))
					) : (
						// For Desktop custom scrollbar
						<SimpleBar
							style={{ height: '100%', paddingRight: '35px' }}
							autoHide={false}
						>
							{tabs.map((tab) => (
								<div key={tab.id} className='idea-content'>
									{currentTab === tab.id && tab.content}
								</div>
							))}
						</SimpleBar>
					)}
				</div>

				{/* Desktop Slider */}
				{Slider}
			</div>
		</div>
	);
};

export default PageStructure;
