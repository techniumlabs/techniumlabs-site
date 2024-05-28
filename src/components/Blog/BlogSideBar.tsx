"use client";

import React from "react";
import Link from "next/link";

const BlogSideBar: React.FC = () => {
  return (
    <>
      <aside className="widget-area">
        <div className="widget widget_search">
          <form
            className="search-form search-top"
            onSubmit={(e) => e.preventDefault()}
          >
            <label>
              <span className="screen-reader-text">Search for:</span>
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>

            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        <div className="widget widget_plamb_posts_thumb">
          <h3 className="widget-title">Recent posts</h3>

          <article className="item">
            <Link href="/blog/details/" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{
                  backgroundImage: `url(/images/blog-details/blog-gallery1.jpg)`,
                }}
              ></span>
            </Link>

            <div className="info">
              <time>February 10, 2023</time>
              <h4 className="title usmall">
                <Link href="/blog/details/">
                  Making peace with the feast or famine of freelancing
                </Link>
              </h4>
            </div>
          </article>

          <article className="item">
            <Link href="/blog/details/" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{
                  backgroundImage: `url(/images/blog-details/blog-gallery2.jpg)`,
                }}
              >
                {" "}
              </span>
            </Link>

            <div className="info">
              <time>June 21, 2023</time>
              <h4 className="title usmall">
                <Link href="/blog/details/">
                  I used the web for a day on a 50 mb budget
                </Link>
              </h4>
            </div>
          </article>

          <article className="item">
            <Link href="/blog/details/" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{
                  backgroundImage: `url(/images/blog-details/blog-gallery3.jpg)`,
                }}
              ></span>
            </Link>

            <div className="info">
              <time>June 30, 2023</time>
              <h4 className="title usmall">
                <Link href="/blog/details/">
                  How to create a responsive popup gallery?
                </Link>
              </h4>
            </div>
          </article>
        </div>

        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link href="/blog">
                Business <span className="post-count">(2)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Privacy <span className="post-count">(5)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Technology <span className="post-count">(7)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Tips <span className="post-count">(4)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Uncategorized <span className="post-count">(5)</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="widget widget_recent_comments">
          <h3 className="widget-title">Recent comments</h3>

          <ul>
            <li>
              <span className="comment-author-link">
                <Link href="#">A React commenter</Link>
              </span>
              on
              <Link href="#">Hello world!</Link>
            </li>
            <li>
              <span className="comment-author-link">
                <Link href="#">Raxr</Link>
              </span>
              on
              <Link href="#">Hello world!</Link>
            </li>
            <li>
              <span className="comment-author-link">
                <Link href="#">React Next</Link>
              </span>
              on
              <Link href="#">Hello world!</Link>
            </li>
            <li>
              <span className="comment-author-link">
                <Link href="#">A React Next Commenter</Link>
              </span>
              on
              <Link href="#">Hello world!</Link>
            </li>
            <li>
              <span className="comment-author-link">
                <Link href="#">Raxr</Link>
              </span>
              on
              <Link href="#">Hello world!</Link>
            </li>
          </ul>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud section-bottom">
            <Link href="/blog">
              IT
              <span className="tag-link-count"> (3)</span>
            </Link>

            <Link href="/blog">
              Raxr
              <span className="tag-link-count"> (3)</span>
            </Link>

            <Link href="/blog">
              Games
              <span className="tag-link-count"> (2)</span>
            </Link>

            <Link href="/blog">
              Fashion
              <span className="tag-link-count"> (2)</span>
            </Link>

            <Link href="/blog">
              Travel
              <span className="tag-link-count"> (1)</span>
            </Link>

            <Link href="/blog">
              Smart
              <span className="tag-link-count"> (1)</span>
            </Link>

            <Link href="/blog">
              Marketing
              <span className="tag-link-count"> (1)</span>
            </Link>

            <Link href="/blog">
              Tips
              <span className="tag-link-count"> (2)</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default BlogSideBar;
