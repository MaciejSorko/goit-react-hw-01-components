import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendsListItem = ({ friend: { avatar, name, isOnline, id } }) => {
   const statusClass = clsx(css.status, { [css.online]: isOnline });

  return (
    <li key={id} className={css.item}>
      <span className={statusClass}>{isOnline}</span>
      <img
        className={css.avatar}
        src={avatar}
        alt={`${name} avatar`}
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default FriendsListItem;
