import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const {
    mdx: { frontmatter, body }
  } = data; // data.mdx holds your post data
  return (
    <Layout>
      <SEO frontmatter={frontmatter} />
      <div className="blog-post-container">
        <article className="post">
          <h1 className="post-title">{frontmatter.title}</h1>
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
