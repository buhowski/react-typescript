import './Idea.scss';
import IdeaTabs from './IdeaTabs';
import textData from './textData';

const Idea = () => {
	const contactBtnTitle = 'Get In Touch';
	const baseTitle = 'Startup Presentation';

	const textItems = textData.map((data, index) => (
		<div key={index}>
			<div className='idea-block'>
				<h2 className='idea-block__title h2'>{data.missionTitle}</h2>

				<p className='idea-block__text'>{data.missionText}</p>

				<ul>
					{data.missionList.map((item, i) => (
						<li key={i}>{item}</li>
					))}
				</ul>

				<p className='idea-block__text'>{data.missionText2}</p>
			</div>

			<div className='idea-block'>
				<h2 className='idea-block__title h2'>{data.descriptionTitle}</h2>

				{data.descriptionText.map((item, i) => (
					<p key={i} className='idea-block__text'>
						{item}
					</p>
				))}

				<h3 className='h3'>{data.descriptionFunctionsTitle}</h3>

				<ul>
					{data.descriptionFunctions.map((item, i) => (
						<li key={i} className='idea-block'>
							{item}
						</li>
					))}
				</ul>
			</div>

			<div className='idea-block'>
				<h2 className='idea-block__title h2'>{data.detailsTitle}</h2>

				{data.detailsText.map((item, i) => (
					<p key={i} className='idea-block__text'>
						{item}
					</p>
				))}

				<h3 className='h3'>{data.detailsPossibilitiesTitle}</h3>

				<ul>
					{data.detailsPossibilities.map((item, i) => (
						<li key={i} className='idea-block'>
							{item}
						</li>
					))}
				</ul>

				<h3 className='h3'>{data.detailsStagesTitle}</h3>

				<ul>
					{data.detailsStages.map((item, i) => (
						<li key={i} className='idea-block'>
							{item}
						</li>
					))}
				</ul>

				<p className='idea-block__text'>{data.detailsText2}</p>
			</div>

			<div className='idea-block'>
				<h2 className='idea-block__title h2'>{data.summaryTitle}</h2>

				{data.summaryText.map((item, i) => (
					<p key={i} className='idea-block__text'>
						{item}
					</p>
				))}

				<h3 className='h3'>{data.summarySimplifyTitle}</h3>

				<ul>
					{data.summarySimplify.map((item, i) => (
						<li key={i} className='idea-block'>
							{item}
						</li>
					))}
				</ul>

				<h3 className='h3'>{data.summaryTechTitle}</h3>

				<ul>
					{data.summaryTech.map((item, i) => (
						<li key={i} className='idea-block'>
							{item}
						</li>
					))}
				</ul>

				<h3 className='h3'>{data.gonzoTitle}</h3>

				{data.gonzoText.map((item, i) => (
					<p key={i} className='idea-block__text'>
						{item}
					</p>
				))}
			</div>

			<p className='last-words'>
				{data.lastWords.map((item, i) => (
					<span key={i}>{item}</span>
				))}
			</p>
		</div>
	));

	return (
		<IdeaTabs
			IdeaTabRu={textItems[0]}
			IdeaTabEn={textItems[1]}
			IdeaTabUa={textItems[2]}
			baseTitle={baseTitle}
			contactBtnTitle={contactBtnTitle}
		/>
	);
};

export default Idea;
