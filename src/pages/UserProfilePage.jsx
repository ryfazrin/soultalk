import React, { useState } from 'react';
import '../styles/pages/user-profile-page.css';

function UserProfilePage() {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'I love coding!',
    followers: 120,
    following: 80,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="profile-card">
      <div className="profile-image">
        <img
          src="https://placehold.co/150"
          alt="Profile"
        />
        <div className="profile-stats">
          <div className="profile-followers">
            <strong>{userData.followers}</strong>
            <p>Followers</p>
          </div>
          <div className="profile-following">
            <strong>{userData.following}</strong>
            <p>Following</p>
          </div>
        </div>
      </div>
      <div className="profile-content">
        <h2>Your Profile</h2>
        <form className="profile-form">
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            className="profile-input"
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className="profile-input"
          />
          <textarea
            name="bio"
            value={userData.bio}
            onChange={handleInputChange}
            className="profile-textarea"
          />
          <button type="button" className="save-button">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserProfilePage;
