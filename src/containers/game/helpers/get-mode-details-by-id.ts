import { GameMode } from '../../../shared/types/types';

const getModeDetailsById = (
	id: number | null,
	modes: GameMode[]
): GameMode | null => {
	return modes.find((mode) => mode.id === id) ?? null;
};

export { getModeDetailsById };
