import React from 'react';
import { Block } from './textTypes';
import { Text, Subtitle, Title, List, SubtitleBig } from './ParagraphItem';

interface TextBlockProps {
	block: Block;
}

const TextBlock: React.FC<TextBlockProps> = ({ block }) => {
	return (
		<div className='idea-block'>
			{block.titleBig && (
				<Title titleClassname='idea-block__titleBig' title={block.titleBig} />
			)}

			{block.subtitleBig && <SubtitleBig subtitleBig={block.subtitleBig} />}

			{block.title && <Title titleClassname='idea-block__title' title={block.title} />}

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
	);
};

export default TextBlock;
