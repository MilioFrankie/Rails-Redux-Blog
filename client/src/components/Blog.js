import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <h1>{this.props.match.params.name}</h1>
    </div>
  );
};

// const mapStateToProps = state => ({ blog: state.blog });

export default withRouter(connect()(Blog));
