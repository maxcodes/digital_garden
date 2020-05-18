import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ frontmatter, isRoot }) {
  const {
    site: { siteMetadata }
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteUrl
          }
        }
      }
    `
  );

  let metaDescription, metaTitle, metaImage;
  if (isRoot) {
    metaDescription = siteMetadata.description;
    metaTitle = siteMetadata.title;
    metaImage = siteMetadata.image;
  } else {
    metaDescription = frontmatter.metaDescription;
    metaTitle = frontmatter.title;
    metaImage = frontmatter.thumbnail;
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: "en"
      }}
      title={metaTitle}
      titleTemplate={isRoot ? "%s" : `%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: metaTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: `${siteMetadata.siteUrl}${metaImage}`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: metaTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `twitter:image`,
          content: `${siteMetadata.siteUrl}${metaImage}`
        }
      ]}
    />
  );
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string
};

export default SEO;
