import {FriendAvatar, FriendName, FriendStatus, FriendsList, FriendsListItem} from './friends-list.styled';
import PropTypes from "prop-types";



export const FriendList = ({friendsData}) => {
    return (
        <FriendsList>
        {friendsData.map(friend => (
      <FriendsListItem key={friend.id}>
      <FriendStatus status={friend.isOnline}></FriendStatus>
      <FriendAvatar src={friend.avatar}/>
      <FriendName>{friend.name}</FriendName>
      </FriendsListItem> 
        ))}
        </FriendsList>
    )
};

FriendList.propTypes = {
friendsData: PropTypes.array.isRequired,
};