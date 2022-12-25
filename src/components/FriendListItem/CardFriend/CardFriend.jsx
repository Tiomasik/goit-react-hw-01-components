import { CardFriendsStyle, CardFriendsSpanStyle } from './CardFriend.styled';

export const CardFriends = ({ avatar, name, isOnline }) => {
    
    return  <CardFriendsStyle>
                <CardFriendsSpanStyle isOnline={isOnline}>{isOnline}</CardFriendsSpanStyle>
                <img src={avatar} alt="User avatar" width="48" />
                <p>{name}</p>
            </CardFriendsStyle>
};