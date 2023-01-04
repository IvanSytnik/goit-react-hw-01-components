import css from './FriendList.module.css'
import PropTypes from 'prop-types';

const FriendList = ({friends}) => {
  console.log(friends)
    return(
      <div className={css.friends}>
        <ul className={css.friends__list}>
         {friends.map(friend => (
        <li className={css.friends__item} key={friend.id}>
        <span className={`${css.friends__status} ${css[friend.isOnline]}`}>{friend.isOnline}</span>
        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p className={css.friends__name}>{friend.name}</p>
      </li>
    ))}
        </ul>
        </div>
    )
}
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
}