// Polyfill for Object.hasOwn / fixes yarn build using old "react-snap": "^1.23.0" with  "react-markdown": "^10.1.0",
if (!(Object as any).hasOwn) {
	Object.defineProperty(Object, 'hasOwn', {
		value: function (instance: any, property: PropertyKey): boolean {
			if (instance == null) {
				throw new TypeError('Cannot convert undefined or null to object');
			}
			return Object.prototype.hasOwnProperty.call(instance, property);
		},
		configurable: true,
		writable: true,
	});
}

export {};
