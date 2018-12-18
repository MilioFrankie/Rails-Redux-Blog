import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { dispatch } from "rxjs/internal/observable/range";

const BlogList = ({ blogs, id }) => (
  <ul>
    {blogs.map(b => {
      return (
        <div>
          <Link
            to={`/blog/${b.name}`}
            onClick={() => dispatch({ type: "BLOG", id })}
          >
            <li key={b.id}>{b.name}</li>
          </Link>
        </div>
      );
    })}
  </ul>
);

const mapStateToProps = state => {
  return { blogs: state.blogs, id: state.id };
};
export default withRouter(connect(mapStateToProps)(BlogList));
