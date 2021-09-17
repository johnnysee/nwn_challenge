import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import NewsCard from "./NewsCard";
import axios from "axios";

const NewsIndex = () => {
  const [news, setNews] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = `https://newsapi.org/v2/everything?q=tesla&from=2021-08-17&sortBy=publishedAt&apiKey=${API_KEY}`;

  const fetchData = async () => {
    const response = await axios.get(API_URL);
    setNews(response.data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const newsList = news.map((article) => {
    return (
      <div id='news-item'>
      <h1>{article.title}</h1>
      <img src={article.urlToImage}></img>
      <p id="news-description">{article.description}</p>
      </div>
    )
  })

  return (
    <>
      <NewsCard />
      <div id="news-index">{newsList}</div>
    </>
  );
};

export default NewsIndex;
