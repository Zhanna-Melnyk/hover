import { GameMode, SelectOption } from '../../../shared/types/types';

const getOptionsForModeSelect = (modes: GameMode[]): SelectOption[] => {
	return modes.map((mode) => ({
		label: mode.name,
		value: mode.id,
	}));
};

export { getOptionsForModeSelect };
