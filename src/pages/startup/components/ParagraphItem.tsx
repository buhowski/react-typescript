import React from 'react';

// Paragraph in text data
interface SubtitleBigProps {
	subtitleBig: { key: string; value: string }[];
}

export const SubtitleBig: React.FC<SubtitleBigProps> = ({ subtitleBig }) => {
	return (
		<div className='idea-types'>
			{Array.isArray(subtitleBig) ? (
				subtitleBig.map(({ key, value }, i) => (
					<h4 className='idea-block__subtitleBig' key={i}>
						<span>{key}</span>
						{value}
					</h4>
				))
			) : (
				<h4 className='idea-block__subtitleBig'>{subtitleBig}</h4>
			)}
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
	if (Array.isArray(text)) {
		return (
			<>
				{text.map((item, i) => (
					<p key={i} className='idea-block__text'>
						{item}
					</p>
				))}
			</>
		);
	} else {
		return <p className='idea-block__text'>{text}</p>;
	}
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
