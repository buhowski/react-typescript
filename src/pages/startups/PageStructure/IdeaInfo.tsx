import React from 'react';
import SimpleBar from 'simplebar-react';

interface IdeaInfoProps {
	tabs: { id: string; title: string; content: JSX.Element }[];
	currentTab: string;
	handleTabClick: (tabId: string) => void;
	useTabletLarge: boolean;
}

export const IdeaInfo: React.FC<IdeaInfoProps> = ({
	tabs,
	currentTab,
	handleTabClick,
	useTabletLarge,
}) => {
	return (
		<div className='idea-info'>
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

			{/* Here goes tabs content */}
			{useTabletLarge ? (
				tabs.map((tab) => (
					<div key={tab.id} className='idea-content'>
						{currentTab === tab.id && tab.content}
					</div>
				))
			) : (
				// for desktop custom scrollbar
				<SimpleBar style={{ height: '100%', paddingRight: '35px' }} autoHide={false}>
					{tabs.map((tab) => (
						<div key={tab.id} className='idea-content'>
							{currentTab === tab.id && tab.content}
						</div>
					))}
				</SimpleBar>
			)}
		</div>
	);
};
