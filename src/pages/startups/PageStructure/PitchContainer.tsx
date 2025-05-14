import React, { useRef, useEffect, useState } from 'react';
import { Block } from '../data/textTypes';
import { Title, PitchInfo, Text, ListTitle, List, LastWords } from './IdeaElements';

interface PitchContainerProps {
	structure: {
		pitchNumber?: string;
		pitchTitle?: string;
		pitchInfo?: { key: string; value: string }[];
		textBlock: Block[];
		lastWords?: string;
	};

	index: number;
	useTabletLarge: boolean;
	Slider?: JSX.Element;
	CopyrightComponent: React.FC;
	PopupContactsComponent: React.FC;
	isActive?: boolean;
	onTabClick: (index: number, event: React.MouseEvent<HTMLDivElement>) => void;
}

const PitchContainer: React.FC<PitchContainerProps> = ({
	structure,
	index,
	useTabletLarge,
	Slider,
	CopyrightComponent,
	PopupContactsComponent,
	isActive,
	onTabClick,
}) => {
	const contentRef = useRef<HTMLDivElement>(null);
	const [contentHeight, setContentHeight] = useState<number | undefined>(undefined);

	useEffect(() => {
		if (isActive && contentRef.current) {
			setContentHeight(contentRef.current.scrollHeight);
		} else {
			setContentHeight(0);
		}
	}, [isActive]);

	return (
		<div
			key={index}
			id={`pitch-container-${index}`}
			className={`pitch-container ${isActive ? 'is-active' : ''}`}
		>
			<div className='tab-btn' onClick={(event) => onTabClick(index, event)}>
				{structure.pitchNumber && <p className='pitch-number'>{structure.pitchNumber}</p>}

				{structure.pitchTitle && (
					<Title titleClassname='headline__title' title={structure.pitchTitle} />
				)}
			</div>

			<div
				className='tab-content'
				ref={contentRef}
				style={{
					height: isActive ? contentHeight : 0,
				}}
			>
				{structure.pitchInfo && <PitchInfo pitchInfo={structure.pitchInfo} />}

				{structure.textBlock.map((block, blockIndex) => (
					<div className='idea-block' key={blockIndex}>
						{block.title && <Title titleClassname='idea-block__title' title={block.title} />}
						{block.text && <Text text={block.text} />}

						{useTabletLarge && blockIndex === 0 && Slider}

						{block.listBlock &&
							block.listBlock.map((item, index) => (
								<div className='idea-block__list' key={index}>
									{item.title && <ListTitle title={item.title} />}

									{item.text && <List listItems={item.text} />}
								</div>
							))}
					</div>
				))}
			</div>

			{structure.lastWords && <LastWords lastWords={structure.lastWords} />}

			{useTabletLarge && <CopyrightComponent />}

			<div className='copy-tablet'>{useTabletLarge && <PopupContactsComponent />}</div>
		</div>
	);
};

export default PitchContainer;
