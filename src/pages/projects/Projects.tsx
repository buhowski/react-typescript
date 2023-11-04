import projectsData from './projectsData';
import './Projects.scss';

const Projects = () => {
	return (
		<div className='wrapper wrapper-container'>
			<h1 className='base-title base-title--main'>Some Works</h1>
			<div className='projects-container'>
				{projectsData.map(({ img, url, name, desk, skills }, i) => {
					return (
						<a
							className='project'
							key={i}
							href={url}
							target='_blank'
							rel='noopener noreferrer'
						>
							<div className='project__before'></div>

							<div className='project__bg d-flex-c' style={{ backgroundImage: img }}>
								<div className='a project-link'>
									<div className='project-container d-flex'>
										<div className='project-name'>
											{name}
											<span>_</span>
										</div>
									</div>
								</div>

								{skills || desk ? (
									<div className='project__skills'>
										<p className='project__skills-p'>{desk}</p>

										{skills && <p className='project__skills-title'>Skills:</p>}

										<div className='project__skills-items'>
											{skills?.map((skill, i) => {
												return <span key={i}>{skill}</span>;
											})}
										</div>
									</div>
								) : null}
							</div>
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
