import { CardFriendsStyle, OnlineStyle, NameStyle } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    
    return  <CardFriendsStyle>
                <OnlineStyle isOnline={isOnline}>{isOnline}</OnlineStyle>
                <img src={avatar} alt="User avatar" />
                <NameStyle>{name}</NameStyle>
            </CardFriendsStyle>
};