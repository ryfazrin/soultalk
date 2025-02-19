import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/creatable';
// eslint-disable-next-line import/no-extraneous-dependencies
import Select from 'react-select';
import ReactQuill from 'react-quill';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-quill/dist/quill.snow.css'; // Import the Quill styles

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

  function handleBodyChange(content, delta, source, editor) {
    const text = editor.getText().trim(); // Get plain text (for character limit validation)
    if (text.length <= 320) {
      setBody(content); // Set the rich text content
    }
  }

  // TODO dummy
  const colourOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <div className="thread-input">
      <input type="text" placeholder="Judul" value={title} onChange={handleTitleChange} />
      {/* <CreatableSelect
        options={options}
        onChange={(newValue) => {
          setCategory(newValue.value);
        }}
      /> */}
      {/* {JSON.stringify(category)} */}
      <Select
        defaultValue={[colourOptions[2], colourOptions[3]]}
        isMulti
        name="colors"
        options={colourOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={(newValue) => {
          setCategory(newValue);
        }}
      />
      <ReactQuill
        value={body}
        // eslint-disable-next-line react/jsx-no-bind
        onChange={handleBodyChange}
        placeholder="What are you thinking?"
        style={{
          minHeight: '100px',
          maxHeight: '200px',
          overflow: 'auto',
        }}
        modules={{
          toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
          ],
        }}
        formats={[
          'header',
          'font',
          'size',
          'bold',
          'italic',
          'underline',
          'strike',
          'blockquote',
          'list',
          'bullet',
          'link',
          'image',
        ]}
      />
      {/* <p className="thread-input__char-left">
        <strong>{body.replace(/<\/?[^>]+(>|$)/g, '').length}</strong>
        /320
      </p> */}
      <button type="submit" onClick={addthread}>thread</button>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
