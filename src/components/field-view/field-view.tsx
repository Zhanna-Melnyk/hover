import styles from './styles.module.scss';

type FieldViewProps = {
	cells: JSX.Element[];
	field: number;
};

const FieldView = ({
	cells,
	field,
}: FieldViewProps): JSX.Element => {
	const fieldStyle = {
		'--colAmount': field,
	} as React.CSSProperties;

	return (
		<div className={styles.field} style={fieldStyle}>
			{cells.length > 0 && cells}
		</div>
	);
};

export { FieldView };
