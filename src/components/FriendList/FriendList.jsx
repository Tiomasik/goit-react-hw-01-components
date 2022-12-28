import PropTypes from 'prop-types';

import { FriendListItem } from 'components/FriendList/FriendListItem';
import { SectionFriendList, FriendListStyle } from './FriendList.styled';


export const FriendList = ({friends}) => {
    return (
        <SectionFriendList>
            <FriendListStyle>
                {friends.map(friend => (<FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}></FriendListItem>))}
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