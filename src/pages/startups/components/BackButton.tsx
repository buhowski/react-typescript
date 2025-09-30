import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowLeftIcon } from '../../../assets/svg/icons';

interface BackButtonProps {
	to: string;
	className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to, className }) => {
	return (
		<NavLink to={to} className={className || 'idea-back'}>
			{ArrowLeftIcon}

			<span>Back</span>
		</NavLink>
	);
};

export default BackButton;
