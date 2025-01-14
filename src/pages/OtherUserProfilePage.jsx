import React from 'react';
import '../styles/pages/profile-page.css';

function OtherUserProfilePage() {
  const user = {
    name: 'Jane Smith',
    image: 'https://placehold.co/150',
    bio: 'Photography enthusiast!',
    followers: 300,
    following: 150,
    isFollowing: false,
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-image">
          <img
            src={user.image || 'https://placehold.co/150'}
            alt={`${user.name}'s Profile`}
          />
        </div>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <div className="profile-stats">
          <div className="profile-followers">
            <strong>{user.followers}</strong>
            <p>Followers</p>
          </div>
          <div className="profile-following">
            <strong>{user.following}</strong>
            <p>Following</p>
          </div>
        </div>
        <button
          type="button"
          className="follow-button"
          onClick={user.onFollowToggle}
        >
          {user.isFollowing ? 'Unfollow' : 'Follow'}
        </button>
      </div>
    </div>
  );
}

export default OtherUserProfilePage;
