import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Header, Container } from "semantic-ui-react";
import { getBlogs } from "../reducers/blogs";

class BlogList extends React.Component {
  componentDidMount() {
    this.props.dispatch(getBlogs());
  }

  renderBlogs = () => {
    return this.props.blogs.map(blog => (
      <Card key={blog.id} raised>
        <Card.Content>
          <Card.Header>{blog.title}</Card.Header>
          <Card.Meta>{blog.author}</Card.Meta>
          <Card.Description>{blog.body}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/blogs/${blog.id}`}>View</Link>
        </Card.Content>
      </Card>
    ));
  };

  render() {
    return (
      <Container>
        <Header as="h2" textAlign="center">
          REDUX Blogs
        </Header>
        <hr />
        <br />
        <br />
        <Card.Group itemsPerRow={3}>{this.renderBlogs()}</Card.Group>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  debugger;
  return { blogs: state.blogs };
};
export default connect(mapStateToProps)(BlogList);
