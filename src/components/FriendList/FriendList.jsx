import css from './FriendList.module.css'
import PropTypes from 'prop-types';

const FriendListItem = ({avatar, name, isOnline, key}) => {
  return(
    <li className={css.friends__item} key={key}>
        <span className={`${css.friends__status} ${css[isOnline]}`}>{isOnline}</span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.friends__name}>{name}</p>
      </li>
  )
}

const FriendList = ({friends}) => {
  console.log(friends)
    return(
      <div className={css.friends}>
        <ul className={css.friends__list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    
        </ul>
        </div>
    )
}
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
}