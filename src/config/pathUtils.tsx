import { startupSubPaths } from '../routesData';

const collectChildren = (tree: Record<string, any>, parent: string): string[] => {
	const node = tree[parent];
	if (!node) return [];
	let children: string[] = [];

	if (Array.isArray(node)) {
		children.push(...node);
	} else {
		for (const key in node) {
			children.push(key);
			children.push(...collectChildren(node, key));
		}
	}

	return children;
};

// Check if current path is active
export const isPathActive = (paths: string[], currentPath: string) => {
	const pathWithoutLang = currentPath.replace(/^\/(en|ua|ru)/, '') || '/';
	return paths.some((path) => path === pathWithoutLang || `${path}/` === pathWithoutLang);
};

// Check if subpath is active
export const isPathSubActive = (parentPath: string, currentPath: string) => {
	const subPaths = collectChildren(startupSubPaths, parentPath);
	if (!subPaths.length) return false;
	return isPathActive(subPaths, currentPath);
};
