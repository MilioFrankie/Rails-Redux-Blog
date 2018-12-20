import React from "react";
import { connect } from "react-redux";
import { Segment, Dimmer, Loader } from "semantic-ui-react";
import { Route } from "react-router-dom";
import BlogView from "./BlogView";
import { getBlogs } from "../reducers/blogs";

class FetchBlog extends React.Component {
  state = { loaded: false };

  componentDidMount() {
    this.props.dispatch(getBlogs(this.setLoaded));
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/blogs/:id" component={BlogView} />
        </div>
      );
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      );
    }
  }
}

export default connect()(FetchBlog);
