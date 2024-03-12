import './Idea.scss';
import IdeaTabs from './IdeaTabs';
import textData from './textData';
import Copyright from './Copyright';
import { useTabletLargeQuery } from '../../hooks/useMediaQuery';

interface Block {
	title?: string;
	text?: string | string[];
	subtitle?: string;
	list?: string[];
	subtitle2?: string;
	list2?: string[];
	subtitle3?: string;
	text2?: string | string[];
	subtitle4?: string;
	text3?: string | string[];
}

interface TextStructure {
	section: Block[];
	lastWords: string;
}

const Idea = () => {
	const useTabletLarge = useTabletLargeQuery();

	// All Text data maping
	const textItems = textData.map((structure: TextStructure, index) => (
		<div key={index}>
			<h1 className='startup-title'>Startup Presentation</h1>

			{/* text Structure  */}
			{structure.section.map((block: Block, blockIndex) => (
				<div key={blockIndex} className='idea-block'>
					{block.title && <h2 className={`idea-block__title h2 `}>{block.title}</h2>}

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

					{block.subtitle && <h3 className='h3'>{block.subtitle}</h3>}

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
			))}

			{/* text words after / thanks text */}
			<p className='last-words'>{structure.lastWords}</p>

			{/* Mobile copyright goes here */}
			{useTabletLarge && (
				<div className='copy-tablet'>
					<Copyright />
				</div>
			)}
		</div>
	));

	return (
		<IdeaTabs
			IdeaTabRu={textItems[0]}
			IdeaTabEn={textItems[1]}
			IdeaTabUa={textItems[2]}
		/>
	);
};

export default Idea;
