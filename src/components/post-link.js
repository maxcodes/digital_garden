import React from "react";
import { Link } from "gatsby";

const PostLink = ({ post }) => (
  <article className="card">
    <header>
      <h2 className="post-title">
        <Link to={post.fields.slug} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
    </header>
  </article>
);

export default PostLink;
