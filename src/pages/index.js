import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostLink from "../components/post-link";
import HeroHeader from "../components/heroHeader";
import sortBy from "lodash/sortBy";

const IndexPage = ({
  data: {
    site,
    allMdx: { edges }
  }
}) => {
  const Posts = sortBy(edges, edge => edge.node.frontmatter.title).map(edge => (
    <PostLink key={edge.node.id} post={edge.node} />
  ));

  return (
    <Layout>
      <SEO isRoot />
      <HeroHeader />
      <h2>Sprouts</h2>
      <div className="grids">{Posts}</div>
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            thumbnail
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
