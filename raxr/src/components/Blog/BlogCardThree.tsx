"use client";

import React from "react";
import Link from "next/link";
import BlogSideBar from "./BlogSideBar";
import Image from "next/image";

const BlogCardThree: React.FC = () => {
  return (
    <>
      <div className="blog-section ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="left-blog-sidebar">
                <BlogSideBar />
              </div>
            </div>

            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="blog-item">
                    <Link href="/blog/details/">
                      <Image
                        src="/images/blog/blog1.png"
                        alt="image"
                        width={510}
                        height={400}
                      />
                    </Link>

                    <div className="blog-content">
                      <ul className="meta-tags">
                        <li>
                          <Link href="/blog">
                            <i className="fa fa-user-alt"></i>
                            Admin
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            <i className="fas fa-calendar-week"></i>7 Dec 2023
                          </Link>
                        </li>
                        <li>
                          <i className="far fa-comments"></i>3 Comments
                        </li>
                      </ul>

                      <h3>
                        <Link href="/blog/details/">
                          Startup marketing solution for business owner
                        </Link>
                      </h3>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                      </p>

                      <Link href="/blog/details/" className="read-more">
                        Read More
                        <i className="fa fa-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="blog-item">
                    <Link href="/blog/details/">
                      <Image
                        src="/images/blog/blog2.png"
                        alt="image"
                        width={510}
                        height={400}
                      />
                    </Link>

                    <div className="blog-content">
                      <ul className="meta-tags">
                        <li>
                          <Link href="/blog">
                            <i className="fa fa-user-alt"></i>
                            Admin
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            <i className="fas fa-calendar-week"></i>7 Dec 2023
                          </Link>
                        </li>
                        <li>
                          <i className="far fa-comments"></i>3 Comments
                        </li>
                      </ul>

                      <h3>
                        <Link href="/blog/details/">
                          Web developement best work in future world
                        </Link>
                      </h3>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                      </p>

                      <Link href="/blog/details/" className="read-more">
                        Read More
                        <i className="fa fa-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="blog-item">
                    <Link href="/blog/details/">
                      <Image
                        src="/images/blog/blog3.png"
                        alt="image"
                        width={510}
                        height={400}
                      />
                    </Link>

                    <div className="blog-content">
                      <ul className="meta-tags">
                        <li>
                          <Link href="/blog">
                            <i className="fa fa-user-alt"></i>
                            Admin
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            <i className="fas fa-calendar-week"></i>7 Dec 2023
                          </Link>
                        </li>
                        <li>
                          <i className="far fa-comments"></i>3 Comments
                        </li>
                      </ul>

                      <h3>
                        <Link href="/blog/details/">
                          Creative solutions to improve your business!
                        </Link>
                      </h3>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                      </p>

                      <Link href="/blog/details/" className="read-more">
                        Read More
                        <i className="fa fa-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="blog-item">
                    <Link href="/blog/details/">
                      <Image
                        src="/images/blog/blog4.png"
                        alt="image"
                        width={510}
                        height={400}
                      />
                    </Link>

                    <div className="blog-content">
                      <ul className="meta-tags">
                        <li>
                          <Link href="/blog">
                            <i className="fa fa-user-alt"></i>
                            Admin
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            <i className="fas fa-calendar-week"></i>7 Dec 2023
                          </Link>
                        </li>
                        <li>
                          <i className="far fa-comments"></i>3 Comments
                        </li>
                      </ul>

                      <h3>
                        <Link href="/blog/details/">
                          Making peace with the feast or famine of freelancing
                        </Link>
                      </h3>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                      </p>

                      <Link href="/blog/details/" className="read-more">
                        Read More
                        <i className="fa fa-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="blog-item">
                    <Link href="/blog/details/">
                      <Image
                        src="/images/blog/blog5.png"
                        alt="image"
                        width={510}
                        height={400}
                      />
                    </Link>

                    <div className="blog-content">
                      <ul className="meta-tags">
                        <li>
                          <Link href="/blog">
                            <i className="fa fa-user-alt"></i>
                            Admin
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            <i className="fas fa-calendar-week"></i>7 Dec 2023
                          </Link>
                        </li>
                        <li>
                          <i className="far fa-comments"></i>3 Comments
                        </li>
                      </ul>

                      <h3>
                        <Link href="/blog/details/">
                          Instagram feed add to your WordPress site
                        </Link>
                      </h3>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                      </p>

                      <Link href="/blog/details/" className="read-more">
                        Read More
                        <i className="fa fa-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="blog-item">
                    <Link href="/blog/details/">
                      <Image
                        src="/images/blog/blog6.png"
                        alt="image"
                        width={510}
                        height={400}
                      />
                    </Link>

                    <div className="blog-content">
                      <ul className="meta-tags">
                        <li>
                          <Link href="/blog">
                            <i className="fa fa-user-alt"></i>
                            Admin
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            <i className="fas fa-calendar-week"></i>7 Dec 2023
                          </Link>
                        </li>
                        <li>
                          <i className="far fa-comments"></i>3 Comments
                        </li>
                      </ul>

                      <h3>
                        <Link href="/blog/details/">
                          I used the web for a day on a 50 mb budget
                        </Link>
                      </h3>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                      </p>

                      <Link href="/blog/details/" className="read-more">
                        Read More
                        <i className="fa fa-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Pagination */}
                <div className="col-lg-12 col-md-12">
                  <div className="pagination-area">
                    <Link href="#" className="prev page-numbers">
                      <i className="fas fa-angle-double-left"></i>
                    </Link>

                    <Link href="#" className="page-numbers">
                      1
                    </Link>

                    <span className="page-numbers current">2</span>

                    <Link href="#" className="page-numbers">
                      3
                    </Link>

                    <Link href="#" className="page-numbers">
                      4
                    </Link>

                    <Link href="#" className="next page-numbers">
                      <i className="fas fa-angle-double-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCardThree;
