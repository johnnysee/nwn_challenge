import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";
import { Grid } from "semantic-ui-react"

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
      <Grid id="news-index">
      <Grid.Row>{newsList}</Grid.Row></Grid>
    </>
  );
};

export default NewsIndex;
