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
      <hr />
      <div className="primary-content" style={{ paddingTop: 50 }}>
        Have thoughts about this? Share them with me:
        <ul style={{ paddingTop: 5 }}>
          <li>
            <a href="mailto:digitalgarden@maxholzheu.com">via Email</a>
          </li>
          <li>
            <a href="https://twitter.com/messages/compose?recipient_id=158602524">
              on Twitter
            </a>
          </li>
        </ul>
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
    mdx(fields: { slug: { eq: $path } }) {
      body
      frontmatter {
        title
        thumbnail
        metaDescription
      }
    }
  }
`;
