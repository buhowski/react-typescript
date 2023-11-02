import React from 'react';
import dotsData from './aboutData';
import PhotoBg from './images/body.png';
import './About.scss';

class About extends React.Component {
	state = {
		active: null,
	};

	addActiveClass = (e: React.MouseEvent) => {
		const hoveredItemId = (e.target as HTMLDivElement).id;
		if (this.state.active === hoveredItemId) {
			this.setState({
				active: null,
			});
		} else {
			this.setState({
				active: hoveredItemId,
			});
		}
	};

	render() {
		return (
			<div className='wrapper about-wrapper'>
				<h1 className='base-title base-title--main'>Me Starter Pack</h1>
				<div className='about-info'>
					<div className='img'>
						<img src={PhotoBg} alt='looking into the future' />
					</div>
					{dotsData.map(({ classItem, title, img }, i) => {
						return (
							<div className={`pos-abs about-item ${classItem}`} key={i}>
								<div
									id={classItem}
									onMouseEnter={this.addActiveClass}
									onClick={this.addActiveClass}
									className={`d-flex-c-c ball${
										this.state.active === classItem ? ' active' : ''
									}`}
								></div>
								<div className='show'>
									<p className='title'>{title}</p>
									<img className='line-drawing-pic' src={img} alt={title} />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default About;
