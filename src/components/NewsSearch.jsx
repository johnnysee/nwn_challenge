import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import NewsService from "../modules/NewsService";
import { Input } from "semantic-ui-react";
import NewsIndex from "./NewsIndex"

const NewsSearch = () => {
  const [search, setSearch] = useState(null)

  const handleSearch = () => {
    
  }
  return <Input id="news-search" action="Search" placeholder="Search..." />;
};

export default NewsSearch;
