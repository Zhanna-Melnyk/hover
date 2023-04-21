import { useEffect, useState } from 'react';
import { OnChangeValue } from 'react-select';

import { GameView } from '../../components/components';
import { CellDetails, GameMode, SelectOption } from '../../shared/types/types';
import {
	getOptionsForModeSelect,
	handlePickMode,
	handleStartGame,
} from './helpers/helpers';

const Game = (): JSX.Element => {
	const [gameModes, setGameModes] = useState<GameMode[]>([]);
	const [pickedGameMode, setPickedGameMode] = useState<GameMode | null>(null);
	const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
	const [hoveredCellList, setHoveredCellList] = useState<CellDetails[]>([]);

	useEffect(() => {
		fetch('https://60816d9073292b0017cdd833.mockapi.io/modes')
			.then((result) => result.json())
			.then((data) => setGameModes(data));
	}, []);

	const selectOptions = getOptionsForModeSelect(gameModes);

	const onPickMode = (option: OnChangeValue<SelectOption, boolean>): void => {
		handlePickMode({
			gameModes,
			pickedGameMode,
			setPickedGameMode,
			setIsGameStarted,
			setHoveredCellList,
			option,
		});
	};

	const onStartGame = (): void => {
		handleStartGame({ setIsGameStarted });
	};

	return (
		<GameView
			gameModes={gameModes}
			options={selectOptions}
			pickedGameMode={pickedGameMode}
			isGameStarted={isGameStarted}
			hoveredCellList={hoveredCellList}
			handlePickMode={onPickMode}
			handleStartGame={onStartGame}
			setHoveredCellList={setHoveredCellList}
		/>
	);
};

export { Game };
