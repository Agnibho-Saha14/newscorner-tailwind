import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div className="px-4 py-6">
      <h2 className="text-center text-3xl font-bold mb-6">
        Latest{" "}
        <span className="bg-red-600 text-white px-2 py-1 rounded">
          News
        </span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Newsboard;
