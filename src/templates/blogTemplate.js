import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { site, mdx } = data; // data.mdx holds your post data
  const { siteMetadata } = site;
  const { frontmatter, body } = mdx;
  return (
    <Layout>
      <Helmet>
        <title>
          {frontmatter.title} | {siteMetadata.title}
        </title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div
              className="post-thumbnail"
              style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}
            >
              <h1 className="post-title">{frontmatter.title}</h1>
            </div>
          )}
          <MDXRenderer className="blog-post-content">{body}</MDXRenderer>
        </article>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        path
        title
        thumbnail
        metaDescription
      }
    }
  }
`;
