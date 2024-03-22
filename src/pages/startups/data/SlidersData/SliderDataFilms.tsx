// import img from '../../media/space.webp';

const slideItems = [
	{
		src: 'https://imdb-video.media-imdb.com/vi611693081/1434659607842-pgv4ql-1450731915340.mp4?Expires=1711208187&Signature=ZHD8YR45I-ojGsIiZtqDr18OBnWj9Vj9jH8j~gnXK8SzM2QJkIdBm1rFyrv0QNkZ1UofzvhXbeajkrlQzsY9tVFVMMTJZhkdachQMgwFWpiFmbAdZQjU7LoFMAavcBV-QRd-IN4JXnkgXh3iqJVH0-~gLtDX3clnujq8tjVKCgsZl842G4yfTH5dhvvY1F2EqfAvPO-R1SCoaG3EfEkgBpm7LyRQiGTS5E-HUNp37bCAE6HMH8qStBdhk66QnljP9vjJernJOYqsqtTekWDiO2-22FDryegZJjwEoaxod6F7xup7B7lqsULSSWIY~6KSK55uFfZdCBbsQ78hJLv61g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
		type: 'video',
		poster: '',
		alt: 'Films, film industry, ukraine film industry, українське кіно, серіали українською, фільми українською, фільми, український продакшн, індустрія кіно, український режисер, сценарист, продюсер',
	},
	{
		src: 'img',
		type: 'img',
		poster: '',
		alt: 'Films, film industry, ukraine film industry, українське кіно, серіали українською, фільми українською, фільми, український продакшн, індустрія кіно, український режисер, сценарист, продюсер',
	},
];

export const dataSlider = slideItems.map((item) => ({
	itemSrc: item.src,
	itemAlt: item.alt,
	itemType: item.type,
	itemPoster: item.poster,
}));
