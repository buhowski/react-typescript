import Masonry from 'react-responsive-masonry';
import { ResponsiveMasonry as ResponsiveMasonryBase } from 'react-responsive-masonry';
import PageHelmet from '../../config/PageHelmet';
import { portfolioMetaTags } from '../../components/metaTags';
import projectsData from './projectsData';

import './Projects.scss';

// Type assertions to fix JSX component typing issues
const ResponsiveMasonry = ResponsiveMasonryBase as unknown as React.FC<
	React.PropsWithChildren<any>
>;
const MasonryTyped = Masonry as unknown as React.FC<React.PropsWithChildren<any>>;

const Projects = () => {
	return (
		<div className='wrapper'>
			<PageHelmet metaTags={portfolioMetaTags} />

			<h1 className='base-title h1'>Some Works</h1>
			<div className='projects-container'>
				<ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 666: 2, 1024: 3, 1281: 5 }}>
					<MasonryTyped itemStyle={{ gap: '40px' }} className='projects-container__masonry'>
						{projectsData.map(({ img, url, urlCode, name, desk, skills }, i) => {
							return (
								<div className='project' key={i}>
									<a className='project-link' href={url} target='_blank' rel='noopener noreferrer'>
										<img className='project-link__img' src={img} alt={desk} />
									</a>

									{skills || desk ? (
										<div className='project-description'>
											<p className='project-description__name'>
												{name}
												<span>_</span>
											</p>

											<p className='project-description__text'>{desk}</p>

											<div className='project-description__actions'>
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
							);
						})}
					</MasonryTyped>
				</ResponsiveMasonry>
			</div>
		</div>
	);
};

export default Projects;
