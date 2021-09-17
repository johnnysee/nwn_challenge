import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NewsService from "../modules/NewsService";
import { Input } from "semantic-ui-react";

const NewsSearch = () => {
  return <Input id="news-search" action="Search" placeholder="Search..." />;
};

export default NewsSearch;
