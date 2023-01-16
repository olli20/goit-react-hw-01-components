import styles from './friends-list-item.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    const isOnlineClassList = isOnline ? `${styles.status} ${styles.active}` : styles.status;
    return (
        
        <li className="item">
            <span className={isOnlineClassList}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    );
};

export default FriendListItem;