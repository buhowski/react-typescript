import './Idea.scss';
import IdeaTabs from './IdeaTabs';
import textData from './textData';

const Idea = () => {
	// Function to render a block of content with title, texts, and lists
	const renderBlock = (
		title: string,
		texts: string[],
		listTitle: string,
		lists: string[][]
	) => (
		<div className='idea-block'>
			<h2 className='idea-block__title h2'>{title}</h2>

			{texts.map((text, i) => (
				<p key={i} className='idea-block__text'>
					{text}
				</p>
			))}

			{listTitle && <h3 className='h3'>{listTitle}</h3>}

			{lists.map((items, i) => (
				<ul key={i}>
					{items.map((item, j) => (
						<li key={j} className='idea-block'>
							{item}
						</li>
					))}
				</ul>
			))}
		</div>
	);

	// Function to render each idea item
	const renderIdea = (data: any, index: number) => (
		<div key={index}>
			<h1 className='startup-title'>Startup Presentation</h1>

			{renderBlock(
				data.missionTitle,

				[data.missionText],
				'',
				[data.missionList]
			)}

			<p className='last-words'>{data.lastWords}</p>
		</div>
	);

	// Rendering idea items based on data
	const renderedItems = textData.map(renderIdea);

	return (
		// Rendering idea tabs with localized content and contact button title
		<IdeaTabs
			IdeaTabRu={renderedItems[0]}
			IdeaTabEn={renderedItems[1]}
			IdeaTabUa={renderedItems[2]}
		/>
	);
};

export default Idea;
