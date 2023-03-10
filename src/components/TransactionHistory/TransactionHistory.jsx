import PropTypes from 'prop-types';
import styles from './transaction-history.module.scss';

const TransactionHistory = ({ items }) => {

    return (
        <table className={styles.transactionHistory}>
            <thead className={styles.tableHead}>
                <tr className={styles.tableHeadRow}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id} className={styles.tableRow}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
};

export default TransactionHistory;

TransactionHistory.defaultProps = {
    items: [],
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })),
};