import React from 'react';
import { Block } from './textTypes';

interface TextBlockProps {
	block: Block;
}

const TextBlock: React.FC<TextBlockProps> = ({ block }) => {
	return (
		<div className='idea-block'>
			{block.titleBig && <h2 className={`idea-block__titleBig`}>{block.titleBig}</h2>}

			{block.title && <h2 className={`idea-block__title`}>{block.title}</h2>}

			{block.text &&
				(Array.isArray(block.text) ? (
					block.text.map((item, i) => (
						<p key={i} className='idea-block__text'>
							{item}
						</p>
					))
				) : (
					<p className='idea-block__text'>{block.text}</p>
				))}

			{block.subtitle && <h3 className='idea-block__subtitle'>{block.subtitle}</h3>}

			{block.list && (
				<ul>
					{block.list.map((item, i) => (
						<li key={i}>{item}</li>
					))}
				</ul>
			)}

			{block.subtitle2 && <h3 className='h3'>{block.subtitle2}</h3>}

			{block.list2 && (
				<ul>
					{block.list2.map((item, i) => (
						<li key={i}>{item}</li>
					))}
				</ul>
			)}

			{block.subtitle3 && <h3 className='h3'>{block.subtitle3}</h3>}

			{block.text2 &&
				(Array.isArray(block.text2) ? (
					block.text2.map((item, i) => (
						<p key={i} className='idea-block__text'>
							{item}
						</p>
					))
				) : (
					<p className='idea-block__text'>{block.text2}</p>
				))}

			{block.subtitle4 && <h3 className='h3'>{block.subtitle4}</h3>}

			{block.text3 &&
				(Array.isArray(block.text3) ? (
					block.text3.map((item, i) => (
						<p key={i} className='idea-block__text'>
							{item}
						</p>
					))
				) : (
					<p className='idea-block__text'>{block.text3}</p>
				))}
		</div>
	);
};

export default TextBlock;
