import PropTypes from 'prop-types';

import { TableBody } from 'components/TransactionHistory/TableBody';
import { TableHead } from 'components/TransactionHistory/TableHead';
import { TransactionHistoryStyle, Table } from './TransactionHistory.styled';


export const TransactionHistory = ({ transactions }) => {
    return (
        <TransactionHistoryStyle>
            <Table>
                <TableHead></TableHead>
                <TableBody transactions={transactions}></TableBody>
            </Table>
        </TransactionHistoryStyle>        
  );
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ) 
}