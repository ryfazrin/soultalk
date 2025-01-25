import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/tags.css';

const categories = [
  { id: 1, name: 'Technology' },
  { id: 2, name: 'Health' },
  { id: 3, name: 'Sports' },
  { id: 4, name: 'News' },
];

function TagsPage() {
  return (
    <div className="tags-page">
      <h1>Tags</h1>
      <ul className="tags-list">
        {categories.map((category) => (
          <li key={category.id} className="category-item">
            <Link to={`/category/${category.name}`} className="category-link">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TagsPage;
