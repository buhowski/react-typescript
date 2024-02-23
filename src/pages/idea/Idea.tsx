import './Idea.scss';
import IdeaTabs from './IdeaTabs';
import textData from './textData';

const Idea = () => {
	const contactBtnTitle = 'Get In Touch';
	const baseTitle = 'Startup Presentation';

	const textItems = textData.map((data, i) => (
		<div key={i}>
			<div className='idea-block'>
				<h2 className='idea-block__title h2'>{data.pitchTitle}</h2>
				<p className='idea-block__text'>{data.pitchText}</p>
			</div>

			<div className='idea-block'>
				<h2 className='idea-block__title h2'>{data.basic}</h2>
				<p className='idea-block__text'>{data.appSample}</p>
				<h3 className='h3'>{data.possibilitiesTitle}</h3>

				<ul>
					{data.possibilitiesStar.slice(0, 2).map((item, a) => (
						<li key={a} className='idea-block__stared'>
							{item}
							<span className='idea-block__star'> *</span>
						</li>
					))}

					{data.possibilitiesStar.slice(2).map((item, a) => (
						<li key={a}>{item}</li>
					))}
				</ul>

				<p className='idea-block__desc'>
					<span className='idea-block__star'>* </span> &ndash; {data.branchDesc}
				</p>

				<p className='idea-block__info'>{data.design}</p>
			</div>

			<div className='idea-block'>
				<h2 className='h2'>{data.conceptTitle}</h2>
				<div className='idea-concept'>
					<h3 className='h3'>{data.filmTitle}</h3>

					{data.filmInfo.map((filmInfo, f) => (
						<p key={f} className='idea-block__text'>
							{filmInfo}
						</p>
					))}
				</div>

				<div className='idea-concept'>
					<h3 className='h3'>{data.journalist}</h3>

					{data.journalistInfo.map((journalist, j) => (
						<p key={j} className='idea-block__text'>
							{journalist}
						</p>
					))}
				</div>
			</div>

			<div className='idea-block'>
				<h2 className='h2'>{data.whyTitle}</h2>

				{data.whyInfo.map((why, b) => (
					<p key={b} className='idea-block__text'>
						{why}
					</p>
				))}
			</div>

			<div className='idea-block'>
				<h2 className='h2'>{data.sumTitle}</h2>

				{data.sumInfo.map((sum, c) => (
					<p key={c} className='idea-block__text'>
						{sum}
					</p>
				))}
			</div>

			<div className='idea-block'>
				<h2 className='h2'>{data.simpleTitle}</h2>

				{data.simpleInfo.map((simple, c) => (
					<p key={c} className='idea-block__text'>
						{simple}
					</p>
				))}
			</div>
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
