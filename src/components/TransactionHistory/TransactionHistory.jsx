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