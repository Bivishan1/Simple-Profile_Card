import './ProfileCard.css';
import PropTypes from 'prop-types';

export default function ProfileCard({ imageLink, name, bio }) {
    return (
        <div className="profile-card">
            <img src={imageLink} />
            <h1>{name}</h1>
            <p>{bio}</p>
        </div>
    )
}

ProfileCard.propTypes = {
    imageLink: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired
};