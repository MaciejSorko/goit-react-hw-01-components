import css from './App.css';

import Profile from './Profile/Profile.jsx';
import user from './Profile/users.json';

import data from './Statistics/data.json';
import Statistics from './Statistics/Statistics.jsx';

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
    </div>
  );
};
