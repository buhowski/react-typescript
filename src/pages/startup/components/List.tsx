import React from 'react';

interface ListProps {
	items: string[];
}

const List: React.FC<ListProps> = ({ items }) => {
	return (
		<ul>
			{items.map((item, i) => (
				<li key={i}>{item}</li>
			))}
		</ul>
	);
};

export default List;
