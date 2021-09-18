import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import NewsService from "../modules/NewsService";
import { Input } from "semantic-ui-react";
import NewsIndex from "./NewsIndex";

const NewsSearch = ({ childToParent }) => {
  const [search, setSearch] = useState(null);

  const handleSearch = (search) => {
    return search;
  };

  useEffect(() => {
    childToParent(search);
  }, [search]);

  return (
    <Input
      id="news-search"
      action="Search"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default NewsSearch;
