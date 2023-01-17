import styles from './profile.module.scss';

const Profile = ({ avatar, location, stats, tag, username }) => {
    return (
        <div className={styles.profie}>
            <div className={styles.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={styles.avatar}
                />
                <p className={styles.name}>{username}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.statistics}>
                <li className={styles.item}>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{stats.followers}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{stats.views}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
};

export default Profile;
