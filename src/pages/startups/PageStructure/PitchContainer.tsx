import React from 'react';
import { Block } from '../data/textTypes';
import { Headline, Title, PitchInfo, Text, Subtitle, List, LastWords } from './IdeaElements';

interface PitchContainerProps {
	structure: {
		section: Block[];
		pitchNumber?: string;
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
			{structure.pitchNumber && <h1 className='startup-title h2'>{structure.pitchNumber}</h1>}

			{structure.section.map((block, blockIndex) => (
				<div className='idea-block' key={blockIndex}>
					{block.pitchTitle && <Headline pitchTitle={block.pitchTitle} />}
					{block.pitchInfo && <PitchInfo pitchInfo={block.pitchInfo} />}
					{block.loglineTitle && (
						<Title titleClassname='idea-block__title' title={block.loglineTitle} />
					)}
					{block.loglineText && <Text text={block.loglineText} />}

					{useTabletLarge && index === 0 && Slider}

					{block.title && <Title titleClassname='idea-block__title' title={block.title} />}
					{block.text && <Text text={block.text} />}
					{block.subtitle && <Subtitle subtitle={block.subtitle} />}
					{block.list && <List listItems={block.list} />}
					{block.subtitle2 && <Subtitle subtitle={block.subtitle2} />}
					{block.list2 && <List listItems={block.list2} />}
					{block.text2 && <Text text={block.text2} />}
					{block.character01Title && <Subtitle subtitle={block.character01Title} />}
					{block.character01List && <List listItems={block.character01List} />}
					{block.character02Title && <Subtitle subtitle={block.character02Title} />}
					{block.character02List && <List listItems={block.character02List} />}
					{block.character03Title && <Subtitle subtitle={block.character03Title} />}
					{block.character03List && <List listItems={block.character03List} />}
					{block.character04Title && <Subtitle subtitle={block.character04Title} />}
					{block.character04List && <List listItems={block.character04List} />}
					{block.character05Title && <Subtitle subtitle={block.character05Title} />}
					{block.character05List && <List listItems={block.character05List} />}
					{block.character06Title && <Subtitle subtitle={block.character06Title} />}
					{block.character06List && <List listItems={block.character06List} />}
				</div>
			))}

			{structure.lastWords && <LastWords lastWords={structure.lastWords} />}

			{useTabletLarge && <CopyrightComponent />}

			<div className='copy-tablet'>{useTabletLarge && <PopupContactsComponent />}</div>
		</div>
	);
};

export default PitchContainer;
