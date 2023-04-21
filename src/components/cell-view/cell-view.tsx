import clsx from 'clsx';

import styles from './styles.module.scss';

type CellViewProps = {
	field: number;
	cellHovered: boolean;
	handleMouseEnter: () => void;
};

const CellView = ({
	field,
	cellHovered,
	handleMouseEnter,
}: CellViewProps): JSX.Element => {
	const cellStyle = {
		'--backgroundColor': cellHovered ? '#106cc6' : 'white',
	} as React.CSSProperties;

	return (
		<div
			className={clsx(styles.cell, styles[`field${field}`])}
			style={cellStyle}
			onMouseEnter={handleMouseEnter}
		></div>
	);
};

export { CellView };
