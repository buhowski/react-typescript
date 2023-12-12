import { useState, useEffect } from 'react';

const useMediaQuery = (query: string, dimension: string) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const checkMatches = () => {
			if (dimension === 'width') {
				setMatches(window.innerWidth <= parseInt(query));
			} else if (dimension === 'height') {
				setMatches(window.innerHeight <= parseInt(query));
			}
		};

		checkMatches();

		window.addEventListener('resize', checkMatches);

		return () => window.removeEventListener('resize', checkMatches);
	}, [query, dimension]);

	return matches;
};

const useTabletLargeQuery = () => {
	return useMediaQuery('1280', 'width');
};

const useTabletQuery = () => {
	return useMediaQuery('1024', 'width');
};

const useMobMenuHeightQuery = () => {
	return useMediaQuery('518', 'height');
};

export { useTabletQuery, useMobMenuHeightQuery, useTabletLargeQuery };
