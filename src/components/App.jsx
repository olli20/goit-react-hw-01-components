import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import styles from './app.module.scss';

import user from '../data/user.json';
import data from '../data/stats-data.json';
import friends from '../data/friends.json';
import transactions from "../data/transactions.json";

export const App = () => {
  return (
    <div className={styles.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
