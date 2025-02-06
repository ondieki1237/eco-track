import React from 'react';
import "./EducationalContent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faRecycle, faLightbulb, faWater } from '@fortawesome/free-solid-svg-icons';

function EducationalContent() {
  const articles = [
    {
      icon: faLeaf,
      title: "Sustainable Living Tips",
      description: "Learn how to reduce your carbon footprint with simple daily habits.",
      readTime: "5 min read"
    },
    {
      icon: faRecycle,
      title: "Recycling Guide",
      description: "Comprehensive guide to proper recycling techniques and practices.",
      readTime: "8 min read"
    },
    {
      icon: faLightbulb,
      title: "Energy Conservation",
      description: "Smart ways to reduce energy consumption in your home.",
      readTime: "6 min read"
    },
    {
      icon: faWater,
      title: "Water Conservation",
      description: "Tips and tricks for reducing water waste in daily life.",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="educational-content">
      <h2>Educational Resources</h2>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <FontAwesomeIcon icon={article.icon} className="article-icon" />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <span className="read-time">{article.readTime}</span>
            <button className="btn btn-outline">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationalContent;