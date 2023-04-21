import { Dispatch, SetStateAction } from 'react';

type HandleStartGameProps = {
	setIsGameStarted: Dispatch<SetStateAction<boolean>>;
};

const handleStartGame = ({ setIsGameStarted }: HandleStartGameProps) => {
	setIsGameStarted(true);
};

export { handleStartGame };
