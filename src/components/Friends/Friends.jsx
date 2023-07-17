import friendsData from './friends.json';
import FriendListItem from './FriendListItem/FriendListItem';
import css from './friends.module.css';

const Friends = () => {
  return (
    <div className={css.friends_section}>
      <ul className={css.friends_list}>
        {friendsData.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
      </ul>
    </div>
  );
};
export default Friends;
