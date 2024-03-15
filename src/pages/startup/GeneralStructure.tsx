import React from 'react';
import './Startup.scss';
import Tabs from './components/Tabs';
import Copyright from '../../components/Copyright';
import { useTabletLargeQuery } from '../../hooks/useMediaQuery';
import TextBlock from './components/TextBlock';
import { Block } from './components/types';
import LastWords from './components/LastWords';

interface TextStructure {
	section: Block[];
	lastWords: string;
}

interface PageProps {
	title: string;
	textData: TextStructure[];
}

const GeneralStructure: React.FC<PageProps> = ({ title, textData }) => {
	const useTabletLarge = useTabletLargeQuery();

	const textItems = textData.map((structure: TextStructure, index) => (
		<div key={index}>
			{/* Use title prop */}
			<h1 className='startup-title'>{title}</h1>

			{/* Text Structure */}
			{structure.section.map((block: Block, blockIndex) => (
				<TextBlock key={blockIndex} block={block} />
			))}

			{/* Text words after / thanks text */}
			<LastWords lastWords={structure.lastWords} />

			{/* Mobile copyright goes here */}
			{useTabletLarge && <Copyright />}
		</div>
	));

	return <Tabs TabRu={textItems[0]} TabEn={textItems[1]} TabUa={textItems[2]} />;
};

export default GeneralStructure;
