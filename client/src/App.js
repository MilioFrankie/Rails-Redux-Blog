import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import { Container } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog/:name" component={Blog} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
