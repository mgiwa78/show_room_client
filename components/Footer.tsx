import React from "react";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="position-fixed pos-fixed-bottom-right p-6 z-index-10">
        <a
          href="#"
          className="gtf-back-to-top bg-white text-primary hover-white bg-hover-primary shadow p-0 w-52px h-52 rounded-circle fs-20 d-flex align-items-center justify-content-center"
          title="Back To Top"
        >
          <i className="fal fa-arrow-up"></i>
        </a>
      </div>
      <footer className="pt-9 pb-10 footer bg-color-2">
        <div className="container container-xxl">
          <div className="row">
            <div className="col-lg mb-6 mb-lg-0">
              <a href="#" className="footer-logo d-block">
                <img src="images/logo.png" alt="Furnitor" />
              </a>
            </div>
            <div className="col-sm-6 col-lg mb-6 mb-lg-0">
              <ul className="list-unstyled mb-0">
                <li className="py-0">
                  <a href="#" className="lh-225 font-weight-500">
                    Contact
                  </a>
                </li>
                <li className="py-0">
                  <a href="#" className="lh-225 font-weight-500">
                    Returns
                  </a>
                </li>
                <li className="py-0">
                  <a href="#" className="lh-225 font-weight-500">
                    Submit a Returns
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg mb-6 mb-lg-0">
              <ul className="list-unstyled mb-0">
                <li className="py-0">
                  <a href="#" className="lh-225 font-weight-500">
                    Careers
                  </a>
                </li>
                <li className="py-0">
                  <a href="#" className="lh-225 font-weight-500">
                    Privacy Policy
                  </a>
                </li>
                <li className="py-0">
                  <a href="#" className="lh-225 font-weight-500">
                    Term & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg mb-6 mb-lg-0">
              <ul className="list-unstyled mb-0">
                <li className="py-0">
                  <a href="#" className="lh-225 font-weight-500">
                    Gift Voucher
                  </a>
                </li>
                <li className="py-0">
                  <a href="#" className="lh-225 font-weight-500">
                    Discount
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg">
              <ul className="list-inline text-lg-right mb-2">
                <li className="list-inline-item mr-4">
                  <a href="#" className="fs-20">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
                <li className="list-inline-item mr-4">
                  <a href="#" className="fs-20">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item mr-4">
                  <a href="#" className="fs-20">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="fs-20">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
              <p className="mb-0 text-gray text-lg-right font-weight-500">
                © 2020 Furnitor.
                <br />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
