import React, { useEffect, useState } from "react";
import { Input } from "semantic-ui-react";

const NewsSearch = ({ childToParent }) => {
  const [search, setSearch] = useState(null);

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
