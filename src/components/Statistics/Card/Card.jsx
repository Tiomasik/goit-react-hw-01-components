import { CardStyle } from './Card.styled';

export const Card = ({ label, percentage }) => {
    return (
        <CardStyle>
            <span>{label}</span>
            <span>{percentage}</span>
        </CardStyle>
    )
        
};

