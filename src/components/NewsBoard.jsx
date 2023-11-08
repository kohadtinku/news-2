import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem'; // Import NewsItem or adjust the import path

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=100&apiKey=c73f6650ace64aac80056d43ed3da9a4`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div className="justify-content-center">
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {articles.map((news, i) => {
        return (
          <NewsItem
            key={i}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
