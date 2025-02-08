import React from "react";
import "./EducationalContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faRecycle,
  faLightbulb,
  faWater,
  faPodcast,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";

function EducationalContent() {
  const articles = [
    {
      icon: faLeaf,
      title: "Sustainable Living Tips",
      description: "Learn how to reduce your carbon footprint with simple daily habits.",
      readTime: "5 min read",
    },
    {
      icon: faRecycle,
      title: "Recycling Guide",
      description: "Comprehensive guide to proper recycling techniques and practices.",
      readTime: "8 min read",
    },
    {
      icon: faLightbulb,
      title: "Energy Conservation",
      description: "Smart ways to reduce energy consumption in your home.",
      readTime: "6 min read",
    },
    {
      icon: faWater,
      title: "Water Conservation",
      description: "Tips and tricks for reducing water waste in daily life.",
      readTime: "4 min read",
    },
  ];

  const podcasts = [
    {
      icon: faPodcast,
      title: "The Climate Pod",
      description: "Weekly discussions on climate policies, sustainability, and innovations.",
      link: "https://www.theclimatepod.com/",
    },
    {
      icon: faHeadphones,
      title: "Sustainability Defined",
      description: "Breaks down sustainability topics in an easy and fun way.",
      link: "https://sustainabilitydefined.com/",
    },
    {
      icon: faPodcast,
      title: "How to Save a Planet",
      description: "Inspiring stories and solutions for environmental change.",
      link: "https://gimletmedia.com/shows/howtosaveaplanet",
    },
  ];

  return (
    <div className="educational-content">
      <h2 className="title">Educational Resources</h2>

      {/* Articles Section */}
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

      {/* Podcasts Section */}
      <h2 className="title">Eco-Friendly Podcasts</h2>
      <div className="podcasts-grid">
        {podcasts.map((podcast, index) => (
          <div key={index} className="podcast-card">
            <FontAwesomeIcon icon={podcast.icon} className="podcast-icon" />
            <h3>{podcast.title}</h3>
            <p>{podcast.description}</p>
            <a href={podcast.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Listen Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationalContent;
