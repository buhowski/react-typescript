import { startupSubPaths } from '../pages/startups/startupsRoutes';

// Check if current path is active
export const isPathActive = (paths: string[], currentPath: string) => {
	const pathWithoutLang = currentPath.replace(/^\/(en|ua|ru)/, '') || '/';
	return paths.some((path) => path === pathWithoutLang || `${path}/` === pathWithoutLang);
};

// Check if subpath is active
export const isPathSubActive = (parentPath: string, currentPath: string) => {
	const subPaths = startupSubPaths[parentPath];
	if (!subPaths) return false;
	return isPathActive(subPaths, currentPath);
};
