import { ListView } from '../../components/components';
import { CellDetails } from '../../shared/types/types';
import { getSortedCellList } from './helpers/get-sorted-cell-list';

import styles from './styles.module.scss';

type ListProps = {
	hoveredCellList: CellDetails[];
};

const List = ({ hoveredCellList }: ListProps) => {
	const sortedList = getSortedCellList(hoveredCellList);

	const cellList = sortedList.map((hoveredCell) => {
		const { row, col } = hoveredCell;
		return (
			<p key={`list-${row}-${col}`} className={styles.item}>
				row: {hoveredCell.row} col: {hoveredCell.col};
			</p>
		);
	});

	return <ListView cellList={cellList} />;
};

export { List };
