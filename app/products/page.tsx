import React from "react";

const Products = () => {
  return (
    <main id="content">
      <div className="pt-17 pb-4 bg-accent page-title-05">
        <div className="container">
          <h1 className="fs-40 mb-16 mt-5 text-center">Shop All</h1>
          <div className="d-flex justify-content-center justify-content-lg-between flex-wrap flex-lg-nowrap position-relative">
            <a
              href="#"
              className="media px-7 mb-5 align-items-center border-right"
            >
              <div className="w-40px mr-3">
                <img src="images/chair.png" alt="Chair" />
              </div>
              <div className="media-body">
                <h5 className="fs-16 mb-1">Chairs</h5>
                <p className="mb-0 text-gray-01 fs-14">20 Items</p>
              </div>
            </a>
            <div className="separator"></div>
            <a href="#" className="media px-7 mb-5 align-items-center">
              <div className="w-40px mr-3">
                <img src="images/desk.png" alt="Tables" />
              </div>
              <div className="media-body">
                <h5 className="fs-16 mb-1">Tables</h5>
                <p className="mb-0 text-gray-01 fs-14">20 Items</p>
              </div>
            </a>
            <div className="separator"></div>
            <a href="#" className="media px-7 mb-5 align-items-center">
              <div className="w-40px mr-3">
                <img src="images/fish_bowl.png" alt="Accessories" />
              </div>
              <div className="media-body">
                <h5 className="fs-16 mb-1">Accessories</h5>
                <p className="mb-0 text-gray-01 fs-14">20 Items</p>
              </div>
            </a>
            <div className="separator"></div>
            <a href="#" className="media px-7 mb-5 align-items-center">
              <div className="w-40px mr-3">
                <img src="images/sofa.png" alt="Sofa" />
              </div>
              <div className="media-body">
                <h5 className="fs-16 mb-1">Sofa</h5>
                <p className="mb-0 text-gray-01 fs-14">20 Items</p>
              </div>
            </a>
            <div className="separator"></div>
            <a href="#" className="media px-7 mb-5 align-items-center">
              <div className="w-40px mr-3">
                <img src="images/plant.png" alt="Plants" />
              </div>
              <div className="media-body">
                <h5 className="fs-16 mb-1">Plants</h5>
                <p className="mb-0 text-gray-01 fs-14">20 Items</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <section>
        <div className="container container-xxl">
          <div className="d-flex mb-7">
            <div
              className="d-flex align-items-center text-primary font-weight-500"
              data-canvas="true"
              data-canvas-options='{"container":".filter-canvas"}'
            >
              <button
                type="button"
                className="border-0 pl-0 pr-2 fs-12 bg-transparent"
              >
                <i className="far fa-align-left"></i>
              </button>
              Filter
            </div>
            <div className="ml-auto">
              <div className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle fs-14"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Default Sorting
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item text-primary fs-14" href="#">
                    Price high to low
                  </a>
                  <a className="dropdown-item text-primary fs-14" href="#">
                    Price low to high
                  </a>
                  <a className="dropdown-item text-primary fs-14" href="#">
                    Random
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-7 overflow-hidden">
            <div className="col-md-4 mb-6" data-animate="fadeInUp">
              <div className="card border-0 hover-change-content product">
                <div
                  style={{ backgroundImage: "url(images/product-19.jpg)" }}
                  className="card-img ratio bg-img-cover-center ratio-1-1"
                ></div>
                <div className="card-img-overlay d-flex py-4 py-sm-5 pl-6 pr-4">
                  <div className="d-flex flex-column">
                    <a href="#" className="font-weight-bold mb-1 d-block lh-12">
                      Bow Chair
                    </a>
                    <a
                      href="#"
                      className="text-uppercase text-muted letter-spacing-05 fs-13 font-weight-500"
                    >
                      Table
                    </a>
                    <p className="mt-auto text-primary mb-0 font-weight-500">
                      $1390.00
                    </p>
                  </div>
                  <div className="ml-auto d-flex flex-column">
                    <div className="my-auto content-change-vertical">
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to card"
                        className="add-to-cart d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mb-2 border"
                      >
                        <i className="far fa-shopping-basket"></i>
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to favourite"
                        className="add-to-wishlist d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mb-2 border"
                      >
                        <i className="far fa-heart"></i>
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to compare"
                        className="add-to-compare d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mb-2 border"
                      >
                        <i className="far fa-random"></i>
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Preview"
                        className="preview d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mb-2 border"
                      >
                        <i className="far fa-eye"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-6" data-animate="fadeInUp">
              <div className="card border-0 hover-change-content product">
                <div
                  style={{ backgroundImage: "url(images/product-02.jpg)" }}
                  className="card-img ratio bg-img-cover-center ratio-1-1"
                ></div>
                <div className="card-img-overlay d-flex py-4 py-sm-5 pl-6 pr-4">
                  <div className="d-flex flex-column">
                    <a href="#" className="font-weight-bold mb-1 d-block lh-12">
                      Potato Chair
                    </a>
                    <a
                      href="#"
                      className="text-uppercase text-muted letter-spacing-05 fs-13 font-weight-500"
                    >
                      chair
                    </a>
                    <p className="mt-auto text-primary mb-0 font-weight-500">
                      $1390.00
                    </p>
                  </div>
                  <div className="ml-auto d-flex flex-column">
                    <div className="badge badge-green badge-circle ml-auto w-45px h-45px fs-12 d-flex align-items-center justify-content-center mb-2">
                      new
                    </div>
                    <div className="my-auto content-change-vertical">
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to card"
                        className="add-to-cart d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mb-2 border"
                      >
                        <i className="far fa-shopping-basket"></i>
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to favourite"
                        className="add-to-wishlist d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mb-2 border"
                      >
                        <i className="far fa-heart"></i>
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to compare"
                        className="add-to-compare d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mb-2 border"
                      >
                        <i className="far fa-random"></i>
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Preview"
                        className="preview d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mb-2 border"
                      >
                        <i className="far fa-eye"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-6" data-animate="fadeInUp">
              <div className="card border-0 hover-change-content product">
                <div
                  style={{ backgroundImage: "url(images/product-10.jpg)" }}
                  className="card-img ratio bg-img-cover-center ratio-1-1"
                ></div>
                <div className="card-img-overlay d-flex py-4 py-sm-5 pl-6 pr-4">
                  <div className="d-flex flex-column">
                    <a href="#" className="font-weight-bold mb-1 d-block lh-12">
                      Golden Clock
                    </a>
                    <a
                      href="#"
                      className="text-uppercase text-muted letter-spacing-05 fs-13 font-weight-500"
                    >
                      decor
                    </a>
                    <p className="mt-auto text-primary mb-0 font-weight-500">
                      $1390.00
                    </p>
                  </div>
                  <div className="ml-auto d-flex flex-column">
                    <div className="my-auto content-change-vertical">
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to card"
                        className="add-to-cart d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mb-2 border"
                      >
                        <i className="far fa-shopping-basket"></i>
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to favourite"
                        className="add-to-wishlist d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mb-2 border"
                      >
                        <i className="far fa-heart"></i>
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Add to compare"
                        className="add-to-compare d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mb-2 border"
                      >
                        <i className="far fa-random"></i>
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Preview"
                        className="preview d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mb-2 border"
                      >
                        <i className="far fa-eye"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="pb-11 pb-lg-14 overflow-hidden">
          <ul className="pagination justify-content-center align-items-center mb-0">
            <li className="page-item fs-12 d-none d-sm-block">
              <a className="page-link" href="#" tabIndex={-1}>
                <i className="far fa-angle-double-left"></i>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                6
              </a>
            </li>
            <li className="page-item fs-12 d-none d-sm-block">
              <a className="page-link" href="#">
                <i className="far fa-angle-double-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
};

export default Products;
