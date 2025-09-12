// Get parent path in tree
export const findParentPath = (
	tree: Record<string, any>,
	target: string,
	parent: string | null = null
): string | null => {
	for (const key in tree) {
		if (key === target) return parent;
		const child = tree[key];

		if (Array.isArray(child)) {
			if (child.includes(target)) return key;
		}

		if (child && typeof child === 'object') {
			const res = findParentPath(child, target, key);
			if (res) return res;
		}
	}
	return null;
};
