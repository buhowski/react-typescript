import { useEffect, useState } from 'react';

const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);

		const listener = () => {
			setMatches(media.matches);
		};

		listener();

		media.addEventListener('change', listener);

		return () => media.removeEventListener('change', listener);
	}, [query]);

	return matches;
};

export const useMobileQuery = () => {
	return useMediaQuery('(max-width: 768px)');
};

export const useTabletQuery = () => {
	return useMediaQuery('(max-width: 1024px)');
};

export const useTabletLargeQuery = () => {
	return useMediaQuery('(max-width: 1280px)');
};

export const useMobMenuHeightQuery = () => {
	return useMediaQuery('(max-height: 518px)');
};
