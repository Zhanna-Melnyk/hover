import styles from './styles.module.scss';

type ListViewProps = {
	cellList: JSX.Element[];
};

const ListView = ({ cellList }: ListViewProps) => {
	return (
		<div className={styles.list}>
			<h2 className={styles.title}>Hover squares</h2>
			{cellList}
		</div>
	);
};

export { ListView };
