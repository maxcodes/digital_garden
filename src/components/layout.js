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
      <div className="flex center">
        <iframe
          title="Newsletter"
          src="https://maxholzheu.substack.com/embed"
          width="100%"
          height="200"
          style={{ border: "0px solid #EEE", background: "var(--background)" }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Max Holzheu</p>
      </footer>
    </div>
  );
};
