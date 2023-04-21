import {
    HandleMouseEnterProps
} from '../../../shared/types/types';
import { removeUnhoveredCellFromList } from './remove-unhovered-cell-from-list';

const handleMouseEnter = ({
	details,
	cellHovered,
	hoveredCellList,
	setCellHovered,
	setHoveredCellList,
}: HandleMouseEnterProps): void => {
	setCellHovered(!cellHovered);
	if (!cellHovered) {
		setHoveredCellList([...hoveredCellList, details]);
	} else {
		const unhoveredCellIdx = hoveredCellList.findIndex(
			(hoveredCellDetails) => {
				return (
					hoveredCellDetails.row === details.row &&
					hoveredCellDetails.col === details.col
				);
			}
		);

		setHoveredCellList(
			removeUnhoveredCellFromList(hoveredCellList, unhoveredCellIdx)
		);
	}
};

export { handleMouseEnter };

