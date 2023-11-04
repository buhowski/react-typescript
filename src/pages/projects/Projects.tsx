import projectsData from './projectsData';
import './Projects.scss';

const Projects = () => {
	return (
		<div className='wrapper wrapper-container'>
			<h1 className='base-title base-title--main'>Some Works</h1>
			<div className='projects-container'>
				{projectsData.map(({ img, url, name }, i) => {
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
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
