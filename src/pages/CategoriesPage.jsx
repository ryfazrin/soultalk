import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/categories.css';

const categories = [
  { id: 1, name: 'Technology' },
  { id: 2, name: 'Health' },
  { id: 3, name: 'Sports' },
  { id: 4, name: 'News' },
];

function CategoriesPage() {
  return (
    <div className="categories-page">
      <h1>Categories</h1>
      <ul className="categories-list">
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

export default CategoriesPage;
