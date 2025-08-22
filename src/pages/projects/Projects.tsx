import React, { useEffect, useRef } from 'react';
import Masonry from 'react-responsive-masonry';
import { ResponsiveMasonry as ResponsiveMasonryBase } from 'react-responsive-masonry';
import PageHelmet from '../../config/PageHelmet';
import { portfolioMetaTags } from '../../components/metaTags';
import projectsData from './projectsData';
import './Projects.scss';

const ResponsiveMasonry = ResponsiveMasonryBase as unknown as React.FC<
	React.PropsWithChildren<any>
>;
const MasonryTyped = Masonry as unknown as React.FC<React.PropsWithChildren<any>>;

const Projects = () => {
	const descriptionRefs = useRef<Array<HTMLDivElement | null>>([]);
	const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);

	const adjustMargins = () => {
		descriptionRefs.current.forEach((desc, i) => {
			if (desc && linkRefs.current[i]) {
				const height = desc.offsetHeight;
				linkRefs.current[i]!.style.marginTop = `-${height}px`;
			}
		});
	};

	useEffect(() => {
		// Use ResizeObserver if supported
		const observers: ResizeObserver[] = [];
		if (typeof ResizeObserver !== 'undefined') {
			descriptionRefs.current.forEach((desc, i) => {
				if (desc && linkRefs.current[i]) {
					const ro = new ResizeObserver(adjustMargins);
					ro.observe(desc);
					observers.push(ro);
				}
			});
			adjustMargins(); // initial adjustment
			return () => observers.forEach((ro) => ro.disconnect());
		}

		// Fallback: window resize
		adjustMargins();
		window.addEventListener('resize', adjustMargins);
		return () => window.removeEventListener('resize', adjustMargins);
	}, []);

	return (
		<div className='wrapper'>
			<PageHelmet metaTags={portfolioMetaTags} />

			<h1 className='base-title h1'>Some Works</h1>
			<div className='projects-container'>
				<ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 666: 2, 1024: 3, 1281: 5 }}>
					<MasonryTyped itemStyle={{ gap: '40px' }} className='projects-container__masonry'>
						{projectsData.map(({ img, url, urlCode, name, description, skills, alt }, i) => (
							<div className='project' key={i}>
								{skills || description ? (
									<div
										className='project-description'
										ref={(el) => (descriptionRefs.current[i] = el)}
									>
										<div className='project-description__container'>
											<p className='project-description__name'>
												{name}
												<span>_</span>
											</p>

											<p className='project-description__text'>{description}</p>

											<div className='project-description__actions'>
												{url && (
													<a
														href={url}
														target='_blank'
														rel='noopener noreferrer'
														className='nav-link'
													>
														Demo
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
												{skills?.map((skill, i) => (
													<span key={i}>{skill}</span>
												))}
											</div>
										</div>
									</div>
								) : null}

								<a
									className='project-link'
									href={url}
									target='_blank'
									rel='noopener noreferrer'
									ref={(el) => (linkRefs.current[i] = el)}
								>
									<img className='project-link__img' src={img} alt={alt} />
								</a>
							</div>
						))}
					</MasonryTyped>
				</ResponsiveMasonry>
			</div>
		</div>
	);
};

export default Projects;
