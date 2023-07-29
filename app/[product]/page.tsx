import React from "react";

const Product = () => {
  return (
    <main id="content">
      <section className="py-10 pb-lg-14">
        {" "}
        <section className="py-3 my-5 bg-color-3">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb py-0">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#"> Pages </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  F.A.Q
                </li>
              </ol>
            </nav>
          </div>
        </section>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-6 mb-8 mb-md-0">
              <a
                href="images/product-13_3.jpg"
                data-gtf-mfp="true"
                data-gallery-id="02"
              >
                <img
                  className="mb-2"
                  src="images/product-13_3.jpg"
                  alt="Image Product"
                />
              </a>
              <a
                href="images/product-13_1.jpg"
                data-gtf-mfp="true"
                data-gallery-id="02"
              >
                <img
                  className="mb-2"
                  src="images/product-13_1.jpg"
                  alt="Image Product"
                />
              </a>
              <a
                href="images/product-13_2.jpg"
                data-gtf-mfp="true"
                data-gallery-id="02"
              >
                <img
                  className="mb-2"
                  src="images/product-13_2.jpg"
                  alt="Image Product"
                />
              </a>
              <a
                href="images/product-13.jpg"
                data-gtf-mfp="true"
                data-gallery-id="02"
              >
                <img
                  className="mb-2"
                  src="images/product-13.jpg"
                  alt="Image Product"
                />
              </a>
              <a
                href="images/product-13_4.jpg"
                data-gtf-mfp="true"
                data-gallery-id="02"
              >
                <img
                  className="mb-2"
                  src="images/product-13_4.jpg"
                  alt="Image Product"
                />
              </a>
            </div>
            <div
              className="col-md-5 offset-lg-1 pl-md-6 pl-lg-0 primary-summary summary-sticky"
              id="summary-sticky"
            >
              <div className="primary-summary-inner pt-3">
                <p className="text-muted fs-12 font-weight-500 letter-spacing-05">
                  STOOL
                </p>
                <h2 className="fs-30 fs-lg-40 mb-2">Tuck Bar Stool</h2>
                <p className="fs-20 text-primary mb-4">$790.00</p>
                <div className="d-flex align-items-center flex-wrap">
                  <ul className="list-inline d-flex justify-content-sm-end justify-content-center mb-0 rating-result">
                    <li className="list-inline-item">
                      <span className="text-primary fs-12 lh-2">
                        <i className="fas fa-star"></i>
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span className="text-primary fs-12 lh-2">
                        <i className="fas fa-star"></i>
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span className="text-primary fs-12 lh-2">
                        <i className="fas fa-star"></i>
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span className="text-primary fs-12 lh-2">
                        <i className="fas fa-star"></i>
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span className="text-primary fs-12 lh-2">
                        <i className="fas fa-star"></i>
                      </span>
                    </li>
                  </ul>
                  <p className="text-primary mb-0 fs-15 lh-1 overflow-hidden pl-4">
                    <span className="pr-1 mr-1 border-right">5.0</span>
                    <a href="#">See 3 Reviews</a>
                  </p>
                </div>
                <p className="mt-3 mb-6">
                  Minimal, yet bold - LYNEA Plug Lamp adds an architectural
                  addition without the pain of a professional installation.
                </p>
                <img
                  className="border mb-7"
                  src="images/product-page-09.jpg"
                  alt="Image Product"
                />
                <form>
                  <div className="form-group shop-swatch mb-6">
                    <label className="mb-3">
                      <span className="text-primary fs-16 font-weight-bold">
                        Color:
                      </span>
                      <span className="var text-capitalize text-primary">
                        black
                      </span>
                    </label>
                    <ul className="list-inline d-flex justify-content-start mb-0">
                      <li className="list-inline-item mr-1 selected">
                        <a
                          href="#"
                          className="d-block swatches-item"
                          data-var="black"
                          style={{ backgroundColor: "#000000" }}
                        ></a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="d-block swatches-item"
                          data-var="brown"
                          style={{ backgroundColor: "#68412d" }}
                        ></a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="d-block swatches-item"
                          data-var="green"
                          style={{ backgroundColor: "#9ec8bb" }}
                        ></a>
                      </li>
                    </ul>
                    <select
                      name="swatches"
                      className="form-select swatches-select d-none"
                      aria-label="Default select example"
                      defaultValue="black"
                    >
                      <option>Black</option>
                      <option value="brown">Brown</option>
                      <option value="green">Green</option>
                    </select>
                  </div>
                  <div className="row align-items-end no-gutters mx-n2">
                    <div className="col-sm-4 form-group px-2 mb-6">
                      <label
                        className="text-primary fs-16 font-weight-bold mb-3"
                        htmlFor="number"
                      >
                        Quantity:
                      </label>
                      <div className="input-group position-relative w-100">
                        <a
                          href="#"
                          className="down position-absolute pos-fixed-left-center pl-2 z-index-2"
                        >
                          <i className="far fa-minus"></i>
                        </a>
                        <input
                          name="number"
                          type="number"
                          id="number"
                          className="form-control w-100 px-6 text-center input-quality bg-transparent text-primary"
                          defaultValue="1"
                          required
                        />
                        <a
                          href="#"
                          className="up position-absolute pos-fixed-right-center pr-2 z-index-2"
                        >
                          <i className="far fa-plus"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-8 mb-6 w-100 px-2">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        add to cart
                      </button>
                    </div>
                  </div>
                  <p className="border-bottom pb-4 mb-4 d-flex text-primary">
                    <span className="d-inline-block mr-2 fs-14">
                      <i className="fal fa-shipping-fast"></i>
                    </span>
                    <span className="fs-15">
                      Get it between Aug 11, 2020 - Aug 18, 2020
                    </span>
                  </p>
                </form>
                <div className="d-flex align-items-center flex-wrap mt-6">
                  <a
                    href="#"
                    className="text-uppercase font-weight-bold letter-spacing-05 fs-14 mr-6"
                  >
                    <i className="fas fa-random fs-16"></i>
                    <span className="ml-1">Compare</span>
                  </a>
                  <a
                    href="#"
                    className="text-uppercase font-weight-bold letter-spacing-05 fs-14"
                  >
                    <i className="far fa-heart fs-16"></i>
                    <span className="ml-1">Add to wishlist</span>
                  </a>
                </div>
                <ul className="list-unstyled mt-6">
                  <li className="row mb-2">
                    <span className="d-block col-3 text-primary font-weight-500 fs-15">
                      SKU:
                    </span>
                    <span className="d-block col-9 fs-15">N/A</span>
                  </li>
                  <li className="row mb-2">
                    <span className="d-block col-3 text-primary font-weight-500 fs-15">
                      Categories:
                    </span>
                    <span className="d-block col-9 fs-15">
                      Sweaters, Clothing
                    </span>
                  </li>
                  <li className="row mb-2">
                    <span className="d-block col-3 text-primary font-weight-500 fs-15">
                      Share:
                    </span>
                    <ul className="list-inline d-flex align-items-center mb-0 col-9">
                      <li className="list-inline-item mr-4">
                        <a
                          href="#"
                          className="fs-14 lh-1 text-gray-01 hover-primary"
                        >
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li className="list-inline-item mr-4">
                        <a
                          href="#"
                          className="fs-14 lh-1 text-gray-01 hover-primary"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="list-inline-item mr-4">
                        <a
                          href="#"
                          className="fs-14 lh-1 text-gray-01 hover-primary"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="fs-14 lh-1 text-gray-01 hover-primary"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;
