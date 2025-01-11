import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/creatable';

const options = [
  { value: 'sport', label: 'Sport' },
  { value: 'news', label: 'News' },
  { value: 'tech', label: 'Tech' },
  { value: 'health', label: 'Health' },
];

function ThreadInput({ addThread }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');

  function addthread() {
    if (title.trim() && body.trim()) {
      addThread(title, body, category);
      setTitle('');
      setBody('');
      setCategory('');
    }
  }

  function handleTitleChange({ target }) {
    if (target.value.length <= 200) {
      setTitle(target.value);
    }
  }

  function handleBodyChange({ target }) {
    if (target.value.length <= 320) {
      setBody(target.value);
    }
  }

  return (
    <div className="thread-input">
      <input type="text" placeholder="Judul" value={title} onChange={handleTitleChange} />
      <textarea type="text" placeholder="What are you thinking?" value={body} onChange={handleBodyChange} />
      <p className="thread-input__char-left">
        <strong>{body.length}</strong>
        /320
      </p>
      <CreatableSelect
        options={options}
        onChange={(newValue) => {
          setCategory(newValue.value);
        }}
      />
      <button type="submit" onClick={addthread}>thread</button>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
