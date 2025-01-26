import React from 'react';
import { useSelector } from 'react-redux';
import ThreadsList from '../components/thread/ThreadsList';
import '../styles/pages/other-user-profile-page.css';

function OtherUserProfilePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const user = {
    name: 'Jane Smith',
    image: 'https://placehold.co/150',
    bio: 'Photography enthusiast!',
    followers: 300,
    following: 150,
    isFollowing: false,
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    // eslint-disable-next-line no-shadow
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

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
        <ThreadsList threads={threadList} />
      </div>
    </>
  );
}

export default OtherUserProfilePage;
