// LastWords.tsx
import React from 'react';

interface Props {
	lastWords: string;
}

const LastWords: React.FC<Props> = ({ lastWords }) => {
	return <p className='last-words'>{lastWords}</p>;
};

export default LastWords;
