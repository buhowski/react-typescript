import React from 'react';
import Startup from '../Startups';
import Copyright from '../../../components/Copyright';
import { useTabletLargeQuery } from '../../../hooks/useMediaQuery';
import IdeaBLock from './IdeaBLock';
import { Block } from '../data/textTypes';
import { LastWords } from './IdeaElements';

interface TextStructure {
	section: Block[];
	lastWords: string;
}

interface PageProps {
	title: string;
	textData: TextStructure[];
	Slider: JSX.Element;
}

const IdeaContent: React.FC<PageProps> = ({ title, textData, Slider }) => {
	const useTabletLarge = useTabletLargeQuery();

	const textItems = textData.map((structure: TextStructure, index) => (
		<div key={index}>
			{/* Use title prop */}
			{title && <h1 className='startup-title'>{title}</h1>}

			{/* Text Structure */}
			{structure.section.map((block: Block, blockIndex) => (
				<IdeaBLock key={blockIndex} block={block} />
			))}

			{/* Text words after / thanks text */}
			<LastWords lastWords={structure.lastWords} />

			{/* Mobile copyright goes here */}
			{useTabletLarge && <Copyright />}
		</div>
	));

	return (
		<Startup
			TabRu={textItems[0]}
			TabEn={textItems[1]}
			TabUa={textItems[2]}
			Slider={Slider}
		/>
	);
};

export default IdeaContent;
