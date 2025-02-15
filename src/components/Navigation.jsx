import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import SignOutButton from './SignOutButton';

function Navigation({ authUser, signOut }) {
  const { id, avatar, name } = authUser;

  return (
    <div className="navigation">
      <Link to="/profile/me">
        <img src={avatar} alt={id} title={name} />
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tags">Tags</Link>
        <Link to="/create-post">Create Post</Link>
      </nav>
      <SignOutButton
        signOut={signOut}
        name={name}
      />
    </div>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
