import { Dispatch, SetStateAction } from 'react';
import { OnChangeValue } from 'react-select';

import {
	CellDetails,
	GameMode,
	SelectOption,
} from '../../../shared/types/types';
import { getModeDetailsById } from './get-mode-details-by-id';

type HandlePickMode = (args: {
	gameModes: GameMode[];
	pickedGameMode: GameMode | null;
	setPickedGameMode: Dispatch<SetStateAction<GameMode | null>>;
	setIsGameStarted: Dispatch<SetStateAction<boolean>>;
	setHoveredCellList: Dispatch<SetStateAction<CellDetails[]>>;
	option: OnChangeValue<SelectOption, boolean>;
}) => void;

const handlePickMode: HandlePickMode = ({
	gameModes,
	pickedGameMode,
	setPickedGameMode,
	setIsGameStarted,
	setHoveredCellList,
	option,
}) => {
	setHoveredCellList([]);

	if (pickedGameMode) {
		setIsGameStarted(false);
	}

	const mode = getModeDetailsById((option as SelectOption).value, gameModes);

	setPickedGameMode(mode);
};

export { handlePickMode };
