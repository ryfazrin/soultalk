import React from 'react';
import '../styles/pages/other-user-profile-page.css';

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
    <>
      <div className="other-profile">
        <div className="other-profile-header">
          <div className="other-profile-image">
            <div className="other-image-placeholder">150 x 150</div>
          </div>
          <div className="other-profile-details">
            <h1 className="other-profile-name">Jane Smith</h1>
            <p className="other-profile-bio">Photography enthusiast!</p>
          </div>
        </div>
        <div className="other-profile-stats">
          <div>
            <strong>300</strong>
            <div>Followers</div>
          </div>
          <div>
            <strong>150</strong>
            <div>Following</div>
          </div>
        </div>
        <div className="other-profile-action">
          <button type="button" className="other-follow-button">
            Follow
          </button>
        </div>
      </div>
      <div>
        TODO: Thread List User Profile
      </div>
    </>
  );
}

export default OtherUserProfilePage;
