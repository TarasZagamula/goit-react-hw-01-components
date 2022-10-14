import {UserCardStyled, UserAvatarStyled, UserDescriptionStyled, UserLabelStyled, UserLocationStyled, UserNameStyled, UserQuantityStyled, UserStatsStyled, UserTagStyled, UserStatsItem} from './UserCard.styled'
import {randomColor} from '../randomColor/random-color';
import PropTypes from "prop-types";


   export const UserCard = ({username, tag, location, avatar, stats}) => {
    return  (
    <UserCardStyled>
    <UserDescriptionStyled>
        <UserAvatarStyled src={avatar}/>
        <div>
        <UserNameStyled>{username}</UserNameStyled>
        <UserTagStyled>@{tag}</UserTagStyled>
        <UserLocationStyled>{location}</UserLocationStyled>
        </div>
    </UserDescriptionStyled>
    <UserStatsStyled>
    <UserStatsItem statsColor={randomColor}>
        <UserLabelStyled>followers</UserLabelStyled>
        <UserQuantityStyled>{stats.followers}</UserQuantityStyled>
    </UserStatsItem>
    <UserStatsItem statsColor={randomColor}>
        <UserLabelStyled>views</UserLabelStyled>
        <UserQuantityStyled>{stats.views}</UserQuantityStyled>
    </UserStatsItem>
    <UserStatsItem statsColor={randomColor}>
        <UserLabelStyled>likes</UserLabelStyled>
        <UserQuantityStyled>{stats.likes}</UserQuantityStyled>
    </UserStatsItem>
    </UserStatsStyled> 
        </UserCardStyled>
        ) 
    };       


UserCard.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string, 
    location: PropTypes.string, 
    avatar: PropTypes.string, 
    stats: PropTypes.object, 
}

    