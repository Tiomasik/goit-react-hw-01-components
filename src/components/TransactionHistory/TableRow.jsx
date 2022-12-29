import PropTypes from 'prop-types';

import { Row } from './TableRow.styled';

export const TableRow = ({ type, amount, currency }) => {
    
    return  <Row>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </Row>
};

TableRow.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}