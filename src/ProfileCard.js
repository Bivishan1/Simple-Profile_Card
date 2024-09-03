import './ProfileCard.css';

export default function ProfileCard({ imageLink, name, bio }) {
    return (
        <div className="profile-card">
            <img src={imageLink} />
            <h1>{name}</h1>
            <p>{bio}</p>
        </div>
    )
}