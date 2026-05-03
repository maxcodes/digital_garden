import React from "react";
import { Link } from "gatsby";
import ThemeChanger from "../components/themeChanger";

export default props => (
  <nav className="navigation">
    <Link to="/books">Books</Link>
    <Link to="/ideas_that_changed_my_life">Ideas</Link>
    <Link to="/now">Now</Link>
    <ThemeChanger />
  </nav>
);
