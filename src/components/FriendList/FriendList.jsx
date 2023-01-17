import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';

import styles from './friend-list.module.scss';

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
};

export default FriendList;

FriendList.defaultProps = {
    friends: [],
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
    })),
};