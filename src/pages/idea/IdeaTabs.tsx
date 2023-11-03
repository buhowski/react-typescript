import React from 'react';
import Copyright from './Copyright';
import SliderContainer from './Slider';

interface IdeaGeneralProps {
	IdeaTabRu: JSX.Element;
	IdeaTabEn: JSX.Element;
	IdeaTabUa: JSX.Element;
	baseTitle: string;
	baseDesc: string;
	contactBtnTitle: string;
}

class IdeaGeneral extends React.Component<IdeaGeneralProps> {
	state = {
		currentTab: '1',
		setCurrentTab: '1',
	};

	handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const input = event.target;
		const value = input.type === 'checkbox' ? input.checked : input.value;

		this.setState({ [input.name]: value });
	};

	handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		this.setState({
			currentTab: e.currentTarget.id,
			setCurrentTab: e.currentTarget.id,
		});

		localStorage.setItem('currentIndex', e.currentTarget.id);
	};

	componentDidMount() {
		const currentIndex = localStorage.getItem('currentIndex');

		this.setState({
			currentTab: currentIndex ? currentIndex : '1',
			setCurrentTab: currentIndex ? currentIndex : '1',
		});

		const ideaIcon = document.querySelector('.idea-icon') as HTMLElement;

		if (ideaIcon) {
			ideaIcon.style.animation = 'none';
		}
	}

	render() {
		const { IdeaTabRu, IdeaTabEn, IdeaTabUa, baseTitle, baseDesc } = this.props;

		const tabs = [
			{
				id: 1,
				title: 'en',
				content: IdeaTabEn,
			},
			{
				id: 2,
				title: 'ru',
				content: IdeaTabRu,
			},
			{
				id: 3,
				title: 'ua',
				content: IdeaTabUa,
			},
		];

		return (
			<div className='wrapper wrapper--idea'>
				<h1 className='base-title base-title--main'>{baseTitle}</h1>
				<h2 className='base-desc'>{baseDesc}</h2>

				<div className='idea-section'>
					<Copyright />

					<div className='idea-info'>
						<div className='idea-tabs'>
							{/* Here goes tab items*/}
							{tabs.map((tab, i) => (
								<button
									className='idea-tabs__btn'
									type='button'
									key={i}
									id={tab.id.toString()}
									onClick={this.handleTabClick}
									data-active={this.state.currentTab === `${tab.id}`}
								>
									{tab.title}
								</button>
							))}
						</div>

						{/* Here goes tabs content */}
						{tabs.map((tab, i) => (
							<div
								className='idea-overflow'
								data-content={this.state.currentTab === `${tab.id}`}
								key={i}
							>
								{this.state.currentTab === `${tab.id}` && tab.content}
							</div>
						))}
					</div>

					<SliderContainer />
				</div>
			</div>
		);
	}
}

export default IdeaGeneral;
