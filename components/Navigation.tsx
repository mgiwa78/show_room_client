import Link from "next/link";
import React from "react";

const NavigationBar = () => {
  return (
    <header className="main-header navbar-light header-sticky header-sticky-smart position-absolute fixed-top">
      <div className="sticky-area">
        <div className="container container-xxl">
          <nav className="navbar navbar-expand-xl px-0 py-2 py-xl-0 d-block">
            <div className="d-none d-xl-block">
              <div className="row align-items-center">
                <div className="col-2">
                  <div className="position-relative">
                    <a
                      href="#search-popup"
                      data-gtf-mfp="true"
                      data-mfp-options='{"type":"inline","focus": "#keyword","mainClass": "mfp-search-form mfp-move-from-top mfp-align-top"}'
                      className="nav-search d-flex align-items-center"
                    >
                      <i className="far fa-search"></i>
                      <span className="d-none d-xl-inline-block ml-2 font-weight-500">
                        Search
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-xl-8 mx-auto position-static">
                  <div className="d-flex mt-3 mt-xl-0 align-items-center w-100 justify-content-center">
                    <ul className="navbar-nav hover-menu main-menu px-0 mx-xl-n4">
                      <li
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="nav-item  py-2 py-xl-5 px-0 px-xl-4"
                      >
                        <Link className="nav-link  p-0" href="./">
                          Home
                          <span className="caret"></span>
                        </Link>
                      </li>
                      <li
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="nav-item py-2 py-xl-5 px-0 px-xl-4"
                      >
                        <Link className="nav-link  p-0" href="products">
                          Products
                          <span className="caret"></span>
                        </Link>
                      </li>
                    </ul>
                    <a
                      className="navbar-brand mx-8 mr-0 d-inline-block py-0"
                      href="index.html"
                    >
                      <img src="images/logo.png" alt="Furnitor" />
                    </a>
                    <ul className="navbar-nav hover-menu main-menu px-0 mx-xl-n4">
                      <li
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="nav-item  py-2 py-xl-5 px-0 px-xl-4"
                      >
                        <Link className="nav-link  p-0" href="contact">
                          Contact
                          <span className="caret"></span>
                        </Link>
                      </li>
                      <li
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="nav-item  py-2 py-xl-5 px-0 px-xl-4"
                      >
                        <Link className="nav-link  p-0" href="about-us">
                          About us
                          <span className="caret"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center d-xl-none">
              <button
                className="navbar-toggler border-0 px-0 canvas-toggle"
                type="button"
                data-canvas="true"
                data-canvas-options='{"width":"250px","container":".sidenav"}'
              >
                <span className="fs-24 toggle-icon"></span>
              </button>
              <div className="mx-auto">
                <a
                  className="navbar-brand d-inline-block mr-0"
                  href="index.html"
                >
                  <img src="images/logo.png" alt="Furnitor" />
                </a>
              </div>
              <a
                href="#search-popup"
                data-gtf-mfp="true"
                data-mfp-options='{"type":"inline","focus": "#keyword","mainClass": "mfp-search-form mfp-move-from-top mfp-align-top"}'
                className="nav-search d-flex align-items-center"
              >
                <i className="far fa-search"></i>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
