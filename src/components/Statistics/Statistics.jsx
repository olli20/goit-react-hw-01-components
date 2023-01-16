import styles from './statistics.module.scss'

const Statistics = ({ title, stats }) => {

    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>

            <ul className={styles.list}>
                {stats.map(item => {
                    return (
                        <li key={item.id} className={styles.item}>
                            <span className={styles.label}>{item.label}</span>
                            <span className={styles.percentage}>{item.percentage}%</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    )
};

export default Statistics;