import { UserCard } from "./user-card/UserCard";
import { Statistic } from "./statistics/statistics";
import { FriendList } from "./friends-list/friends-list";
import { Container } from "./container/container.styled";
import { TransactionHistory } from "./transaction-history/transaction-history";
import UserData from 'jsonData/user';
import StatisticData from 'jsonData/data';
import FriendsData from 'jsonData/friends';
import Transactions from 'jsonData/transactions';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Container>
  <UserCard 
  username={UserData.username}
  tag={UserData.tag}
  location={UserData.location} 
  avatar={UserData.avatar} 
  stats={UserData.stats}>
  </UserCard>
  <Statistic 
  title={`Upload stats`}
  stats={StatisticData}>
  </Statistic>
  <FriendList
  friendsData={FriendsData}
  ></FriendList>
  <TransactionHistory items={Transactions}></TransactionHistory>
  </Container>

    </div>
  );
};

