import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadInput from '../components/thread/ThreadInput';
import { asyncAddThread } from '../states/threads/action';

function CreatePostPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onAddThread = (title, body, category) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  return (
    <ThreadInput addThread={onAddThread} />
  );
}

export default CreatePostPage;
