import React, { useState, useEffect } from 'react';
import SimpleBar from 'simplebar-react';
import PopupContacts from './PopupContacts';
import SliderContainer from './Slider';
import { useTabletLargeQuery } from '../../hooks/useMediaQuery';

interface IdeaGeneralProps {
	IdeaTabRu: JSX.Element;
	IdeaTabEn: JSX.Element;
	IdeaTabUa: JSX.Element;
	contactBtnTitle: string;
}

const IdeaGeneral = ({ IdeaTabRu, IdeaTabEn, IdeaTabUa }: IdeaGeneralProps) => {
	const useTabletLarge = useTabletLargeQuery();
	const [currentTab, setCurrentTab] = useState('');
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

	const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.currentTarget;
		const tabId = target.getAttribute('data-tab-id');

		setCurrentTab(tabId ?? '');

		localStorage.setItem('currentIndex', String(tabId));
	};

	useEffect(() => {
		const currentIndex = localStorage.getItem('currentIndex');

		setCurrentTab(currentIndex ? currentIndex : '1');
	}, []);

	return (
		<div className='wrapper wrapper--idea'>
			<div className='idea-section'>
				{useTabletLarge && <PopupContacts />}

				<div className='idea-info'>
					<div className='idea-tabs'>
						{/* Here goes tab items*/}
						{tabs.map((tab) => (
							<button
								className='idea-tabs__btn'
								key={tab.id}
								data-tab-id={tab.id}
								data-active={currentTab === tab.id}
								onClick={handleTabClick}
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
								className='idea-content'
								data-active={currentTab === tab.id}
							>
								{currentTab === tab.id && tab.content}
							</div>
						))
					) : (
						<SimpleBar style={{ height: '100%' }} autoHide={false}>
							{tabs.map((tab) => (
								<div
									key={tab.id}
									data-tab-id={tab.id}
									className='idea-content'
									data-active={currentTab === tab.id}
								>
									{currentTab === tab.id && tab.content}
								</div>
							))}
						</SimpleBar>
					)}
				</div>

				<SliderContainer />
			</div>
		</div>
	);
};

export default IdeaGeneral;
