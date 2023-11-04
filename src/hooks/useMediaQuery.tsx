import { useState, useEffect } from 'react';

const useMediaQuery = (query: string, dimension: string) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const checkMatches = () => {
			if (dimension === 'width') {
				setMatches(window.innerWidth <= parseInt(query));
			} else if (dimension === 'height') {
				setMatches(
					window.innerHeight <= parseInt(query) &&
						window.innerWidth >= 1281 &&
						window.innerWidth <= 1920
				);
			}
		};

		checkMatches();

		window.addEventListener('resize', checkMatches);

		return () => window.removeEventListener('resize', checkMatches);
	}, [query, dimension]);

	return matches;
};

const useTabletQuery = () => {
	return useMediaQuery('1024', 'width');
};

export { useTabletQuery };
