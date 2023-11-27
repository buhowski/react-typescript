import { Component } from 'react';
import PopupContacts from './PopupContacts';

const imageFiles = [
	'startup.jpg',
	'brain.jpeg',
	'creatio.jpeg',
	'god.jpeg',
	'writer.jpg',
	'robotics.jpg',
	'cubic.jpeg',
	'draw.webp',
	'coffee.jpeg',
	'team.jpeg',
];

interface ImageData {
	imgSrc: string;
	imgAlt: string;
}

const dataImgs: ImageData[] = imageFiles.map((file) => ({
	imgSrc: require(`./images/${file}`),
	imgAlt: 'startup presentation image. An offer to invest in huge potential!',
}));

class SliderContainer extends Component {
	state = {
		activeIndex: Math.floor(Math.random() * (dataImgs.length - 0) + 0),
	};

	clickNext = () => {
		if (this.state.activeIndex < dataImgs.length - 1) {
			this.setState({ activeIndex: this.state.activeIndex + 1 });
		} else {
			this.setState({ activeIndex: 0 });
		}
	};

	clickPrev = () => {
		if (this.state.activeIndex > 0) {
			this.setState({ activeIndex: this.state.activeIndex - 1 });
		} else {
			this.setState({ activeIndex: dataImgs.length - 1 });
		}
	};

	render() {
		return (
			<div className='slider-with-btn'>
				<div className='slider-container'>
					<div className='idea-slider slider-js'>
						{dataImgs.map(({ imgSrc, imgAlt }, i) => (
							<div
								className='slider-item-js'
								data-active={i === this.state.activeIndex}
								key={i}
							>
								<img src={imgSrc} alt={imgAlt} />
							</div>
						))}
					</div>

					<span className='slides-number'>
						{`${this.state.activeIndex + 1 < 10 ? '0' : ''}${
							this.state.activeIndex + 1
						} / ${dataImgs.length < 10 ? '0' : ''}${dataImgs.length}`}
					</span>

					<div className='slider-actions'>
						<button
							className='slider-btn-js slider-btn-js-prev'
							type='button'
							onClick={this.clickPrev}
						></button>

						<button
							className='slider-btn-js slider-btn-js-next'
							type='button'
							onClick={this.clickNext}
						></button>
					</div>

					<PopupContacts />
				</div>

				<PopupContacts />
			</div>
		);
	}
}

export default SliderContainer;
