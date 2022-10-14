import styled from "@emotion/styled";

export const FriendsList = styled.ul`
display: flex;
flex-wrap: wrap;
list-style: none;
padding: 0;
margin-top: 10px;
margin-bottom: 0;
`;
export const FriendsListItem = styled.li`
position: relative;
background-color: grey;
border-radius: 8px;
border: 2px solid;
padding: 10px;
margin-right: 10px;
margin-bottom: 10px;
`;
export const  FriendStatus = styled.span`
position: absolute;
bottom: 0px;
right: 10px;
display: inline-block;
width: 20px;
height: 20px;
border: 2px solid;
border-radius: 50px 50px 0px 0px;
background-color: ${props => props.status ? `green`: `red`};
`;
export const FriendAvatar = styled.img`
width: 100px
`;
export const FriendName = styled.p`
margin-bottom: 4px;
font-weight: 700;
font-size: 18px;
line-height: 2;
letter-spacing: 0.06em;`;



