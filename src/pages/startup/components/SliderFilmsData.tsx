const imageFiles = [
	'startup.jpg',
	'brain.jpg',
	'creatio.jpg',
	'god.jpg',
	'writer.jpg',
	'robotics.jpg',
	'cubic.jpg',
	'draw.jpg',
	'coffee.jpg',
];

export const dataImages = imageFiles.map((file) => ({
	imgSrc: require(`../media/${file}`),
	imgAlt:
		'startup, startup presentation, elevator pitch, invest, ukraine, ukraine startup, it sector, investment, startaper, apply startup, magazine, venture, popular meme, recomendation, news, breaknews, private entrepreneur, buhowski, Журналістика, Journalism, Гонзо, gonzo, magazine redesign, new generation, Новый формат журнала, globalization, ukraine news magazine, лучший журнал, top AI, robotics, Олександр Цьомах, Alexander Tsiomakh, ****',
}));
