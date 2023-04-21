import { Dispatch, SetStateAction } from 'react';

import { CellDetails, GameMode } from '../../shared/types/types';
import { Cell } from '../containers';
import { FieldView } from '../../components/components';

type FieldProps = {
	gameMode: GameMode;
	hoveredCellList: CellDetails[];
	setHoveredCellList: Dispatch<SetStateAction<CellDetails[]>>;
};

const Field = ({
	gameMode,
	hoveredCellList,
	setHoveredCellList,
}: FieldProps) => {
	const { field } = gameMode ?? {};

	const cells = [];

	for (let i = 1; i <= field; i++) {
		for (let j = 1; j <= field; j++) {
			const cellDetails = { row: i, col: j };

			cells.push(
				<Cell
					key={`cell-${i}-${j}`}
                    field={field}
					details={cellDetails}
					hoveredCellList={hoveredCellList}
					setHoveredCellList={setHoveredCellList}
				/>
			);
		}
	}

	return <FieldView cells={cells} field={field} />;
};

export { Field };
