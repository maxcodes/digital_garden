import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import "prismjs/themes/prism-okaidia.css";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      <div style={{ paddingBottom: 64 }}>{children}</div>
      <iframe
        title="Newsletter"
        src="https://maxholzheu.substack.com/embed"
        width="100%"
        height="320"
        style={{ border: "0px solid #EEE", background: "white" }}
        frameborder="0"
        scrolling="no"
      ></iframe>
      <footer className="site-footer">
        <p>&copy; 2020 Max Holzheu</p>
      </footer>
    </div>
  );
};
