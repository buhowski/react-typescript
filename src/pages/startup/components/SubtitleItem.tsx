// LastWords.tsx
import React from 'react';

interface Props {
	subtitle: string;
}

const LastWords: React.FC<Props> = ({ subtitle }) => {
	return <h3 className='idea-block__subtitle'>{subtitle}</h3>;
};

export default LastWords;
