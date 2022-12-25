import PropTypes from 'prop-types';
//import css from './UserProfile.module.css'
import { Profile, Discription, Status } from './UserProfile.styled';

export const UserProfile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return <Profile>
        <Discription>
            <img
                src={avatar}
                alt="User avatar"
            />
            <p>{username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
        </Discription>
        <Status>
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{likes}</span>
            </li>
        </Status>
        </Profile>
}

UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}