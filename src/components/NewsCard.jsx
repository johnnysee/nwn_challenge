import React from "react";
import { Header, Card } from "semantic-ui-react";

const NewsCard = ({ props }) => {
  const publishedAt = new Date(props.publishedAt).toDateString()
  return (
    <Card id="news-item"
      href={props.url}
      image={props.urlToImage}
      header={props.title}
      meta={`By: ${props.author} at ${props.source.name}`}
      description={props.description}
      extra={<Header as="h6">Published at {publishedAt}</Header>}
    />
  );
};

export default NewsCard;
