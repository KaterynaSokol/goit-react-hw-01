import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.descr}>
          <th className={css.columns}>Type</th>
          <th className={css.columns}>Amount</th>
          <th className={css.columns}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.item} key={id}>
              <td className={css.columns}>{type}</td>
              <td className={css.columns}>{amount}</td>
              <td className={css.columns}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
