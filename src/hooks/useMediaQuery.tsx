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

const useMobMenuHeightQuery = () => {
	return useMediaQuery('518', 'height');
};

const useMobileQuery = () => {
	return useMediaQuery('768', 'width');
};

const useTabletQuery = () => {
	return useMediaQuery('1024', 'width');
};

const useTabletLargeQuery = () => {
	return useMediaQuery('1280', 'width');
};

export { useMobMenuHeightQuery, useMobileQuery, useTabletQuery, useTabletLargeQuery };
