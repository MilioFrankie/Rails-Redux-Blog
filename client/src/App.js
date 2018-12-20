import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import { Container } from "semantic-ui-react";
import FetchBlog from './components/FetchBlog'

const App = () => (
  <Fragment>
    <Container>
      <Switch>
        <Route exact path="/" component={BlogList} />
        <Route path = "/blogs" component={FetchBlog}/>
      </Switch>
    </Container>
  </Fragment>
);

export default App;
