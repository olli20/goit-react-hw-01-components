import PropTypes from 'prop-types';
import styles from './friend-list-item.module.scss'

const FriendListItem = ({ avatar, name, isOnline }) => {
    const isOnlineClassList = isOnline ? `${styles.status} ${styles.active}` : styles.status;
    return (
        <li className={styles.item}>
            <span className={isOnlineClassList}></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    );
};

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}