import FriendListItem from './FriendListItem';

import styles from './friend-list.module.scss'

const FriendList = ({ friends }) => {

    return (
        <ul className={styles.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline} />
                )
            })}   
        </ul>
    )
}

export default FriendList;