import PropTypes from 'prop-types';

import { CardFriends } from 'components/FriendList/CardFriend';
import { SectionFriendList, FriendListStyle } from './FriendList.styled';


export const FriendList = ({friends}) => {
    return (
        <SectionFriendList>
            <FriendListStyle>
                {friends.map(friend => (<CardFriends
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}></CardFriends>))}
            </FriendListStyle>
        </SectionFriendList>
        
  );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )
    
}