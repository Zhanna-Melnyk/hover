import { Dispatch, SetStateAction, useState } from 'react';

import { CellDetails } from '../../shared/types/types';
import { CellView } from '../../components/components';
import { handleMouseEnter } from './helpers/handle-mouse-enter';

type CellProps = {
	field: number;
	details: CellDetails;
	hoveredCellList: CellDetails[];
	setHoveredCellList: Dispatch<SetStateAction<CellDetails[]>>;
};

const Cell = ({
	field,
	details,
	hoveredCellList,
	setHoveredCellList,
}: CellProps): JSX.Element => {
	const [cellHovered, setCellHovered] = useState<boolean>(false);

	return (
		<CellView
			field={field}
			cellHovered={cellHovered}
			handleMouseEnter={() =>
				handleMouseEnter({
					details,
					cellHovered,
					hoveredCellList,
					setCellHovered,
					setHoveredCellList,
				})
			}
		/>
	);
};

export { Cell };
