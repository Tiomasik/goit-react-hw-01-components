import PropTypes from 'prop-types';

import { TableRow } from 'components/TransactionHistory/TableRow';

export const TableBody = ({transactions}) => {
    return (
            <tbody>{transactions.map(transaction => (<TableRow key={transaction.id}
                    type={transaction.type}
                    amount={transaction.amount}
                    currency={transaction.currency}></TableRow>))}
            </tbody>
        
  );
};

TableBody.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ) 
}