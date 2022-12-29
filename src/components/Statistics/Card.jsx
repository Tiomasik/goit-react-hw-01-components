import PropTypes from 'prop-types';

import { CardStyle } from './Card.styled';

export const Card = ({ label, percentage }) => {
    return (
        <CardStyle>
            <span>{label}</span>
            <span>{percentage}%</span>
        </CardStyle>
    )      
};

Card.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}