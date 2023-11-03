import projectsData from './projectsData';
import './Projects.scss';

const Projects = () => {
	return (
		<div className='wrapper wrapper-container'>
			<h1 className='base-title base-title--main'>Some Works</h1>
			<div className='projects-container'>
				{projectsData.map(({ img, url, name }, i) => {
					return (
						<div className='project d-flex-c' style={{ backgroundImage: img }} key={i}>
							<div className='project__before'></div>
							<a
								className='a project-link'
								href={url}
								target='_blank'
								rel='noopener noreferrer'
							>
								<div className='project-container d-flex'>
									<h3 className='project-name'>
										{name}
										<span>_</span>
									</h3>
								</div>
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
