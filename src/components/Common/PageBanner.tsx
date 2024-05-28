"use client";

import React from "react";
import Link from "next/link";

interface PageBannerProps {
  pageTitle: string;
  breadcrumbTextOne: string;
  breadcrumbTextTwo: string;
  breadcrumbUrl: string;
  bgImage: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  pageTitle,
  breadcrumbTextOne,
  breadcrumbTextTwo,
  breadcrumbUrl,
  bgImage,
}) => {
  return (
    <>
      <div className="page-title-area" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>{pageTitle}</h2>
                <ul>
                  <li>
                    <Link href={breadcrumbUrl}>
                      {breadcrumbTextOne}
                    </Link>
                  </li>
                  <li>{breadcrumbTextTwo}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;