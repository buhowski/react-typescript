import React from 'react';
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
}

const PitchContainer: React.FC<PitchContainerProps> = ({
	structure,
	index,
	useTabletLarge,
	Slider,
	CopyrightComponent,
	PopupContactsComponent,
}) => {
	return (
		<div key={index} className='pitch-container'>
			{structure.pitchNumber && <p className='pitch-number'>{structure.pitchNumber}</p>}

			{structure.pitchTitle && (
				<Title titleClassname='headline__title' title={structure.pitchTitle} />
			)}

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

			{structure.lastWords && <LastWords lastWords={structure.lastWords} />}

			{useTabletLarge && <CopyrightComponent />}

			<div className='copy-tablet'>{useTabletLarge && <PopupContactsComponent />}</div>
		</div>
	);
};

export default PitchContainer;
