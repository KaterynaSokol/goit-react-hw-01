import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
