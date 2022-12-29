import PropTypes from 'prop-types';

import { FriendListItemStyle, OnlineStyle, NameStyle } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    
    return  <FriendListItemStyle>
                <OnlineStyle isOnline={isOnline}>{isOnline}</OnlineStyle>
                <img src={avatar} alt="User avatar" />
                <NameStyle>{name}</NameStyle>
            </FriendListItemStyle>
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}