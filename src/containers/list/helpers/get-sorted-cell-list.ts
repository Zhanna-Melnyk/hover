import { CellDetails } from '../../../shared/types/types';

const getSortedCellList = (cellList: CellDetails[]): CellDetails[] => {
	return [...cellList].sort((firstCell, secondCell) => {
		if (firstCell.row === secondCell.row) {
			return firstCell.col - secondCell.col;
		} else {
			return firstCell.row - secondCell.row;
		}
	});
};

export { getSortedCellList };
