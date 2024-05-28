import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <Image
                  src="/images/404.jpg"
                  alt="Image"
                  width={924}
                  height={590}
                />

                <h3>Page Not Found</h3>
                <p>
                  The page you are looking for might have been removed had its
                  name changed or is temporarily unavailable.
                </p>

                <Link href="/" className="default-btn-one">
                  Return To Home Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
