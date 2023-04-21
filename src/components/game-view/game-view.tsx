import { Dispatch, SetStateAction } from 'react';
import Select, { OnChangeValue } from 'react-select';

import { Field, List } from '../../containers/containers';
import { CellDetails, GameMode, SelectOption } from '../../shared/types/types';

import styles from './styles.module.scss';

type GameViewProps = {
	gameModes: GameMode[];
	options: SelectOption[];
	pickedGameMode: GameMode | null;
	isGameStarted: boolean;
	hoveredCellList: CellDetails[];
	handlePickMode: (option: OnChangeValue<SelectOption, boolean>) => void;
	handleStartGame: () => void;
	setHoveredCellList: Dispatch<SetStateAction<CellDetails[]>>;
};

const GameView = ({
	gameModes,
	options,
	pickedGameMode,
	isGameStarted,
	hoveredCellList,
	handlePickMode,
	handleStartGame,
	setHoveredCellList,
}: GameViewProps): JSX.Element => {
	return (
		<div className={styles.container}>
			{gameModes && (
				<div className={styles.pickModeBlock}>
					<Select
						options={options}
						placeholder="Pick mode"
						onChange={handlePickMode}
						isMulti={false}
					/>
					<button
						className={styles.startBtn}
						disabled={!pickedGameMode}
						onClick={handleStartGame}
					>
						START
					</button>
				</div>
			)}
			{pickedGameMode && isGameStarted && (
				<>
					<Field
						gameMode={pickedGameMode}
						hoveredCellList={hoveredCellList}
						setHoveredCellList={setHoveredCellList}
					/>
					<List hoveredCellList={hoveredCellList} />
				</>
			)}
		</div>
	);
};

export { GameView };
