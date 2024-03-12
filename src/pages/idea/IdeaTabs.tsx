import React, { useState, useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import PopupContacts from './PopupContacts';
import SliderContainer from './Slider';
import { useTabletLargeQuery } from '../../hooks/useMediaQuery';

interface IdeaGeneralProps {
	IdeaTabRu: JSX.Element;
	IdeaTabEn: JSX.Element;
	IdeaTabUa: JSX.Element;
}

const IdeaGeneral = ({ IdeaTabRu, IdeaTabEn, IdeaTabUa }: IdeaGeneralProps) => {
	const useTabletLarge = useTabletLargeQuery();
	const [currentTab, setCurrentTab] = useState('');

	// Tabs content
	const tabs = [
		{
			id: '1',
			title: 'en',
			content: IdeaTabEn,
		},
		{
			id: '3',
			title: 'ua',
			content: IdeaTabUa,
		},
		{
			id: '2',
			title: 'ru',
			content: IdeaTabRu,
		},
	];

	const handleTabClick = (tabId: string) => {
		setCurrentTab(tabId);
		localStorage.setItem('currentIndex', tabId);
	};

	useEffect(() => {
		const currentIndex = localStorage.getItem('currentIndex');

		setCurrentTab(currentIndex ? currentIndex : '1');
	}, []);

	return (
		<div className='wrapper wrapper--idea'>
			<div className='idea-section'>
				{/* Get in touch contacts */}
				{useTabletLarge && <PopupContacts />}

				<div className='idea-info'>
					<div className='idea-tabs'>
						{/* Here goes tab items*/}
						{tabs.map((tab) => (
							<button
								className={`idea-tabs__btn ${currentTab === tab.id && 'active'}`}
								key={tab.id}
								onClick={() => handleTabClick(tab.id)}
							>
								{tab.title}
							</button>
						))}
					</div>

					{/* Here goes tabs content */}
					{useTabletLarge ? (
						tabs.map((tab) => (
							<div
								key={tab.id}
								data-tab-id={tab.id}
								className={`idea-content ${currentTab === tab.id ? 'active' : ''}`}
							>
								{tab.content}
							</div>
						))
					) : (
						// for desktop custom scrollbar
						<SimpleBar style={{ height: '100%' }} autoHide={false}>
							{tabs.map((tab) => (
								<div
									key={tab.id}
									data-tab-id={tab.id}
									className={`idea-content ${currentTab === tab.id ? 'active' : ''}`}
								>
									{tab.content}
								</div>
							))}
						</SimpleBar>
					)}
				</div>

				{/* slider with images */}
				<SliderContainer />
			</div>
		</div>
	);
};

export default IdeaGeneral;
