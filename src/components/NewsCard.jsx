import React from "react";
import { Header, Card } from "semantic-ui-react";

const NewsCard = ({ props }) => {
  return (
    <Card
      image={props.urlToImage}
      header={props.title}
      meta={`By: ${"Lorenzo Stroe"} at ${"FXStreet"}`}
      description={props.description}
      extra={<Header as="h6">`Published at ${"2020-12-10T20:29:20Z"}`</Header>}
    />
  );
};

export default NewsCard;
