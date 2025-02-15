import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';

function CommentInput({ addComment }) {
  const [content, setContent] = useState('');

  function addcomment() {
    if (content.trim()) {
      addComment(content);
    }
  }

  function handleContentChange(contentEnd, delta, source, editor) {
    const text = editor.getText().trim(); // Get plain text (for character limit validation)
    if (text.length <= 320) {
      setContent(contentEnd);
    }
  }

  return (
    <div className="thread-input">
      <ReactQuill
        value={content}
        // eslint-disable-next-line react/jsx-no-bind
        onChange={handleContentChange}
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
      <button type="submit" onClick={addcomment}>comment</button>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
