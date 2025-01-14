import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { postedAt } from '../../utils';

function ThreadItem({
  id, title, body, category, createdAt, user, authUser, totalComments,
}) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  return (
    <div className="thread-item">
      <div className="thread-item__user-photo">
        <img src={user.avatar} alt={user} />
      </div>
      <div className="thread-item__detail">
        <header>
          <div className="thread-item__user-info">
            <Link to={`/profile/${user.id}`} className="thread-item__user-name">
              {user.name}
            </Link>
          </div>
          <p className="thread-item__created-at">{postedAt(createdAt)}</p>
        </header>
        <article>
          <Link to={`/threads/${id}`} className="thread-item__user-name">
            <h2>{title}</h2>
          </Link>
          <p>
            Kategori:
            {' '}
            <Link to={`/category/${category}`} className="category-link">
              {category}
            </Link>
          </p>
          {
            // like && (
            //   <div className="talk-item__likes">
            //     <p>
            //       <button type="button" aria-label="like" onClick={onLikeClick}>
            //         { isTalkLiked ? <FaHeart style={{ color: 'red' }} /> : <FaRegHeart />}
            //       </button>
            //       {' '}
            //       {likes.length}
            //     </p>
            //   </div>
            // )
          }
          <div className="thread-item__likes">
            <p>
              <button type="button" aria-label="like">
                <FaRegHeart />
              </button>
              {' '}
              0
            </p>
          </div>
          <p>
            {totalComments}
            {' '}
            Komentar
          </p>
        </article>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const ThreadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  totalComments: PropTypes.number.isRequired,
};

ThreadItem.propTypes = {
  ...ThreadItemShape,
};

export { ThreadItemShape };

export default ThreadItem;
