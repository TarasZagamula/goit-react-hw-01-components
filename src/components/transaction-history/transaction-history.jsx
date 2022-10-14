import { TransactionTable, TransactionTh, TransactionTd, TableContainer } from "./transaction-history.styled";
import PropTypes from "prop-types";


export const TransactionHistory = ({items}) => {
return (
    <TableContainer>
        <TransactionTable>
<thead>
  <tr>
    <TransactionTh>Type</TransactionTh>
    <TransactionTh>Amount</TransactionTh>
    <TransactionTh>Currency</TransactionTh>
  </tr>
</thead>
<tbody>
    {items.map(item => (
    <tr key={item.id}>
    <TransactionTd>{item.type}</TransactionTd>
    <TransactionTd>{item.amount}</TransactionTd>
    <TransactionTd>{item.currency}</TransactionTd>
    </tr>
    ))}
</tbody>
    </TransactionTable>
    </TableContainer>
)
} ;

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};