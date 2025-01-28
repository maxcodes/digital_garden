import React from "react";
import { Link } from "gatsby";

const heroHeader = () => (
  <div className="hero-header">
    <div className="headline">Welcome to Max's Digital Garden</div>
    <div className="primary-content">
      Welcome to my personal wikipedia. I try to write mini posts about things
      that I find interesting or end up referring back to. Thanks for stopping by!

      For the latest changes, check out the <Link to="/changelog">Changelog</Link>.
    </div>
  </div>
);

export default heroHeader;
