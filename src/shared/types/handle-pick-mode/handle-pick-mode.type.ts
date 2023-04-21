import { Dispatch, SetStateAction } from 'react';
import { OnChangeValue } from 'react-select';

import { GameMode, SelectOption } from '../types';

type HandlePickMode = (args: {
	gameModes: GameMode[];
	pickedGameMode: GameMode | null;
	setPickedGameMode: Dispatch<SetStateAction<GameMode | null>>;
	setIsGameStarted: Dispatch<SetStateAction<boolean>>;
}) => (option: OnChangeValue<SelectOption, boolean>) => void;

export type { HandlePickMode };
