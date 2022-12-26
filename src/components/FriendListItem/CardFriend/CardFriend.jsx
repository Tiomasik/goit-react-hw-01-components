import { CardFriendsStyle, OnlineStyle, NameStyle } from './CardFriend.styled';

export const CardFriends = ({ avatar, name, isOnline }) => {
    
    return  <CardFriendsStyle>
                <OnlineStyle isOnline={isOnline}>{isOnline}</OnlineStyle>
                <img src={avatar} alt="User avatar" />
                <NameStyle>{name}</NameStyle>
            </CardFriendsStyle>
};