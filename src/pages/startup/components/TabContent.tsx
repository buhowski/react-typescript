import React from 'react';

interface TabContentProps {
	currentTab: string;
	tab: { id: string; title: string; content: JSX.Element };
}

export const TabContent: React.FC<TabContentProps> = ({ currentTab, tab }) => {
	return (
		<div
			className='idea-content'
			style={{ display: currentTab === tab.id ? 'block' : 'none' }}
		>
			{tab.content}
		</div>
	);
};
