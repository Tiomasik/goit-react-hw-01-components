import { Row } from './TableRow.styled';

export const TableRow = ({ type, amount, currency }) => {
    
    return  <Row>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </Row>
};