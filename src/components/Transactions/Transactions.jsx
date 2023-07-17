import PropTypes from 'prop-types';
import css from './transactions.module.css';

const Transactions = ({ transactions }) => {
  return (
    <table className={css.transactions_history}>
      <thead className={css.table_head}>
        <tr>
          <th className={css.table_head_column}>Type</th>
          <th className={css.table_head_column}>Amount</th>
          <th className={css.table_head_column}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => {
          const { id, type, amount, currency } = transaction;

          return (
            <tr key={id} className={css.table_row}>
              <td className={css.transaction_type}>{type}</td>
              <td className={css.transaction_amount}>{amount}</td>
              <td className={css.transaction_currency}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Transactions;

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
