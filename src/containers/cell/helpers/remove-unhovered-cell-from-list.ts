import { CellDetails } from '../../../shared/types/types';

const removeUnhoveredCellFromList = (
	list: CellDetails[],
	unhoveredCellIdx: number
): CellDetails[] => {
	const listWithoutUnhoveredCell = [...list];

	listWithoutUnhoveredCell.splice(unhoveredCellIdx, 1);

	return listWithoutUnhoveredCell;
};

export { removeUnhoveredCellFromList };
