import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/pages/categories.css';

const categories = [
  { id: 1, name: 'Technology', description: 'Explore the latest in tech.' },
  { id: 2, name: 'Health', description: 'Tips and advice for a healthy life.' },
  { id: 3, name: 'Sports', description: 'Get the latest sports updates.' },
  { id: 4, name: 'News', description: 'Stay informed with the latest news.' },
];

function CategoryDetailPage() {
  const { category } = useParams();
  const categoryData = categories.find((cat) => cat.name === category);

  if (!categoryData) {
    return <h2>Category not found</h2>;
  }

  return (
    <div className="category-detail-page">
      <h1>{categoryData.name}</h1>
      <p>{categoryData.description}</p>
      <Link to="/categories" className="back-link">← Back to Categories</Link>
    </div>
  );
}

export default CategoryDetailPage;
