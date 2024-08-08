import React from "react";
import { Link } from "gatsby";

export default heroHeader = () => (
  <div className="hero-header">
    <div className="headline">Welcome to Max's Digital Garden</div>
    <div className="primary-content">
      Why a garden a not a blog? We live in a world where everything is
      happening right now, where <em>reaction</em> is much more common than
      <em>action</em>. What I'm striving for in this little corner of the web is
      to contribute content that a. evolves over time, and b. is timeless. A
      personal wikipedia of sorts. And by doing so, I hope to show that the
      process of connecting and building and extending the work of others is as
      human and engaging as the traditional blog.
    </div>
    <div className="primary-content">
      A secondary goal is that I’d also like to extend an invitiation for others
      to spark conversations with me about anything they find interesting. I'd
      be delighted for a friendship to grow out of any of these sprouts!
      <ul style={{ paddingTop: 15 }}>
        <li>
          <Link to="/leave-a-message">
            Click here{" "}
          </Link>
          to send me a Push Notification directly to my phone.
        </li>
      </ul>
    </div>
  </div>
);
