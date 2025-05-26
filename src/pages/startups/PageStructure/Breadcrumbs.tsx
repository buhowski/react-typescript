import React from 'react';
import { NavLink } from 'react-router-dom';

// TODO: Breadcrumbs component should be used in PageStructure.tsx
const Breadcrumbs: React.FC = () => {
	return (
		<div className='breadcrumbs'>
			<NavLink to={'/'} className={`breadcrumbs__btn`}>
				Page Title Name
			</NavLink>
		</div>
	);
};

export default Breadcrumbs;
