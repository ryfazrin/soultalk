import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadsList from '../components/thread/ThreadsList';
import '../styles/pages/user-profile-page.css';

function UserProfilePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

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

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <>
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
      <div>
        <ThreadsList threads={threadList} />
      </div>
    </>
  );
}

export default UserProfilePage;
