import projectsData from './projectsData';
import './Projects.scss';

const Projects = () => {
	return (
		<div className='wrapper'>
			<h1 className='base-title h1'>Some Works</h1>
			<div className='projects-container'>
				{projectsData.map(({ img, url, urlCode, name, desk, skills }, i) => {
					return (
						<div className='project' key={i}>
							<div className='project__before'></div>

							<div className='project__bg'>
								<a
									className='project-link'
									href={url}
									target='_blank'
									rel='noopener noreferrer'
								>
									<img className='project__img' src={img} alt={desk} />
								</a>

								{skills || desk ? (
									<div className='project-description'>
										<p className='project-name'>
											{name}
											<span>_</span>
										</p>

										<p className='project-description__p'>{desk}</p>

										<div className='project-description__action'>
											{url && (
												<a
													href={url}
													target='_blank'
													rel='noopener noreferrer'
													className='nav-link'
												>
													Site
												</a>
											)}

											{urlCode && (
												<a
													href={urlCode}
													target='_blank'
													rel='noopener noreferrer'
													className='nav-link'
												>
													Code
												</a>
											)}
										</div>

										{skills && <p className='project-description__title'>Skills:</p>}

										<div className='project-description__items'>
											{skills?.map((skill, i) => {
												return <span key={i}>{skill}</span>;
											})}
										</div>
									</div>
								) : null}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
