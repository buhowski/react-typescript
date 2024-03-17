import React from 'react';

// Paragraph in text data
interface SubtitleBigProps {
	subtitleBig: { key: string; value: string }[];
}

export const SubtitleBig: React.FC<SubtitleBigProps> = ({ subtitleBig }) => {
	return (
		<div className='idea-types'>
			{subtitleBig.map(({ key, value }, i) => (
				<h3 className='idea-block__subtitleBig' key={i}>
					<span>{key}</span>
					{value}
				</h3>
			))}
		</div>
	);
};

// Subtitle h3 item
interface TitleProps {
	title: string;
	titleClassname?: string;
}

export const Title: React.FC<TitleProps> = ({ title, titleClassname }) => {
	return <h2 className={`${titleClassname}`}>{title}</h2>;
};

// Subtitle h3 item
interface SubtitleProps {
	subtitle: string;
}

export const Subtitle: React.FC<SubtitleProps> = ({ subtitle }) => {
	return <h3 className='idea-block__subtitle'>{subtitle}</h3>;
};

// Paragraph in text data
interface TextProps {
	text: string | string[];
}

export const Text: React.FC<TextProps> = ({ text }) => {
	const renderedText = Array.isArray(text) ? text : [text];

	return (
		<>
			{renderedText.map((item, i) => (
				<p key={i} className='idea-block__text'>
					{item}
				</p>
			))}
		</>
	);
};

// List ul in text structure
interface ListProps {
	items: string[];
}

export const List: React.FC<ListProps> = ({ items }) => {
	return (
		<ul>
			{items.map((item, i) => (
				<li key={i}>{item}</li>
			))}
		</ul>
	);
};

// Last Words element
interface LastWordsProps {
	lastWords: string;
}

export const LastWords: React.FC<LastWordsProps> = ({ lastWords }) => {
	return <p className='last-words'>{lastWords}</p>;
};
