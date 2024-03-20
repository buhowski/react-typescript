const slideItem = ['balance.webp'];

export const dataSlider = slideItem.map((file) => ({
	itemSrc: require(`../../media/${file}`),
	itemAlt:
		'Films, film industry, ukraine film industry, українське кіно, серіали українською, фільми українською, фільми, український продакшн, індустрія кіно, український режисер, сценарист, продюсер',
	itemType: 'image',
}));
