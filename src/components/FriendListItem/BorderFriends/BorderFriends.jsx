import PropTypes from 'prop-types';

import { CardFriends } from 'components/FriendListItem/CardFriend/CardFriend';
import { BorderStyle, BorderListStyle } from './BorderFriends.styled';


export const FriendListItem = ({friends}) => {
    return (
        <BorderStyle>
            <BorderListStyle>
                {friends.map(friend => (<CardFriends
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}></CardFriends>))}
            </BorderListStyle>
        </BorderStyle>
        
  );
};

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )
    
}