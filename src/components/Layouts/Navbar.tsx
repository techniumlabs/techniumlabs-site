"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { menus } from "../../../libs/menus";

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <Image
                  src="/images/logo-white.png"
                  className="white-logo"
                  alt="logo"
                  width={130}
                  height={38}
                />
                <Image
                  src="/images/logo-black.png"
                  className="black-logo"
                  alt="logo"
                  width={130}
                  height={38}
                />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  {menus.map((menuItem) => (
                    <MenuItem key={menuItem.label} {...menuItem} />
                  ))}
                </ul>

                {/* <div className="others-options">
                  <Link href="/contact-us" className="default-btn">
                    Free Quote
                    <span></span>
                  </Link>
                </div> */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
