import React, { Component } from 'react';
import sliderImg1 from './images/barcode-art.jpg';
import sliderImg2 from './images/bridge.jpg';
import sliderImg3 from './images/cat.jpg';
import sliderImg4 from './images/comp.jpg';
import sliderImg5 from './images/einstein.jpg';
import sliderImg6 from './images/flamingo.jpg';
import sliderImg7 from './images/paper.jpg';
import sliderImg8 from './images/Image-for-ai.jpg';
import sliderImg9 from './images/machine.jpg';
import sliderImg10 from './images/maxresdefault.jpg';
import sliderImg12 from './images/Retro-Pineapples-Cats-Creative-Clock-Parrots-Pocket-watch.jpg';
import sliderImg11 from './images/writer.jpg';
import sliderImg13 from './images/sea.jpg';
import sliderImg14 from './images/see.jpg';
import sliderImg15 from './images/startup.jpg';
import sliderImg16 from './images/teresa.jpg';
import sliderImg17 from './images/time.jpg';
import sliderImg18 from './images/flowers.jpg';
import sliderImg19 from './images/guitar.jpg';
import sliderImg20 from './images/jump.jpg';
import sliderImg21 from './images/planet.jpg';
import sliderImg22 from './images/robotics.jpg';
import sliderImg23 from './images/two-sides.jpg';
import sliderImg24 from './images/writer-sea.jpg';
import sliderImg25 from './images/circle.jpg';
import PopupContacts from './PopupContacts';

const dataImgs = [
	{
		imgSrc: sliderImg1,
		imgAlt: 'ai picture',
	},
	{
		imgSrc: sliderImg2,
		imgAlt: 'einstein picture',
	},
	{
		imgSrc: sliderImg3,
		imgAlt: 'architect picture',
	},
	{
		imgSrc: sliderImg4,
		imgAlt: 'evolution picture',
	},
	{
		imgSrc: sliderImg5,
		imgAlt: 'mona-cat picture',
	},
	{
		imgSrc: sliderImg6,
		imgAlt: 'ow picture',
	},
	{
		imgSrc: sliderImg7,
		imgAlt: 'paint picture',
	},
	{
		imgSrc: sliderImg8,
		imgAlt: 'paper picture',
	},
	{
		imgSrc: sliderImg14,
		imgAlt: 'chinking picture',
	},
	{
		imgSrc: sliderImg9,
		imgAlt: 'startup picture',
	},
	{
		imgSrc: sliderImg10,
		imgAlt: 'times picture',
	},
	{
		imgSrc: sliderImg11,
		imgAlt: 'write picture',
	},
	{
		imgSrc: sliderImg12,
		imgAlt: 'chinking picture',
	},
	{
		imgSrc: sliderImg13,
		imgAlt: 'chinking picture',
	},
	{
		imgSrc: sliderImg15,
		imgAlt: 'chinking picture',
	},
	{
		imgSrc: sliderImg16,
		imgAlt: 'chinking picture',
	},
	{
		imgSrc: sliderImg17,
		imgAlt: 'chinking picture',
	},
	{
		imgSrc: sliderImg18,
		imgAlt: 'chinking picture',
	},
	{
		imgSrc: sliderImg19,
		imgAlt: 'chinking picture',
	},
	{
		imgSrc: sliderImg20,
		imgAlt: 'chinking picture',
	},
	{
		imgSrc: sliderImg21,
		imgAlt: 'chinking picture',
	},
	{
		imgSrc: sliderImg22,
		imgAlt: 'chinking picture',
	},
	{
		imgSrc: sliderImg23,
		imgAlt: 'chinking picture',
	},
	{
		imgSrc: sliderImg24,
		imgAlt: 'chinking picture',
	},
	{
		imgSrc: sliderImg25,
		imgAlt: 'chinking picture',
	},
];

class SliderContainer extends Component {
	// Simple react slider
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
		// const { contactBtnTitle } = this.props;

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

					{/* <PopupContacts contactBtnTitle={contactBtnTitle} /> */}
				</div>

				{/* <PopupContacts contactBtnTitle={contactBtnTitle} /> */}
			</div>
		);
	}
}

export default SliderContainer;
