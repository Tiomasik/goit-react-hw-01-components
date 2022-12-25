import PropTypes from 'prop-types';

 import { CardFriends } from 'components/FriendListItem/CardFriend/CardFriend';

// import { StatisticsStyle, BorderStyle } from './Statistics.styled';


export const FriendListItem = ({friends}) => {
    
    return (
        <section>
            <ul>
                {friends.map(friend => (<CardFriends key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}></CardFriends>))}
            </ul>
        </section>
        
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