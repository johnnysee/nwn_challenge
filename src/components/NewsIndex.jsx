import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import NewsCard from "./NewsCard";
import axios from "axios";

const NewsIndex = ({ props }) => {
  const [news, setNews] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = `https://newsapi.org/v2/everything?q=${props}&sortBy=publishedAt&apiKey=${API_KEY}`;

  const fetchData = async () => {
    const response = await axios.get(API_URL);
    setNews(response.data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const newsList = news.map((article) => {
    return <NewsCard props={article} />;
  });

  return (
    <>
      <div id="news-index">{newsList}</div>
    </>
  );
};

export default NewsIndex;
