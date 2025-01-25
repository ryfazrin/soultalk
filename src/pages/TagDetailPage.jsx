import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/pages/tags.css';

const tags = [
  { id: 1, name: 'Technology', description: 'Explore the latest in tech.' },
  { id: 2, name: 'Health', description: 'Tips and advice for a healthy life.' },
  { id: 3, name: 'Sports', description: 'Get the latest sports updates.' },
  { id: 4, name: 'News', description: 'Stay informed with the latest news.' },
];

function TagDetailPage() {
  const { tag } = useParams();
  const tagData = tags.find((cat) => cat.name === tag);

  if (!tagData) {
    return <h2>tag not found</h2>;
  }

  return (
    <div className="tag-detail-page">
      <h1>{tagData.name}</h1>
      <p>{tagData.description}</p>
      <Link to="/tags" className="back-link">← Back to tags</Link>
    </div>
  );
}

export default TagDetailPage;
