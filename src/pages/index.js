import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const recommendedBooks = [
  {
    title: "The Courage to Be Disliked",
    label: "Freedom",
    tone: "yellow"
  },
  {
    title: "Meditations",
    label: "Wisdom",
    tone: "cream"
  },
  {
    title: "Loving What Is",
    label: "The Work",
    tone: "green"
  },
  {
    title: "Salt Fat Acid Heat",
    label: "Taste",
    tone: "orange"
  },
  {
    title: "Gödel, Escher, Bach",
    label: "Wonder",
    tone: "navy"
  }
];

const values = ["Liberty", "Honesty", "Connection", "Curiosity"];

const IndexPage = () => (
  <Layout pageClassName="is-home">
    <SEO isRoot />
    <main className="garden-home" aria-label="Max's Digital Garden home">
      <section className="garden-frame">
        <header className="garden-topbar">
          <Link className="garden-brand" to="/">
            Max Holzheu · digital garden
          </Link>
          <nav className="garden-nav" aria-label="Featured pages">
            <Link to="/books">Books</Link>
            <Link to="/ideas_that_changed_my_life">Ideas</Link>
            <Link to="/now">Now</Link>
            <Link to="/leave-a-message">Leave a message</Link>
          </nav>
        </header>

        <div className="garden-board">
          <section className="garden-tile garden-hero" aria-labelledby="garden-title">
            <span className="garden-stamp">Welcome</span>
            <h1 id="garden-title">A map of what shaped me.</h1>
            <p>
              Start with the books I recommend, the ideas that changed my life,
              and the things I’m exploring now: agentic engineering, rituals,
              food, travel, and connection.
            </p>
          </section>

          <section className="garden-tile garden-books garden-green" aria-labelledby="books-title">
            <div>
              <h2 id="books-title">Books I recommend to friends</h2>
              <p>
                The most visited doorway becomes the main doorway. Covers, short
                notes, and why each book changed something.
              </p>
            </div>
            <div className="book-shelf" aria-label="Recommended books">
              {recommendedBooks.map(book => (
                <div className={`book-cover -${book.tone}`} key={book.title}>
                  <strong>{book.title}</strong>
                  <span>{book.label}</span>
                </div>
              ))}
            </div>
            <Link className="garden-link" to="/books">
              Browse the shelf →
            </Link>
          </section>

          <section className="garden-tile garden-ideas garden-orange" aria-labelledby="ideas-title">
            <h2 id="ideas-title">Ideas that changed my life</h2>
            <p>
              Groundbreaking ideas that changed the course of my life. These
              are the beliefs and frameworks I keep coming back to when I need
              to choose myself, act from abundance, move my body, or connect
              more honestly.
            </p>
            <Link className="garden-link" to="/ideas_that_changed_my_life">
              Read the ideas →
            </Link>
            <span className="garden-watermark" aria-hidden="true">
              ☼
            </span>
          </section>

          <section className="garden-tile garden-reading garden-yellow" aria-labelledby="reading-title">
            <h2 id="reading-title">Currently reading</h2>
            <div className="current-reading-row">
              <div className="book-cover -red -current">
                <strong>Children of Dune</strong>
                <span>Reading</span>
              </div>
              <p>
                Follow along on{" "}
                <a href="https://www.goodreads.com/user/show/89587135-max-holzheu">Goodreads</a>.
              </p>
            </div>
          </section>

          <section className="garden-tile garden-audio compact" aria-labelledby="audio-title">
            <h2 id="audio-title">Audiobooks</h2>
            <p>
              Some books are better in the author's own voice. Timing, humor,
              and emotion can change how they land.
            </p>
            <Link className="garden-link" to="/audiobooks">
              View recommendations →
            </Link>
          </section>

          <section className="garden-tile garden-agentic garden-red compact" aria-labelledby="agentic-title">
            <h2 id="agentic-title">Agentic engineering</h2>
            <p>
              How to use powerful coding tools without losing taste, judgment,
              or user focus.
            </p>
            <Link className="garden-link" to="/automation">
              Read more →
            </Link>
          </section>

          <section className="garden-tile garden-now compact" aria-labelledby="now-title">
            <h2 id="now-title">Now</h2>
            <p>World Cup month. Kinielita. Monterrey and New York.</p>
            <Link className="garden-link" to="/now">
              Current status →
            </Link>
          </section>

          <section className="garden-tile garden-principles compact" aria-labelledby="principles-title">
            <h2 id="principles-title">Principles</h2>
            <div className="principle-list" aria-label="Core values">
              {values.map(value => (
                <span key={value}>{value}</span>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  </Layout>
);

export default IndexPage;
