import React from 'react';
import Copyright from './Copyright';
import SliderContainer from './Slider';

interface IdeaTab {
	id: number;
	title: string;
	content: React.ReactNode;
}

interface IdeaGeneralProps {
	IdeaTabRu: React.ReactNode;
	IdeaTabEn: React.ReactNode;
	IdeaTabUa: React.ReactNode;
	baseTitle: string;
	baseDesc: string;
	contactBtnTitle: string;
}

interface IdeaGeneralState {
	currentTab: string;
	setCurrentTab: string;
}

interface SliderContainerProps {
	contactBtnTitle: string;
}

class IdeaGeneral extends React.Component<
	IdeaGeneralProps,
	IdeaGeneralState,
	SliderContainerProps
> {
	state: IdeaGeneralState = {
		currentTab: '1',
		setCurrentTab: '1',
	};

	handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const input = event.target;
		const value = input.type === 'checkbox' ? input.checked : input.value;

		this.setState({ [input.name]: value } as Pick<
			IdeaGeneralState,
			keyof IdeaGeneralState
		>);
	};

	handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const button = e.target as HTMLButtonElement;

		this.setState({
			currentTab: button.id,
			setCurrentTab: button.id,
		});

		localStorage.setItem('currentIndex', button.id);
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
		const { IdeaTabRu, IdeaTabEn, IdeaTabUa, baseTitle, baseDesc, contactBtnTitle } =
			this.props;

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
									data-active={this.state.currentTab === tab.id.toString()}
								>
									{tab.title}
								</button>
							))}
						</div>

						{/* Here goes tabs content */}
						{tabs.map((tab, i) => (
							<div
								className='idea-overflow'
								data-content={this.state.currentTab === tab.id.toString()}
								key={i}
							>
								{this.state.currentTab === `${tab.id}` && tab.content}
							</div>
						))}
					</div>

					{/* <SliderContainer contactBtnTitle={contactBtnTitle} /> */}
				</div>
			</div>
		);
	}
}

export default IdeaGeneral;
