import css from './App.css';

import Profile from './Profile/Profile.jsx';
import user from './Profile/users.json';

import data from './Statistics/data.json';
import Statistics from './Statistics/Statistics.jsx';

import Friends from './Friends/Friends.jsx';
import friendsData from './Friends/friends.json';

import transactionsData from './Transactions/transactions.json';
import Transactions from './Transactions/Transactions.jsx';

export const App = () => {
  return (
    <div className={css.main}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <Friends friends={friendsData} />
      <Transactions transactions={transactionsData} />
    </div>
  );
};
