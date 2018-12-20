import React from "react";
import { Container, Header, Segment, Divider } from "semantic-ui-react";
import { connect } from "react-redux";

class BlogView extends React.Component {
  render() {
    const { blog = {} } = this.props;

    return (
      <Segment inverted>
        <h4>REDUX Blog</h4>
        <Header as="h2">{blog.title}</Header>
        <Divider horizontal inverted>
          Content
        </Divider>
        <h3>{blog.body}</h3>
        <Divider horizontal inverted>
          Author
        </Divider>
        <h4>{blog.author}</h4>
      </Segment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    blog: state.blogs.find(a => a.id === parseInt(props.match.params.id))
  };
};

export default connect(mapStateToProps)(BlogView);
