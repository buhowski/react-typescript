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

							<div className='project__bg' style={{ backgroundImage: img }}>
								<a
									className='project-link'
									href={url}
									target='_blank'
									rel='noopener noreferrer'
								>
									<p className='project-name'>
										{name}
										<span>_</span>
									</p>
								</a>

								{skills || desk ? (
									<div className='project__skills'>
										<p className='project__skills-p'>{desk}</p>

										<div className='project__skills-action'>
											{skills && <p className='project__skills-title'>Skills:</p>}

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

										<div className='project__skills-items'>
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
