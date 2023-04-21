import { Dispatch, SetStateAction } from 'react';

import { CellDetails } from '../types';

type HandleMouseEnterProps = {
	details: CellDetails;
	cellHovered: boolean;
	hoveredCellList: CellDetails[];
	setCellHovered: Dispatch<SetStateAction<boolean>>;
	setHoveredCellList: Dispatch<SetStateAction<CellDetails[]>>;
};

export type { HandleMouseEnterProps };
