import React from 'react';

// Subtitle h3 item
interface TitleProps {
	title: string | { key: string; value: string }[];
	titleClassname?: string;
}

export const Title: React.FC<TitleProps> = ({ title, titleClassname }) => {
	if (typeof title === 'string') {
		return <h2 className={`${titleClassname}`}>{title}</h2>;
	} else {
		return (
			<>
				{title.map(({ key, value }, i) => (
					<h2 key={i} className={`${titleClassname}`}>
						<span>{key}</span>
						{value}
					</h2>
				))}
			</>
		);
	}
};

// Paragraph in text data
interface TitleTypeProps {
	titleType: { key: string; value: string }[];
}

export const TitleType: React.FC<TitleTypeProps> = ({ titleType }) => {
	return (
		<>
			{titleType.map(({ key, value }, i) => (
				<h3 className='block-headline__type' key={i}>
					<span>{key}</span>
					{value}
				</h3>
			))}
		</>
	);
};

// Paragraph in text data
interface SubtitleBigProps {
	subtitleBig: { key: string; value: string }[];
}

export const SubtitleBig: React.FC<SubtitleBigProps> = ({ subtitleBig }) => {
	return (
		<div className='idea-types'>
			{subtitleBig.map(({ key, value }, i) => (
				<h4 className='block-headline__subtitle' key={i}>
					<span>{key}</span>
					{value}
				</h4>
			))}
		</div>
	);
};

// TextLinkProps
interface TextLinkProps {
	href?: string;
	text?: string;
}

export const TextLink: React.FC<TextLinkProps> = ({ href, text }) => {
	return (
		<>
			<a href={href} target='_blank' rel='noopener noreferrer' title={href}>
				<span>{text}</span>
			</a>

			{/* TODO: maybe make good preview for links */}
			{/* <iframe src={href}></iframe> */}
		</>
	);
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
	text: string | string[] | JSX.Element[];
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
	items: string[] | JSX.Element[];
}

export const List: React.FC<ListProps> = ({ items }) => {
	const renderedList = Array.isArray(items) ? items : [items];

	return (
		<ul>
			{renderedList.map((item, i) => (
				<li key={i}>
					<p>{item}</p>
				</li>
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
