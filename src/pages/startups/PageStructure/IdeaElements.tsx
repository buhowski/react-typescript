import React from 'react';
import { Block } from '../data/textTypes';

export const Headline: React.FC<Block> = ({ pitchTitle }) => {
	return (
		<div className='headline h2'>
			<Title titleClassname='headline__title' title={pitchTitle} />
		</div>
	);
};

// Title item
interface TitleProps extends Block {
	titleClassname?: string;
}

export const Title: React.FC<TitleProps> = ({ title, titleClassname }) => {
	return <h2 className={`${titleClassname} h2`}>{title}</h2>;
};

// Subtitle item
export const Subtitle: React.FC<Block> = ({ subtitle }) => {
	return <h3 className='idea-block__subtitle h2'>{subtitle}</h3>;
};

// Pitch information, genre / etc.
export const PitchInfo: React.FC<Block> = ({ pitchInfo }) => {
	return (
		<div className='headline-types'>
			{pitchInfo?.map(({ key, value }, i) => (
				<h4 className='headline-types__title' key={i}>
					<span>{key}</span>

					{value}
				</h4>
			))}
		</div>
	);
};

// TextLinkProps
export const TextLink: React.FC<Block> = ({ linkHref, linkName, linkTarget }) => {
	return (
		<>
			<a
				href={linkHref}
				target={linkTarget ? linkTarget : '_blank'}
				rel='noopener noreferrer'
				title={linkHref}
			>
				<span>{linkName}</span>
			</a>

			{/* TODO: maybe make good preview for links */}
			{/* <iframe src={href}></iframe> */}
		</>
	);
};

// Paragraph in text data
export const Text: React.FC<Block> = ({ text }) => {
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
export const List: React.FC<Block> = ({ listItems }) => {
	const renderedList = Array.isArray(listItems) ? listItems : [listItems];

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
export const LastWords: React.FC<Block> = ({ lastWords }) => {
	return <p className='last-words'>{lastWords}</p>;
};
