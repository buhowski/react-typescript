import projectsData from './projectsData';
import './Projects.scss';

const Projects = () => {
	return (
		<div className='wrapper wrapper-container'>
			<h1 className='base-title base-title--main'>Some Works</h1>
			<div className='projects-container'>
				{projectsData.map(({ img, url, urlCode, name, desk, skills }, i) => {
					return (
						<div className='project' key={i}>
							<div className='project__before'></div>

							<div className='project__bg d-flex-c' style={{ backgroundImage: img }}>
								<a
									className='a project-link'
									href={url}
									target='_blank'
									rel='noopener noreferrer'
								>
									<div className='project-container d-flex'>
										<div className='project-name'>
											{name}
											<span>_</span>
										</div>
									</div>
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
													Live
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
