import React, { useState } from "react";
import NewsSearch from "./components/NewsSearch";
import { Container, Menu, Header, Image } from "semantic-ui-react";
import NewsIndex from "./components/NewsIndex";
import logo from "./nwn.png";

const App = () => {
  const [search, setSearch] = useState(null);

  const childToParent = (childData) => {
    setSearch(childData)
  };
  return (
    <>
      <Menu style={{ borderRadius: 0, background: "" }}>
        <Menu.Item>
          <Image src={logo} size="tiny" centered />
        </Menu.Item>
        <Header as="h2" textAlign="center">News Wire Network - News From Around the World</Header>
        <Menu.Menu position="right">
          <Menu.Item>
            <NewsSearch childToParent={childToParent} />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Container>
        <p>{search}</p>
        <NewsIndex props={search}/>
      </Container>
    </>
  );
};

export default App;
