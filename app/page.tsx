"use client";
import MobileNavigation from "@/components/MobileNavigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <main id="content">
        <section className="overflow-hidden">
          <div
            className="slick-slider custom-slider-02 mx-0 slider-01"
            data-slick-options='{"slidesToShow": 1,"infinite":true,"autoplay":false,"dots":true,"arrows":false}'
          >
            <div className="box px-0">
              <div
                className="d-flex flex-column justify-content-center bg-img-cover-center vh-100 custom-height-sm"
                style={{
                  backgroundImage: "url(images/bg-home-01.jpg)",
                  backgroundPosition: "center top"
                }}
              >
                <div className="d-flex flex-column h-100 justify-content-center">
                  <div className="container container-xxl">
                    <p
                      className="text-primary font-weight-bold fs-24 mb-3 mb-md-6"
                      data-animate="fadeInUp"
                    >
                      New - In
                    </p>
                    <h1 className="mb-4 mb-md-8 fs-60 fs-xxl-120 heading-home-01 lh-113">
                      <strong className="d-block" data-animate="fadeInUp">
                        Sundae
                      </strong>
                      <strong className="d-block" data-animate="fadeInUp">
                        Lounges
                      </strong>
                    </h1>
                    <a
                      href="shop-page-02.html"
                      className="btn btn-outline-primary text-uppercase letter-spacing-05"
                      data-animate="fadeInUp"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="container container-xxl">
                    <p className="text-primary mb-8">
                      Designed by
                      <span className="font-weight-600">
                        Nicholas Karlovasitis & Sarah Gibson
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box px-0">
              <div
                className="d-flex flex-column justify-content-center bg-img-cover-center vh-100 custom-height-sm"
                style={{
                  backgroundImage: "url(images/bg-home-01.jpg)",
                  backgroundPosition: "center top"
                }}
              >
                <div className="d-flex flex-column h-100 justify-content-center">
                  <div className="container container-xxl">
                    <p className="text-primary font-weight-bold fs-24 mb-3 mb-md-6">
                      New - In
                    </p>
                    <h2 className="mb-4 mb-md-9 fs-60 fs-xxl-120 heading-home-01 lh-113">
                      <strong className="d-block" data-animate="fadeInUp">
                        Sundae
                      </strong>
                      <strong className="d-block" data-animate="fadeInUp">
                        Lounges
                      </strong>
                    </h2>
                    <a
                      href="shop-page-02.html"
                      className="btn btn-outline-primary text-uppercase letter-spacing-05"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="container container-xxl">
                    <p className="text-primary mb-8">
                      Designed by
                      <span className="font-weight-600">
                        Nicholas Karlovasitis & Sarah Gibson
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box px-0">
              <div
                className="d-flex flex-column justify-content-center bg-img-cover-center vh-100 custom-height-sm"
                style={{
                  backgroundImage: "url(images/bg-home-01.jpg)",
                  backgroundPosition: "center top"
                }}
              >
                <div className="d-flex flex-column h-100 justify-content-center">
                  <div className="container container-xxl">
                    <p className="text-primary font-weight-bold fs-24 mb-3 mb-md-6">
                      New - In
                    </p>
                    <h2 className="mb-4 mb-md-9 fs-60 fs-xxl-120 heading-home-01 lh-113">
                      <strong className="d-block" data-animate="fadeInUp">
                        Sundae
                      </strong>
                      <strong className="d-block" data-animate="fadeInUp">
                        Lounges
                      </strong>
                    </h2>
                    <a
                      href="shop-page-02.html"
                      className="btn btn-outline-primary text-uppercase letter-spacing-05"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="container container-xxl">
                    <p className="text-primary mb-8">
                      Designed by
                      <span className="font-weight-600">
                        Nicholas Karlovasitis & Sarah Gibson
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-lg-14 py-11">
          <div className="container container-xxl">
            <div className="d-grid g-1 g-sm-2 g-lg-4 grid-gap overflow-hidden">
              <div className="grid-item gc-sm-2 gr-start-7 gr-start-sm-4 gr-start-lg-2">
                <div className="card border-0" data-animate="fadeInUp">
                  <div
                    style={{ backgroundImage: "url(images/c_18.jpg)" }}
                    className="card-img ratio bg-img-cover-center ratio-1-1 ratio-sm-1-2"
                  ></div>
                  <div className="card-img-overlay d-inline-flex flex-column p-xl-8">
                    <div className="mxw-320px">
                      <h3 className="card-title fs-48 fs-lg-40 fs-xxl-56 pt-xxl-1">
                        Dining <br />
                        Table
                      </h3>
                    </div>
                    <div className="mt-auto">
                      <a
                        href="#"
                        className="btn btn-outline-primary text-uppercase letter-spacing-05"
                      >
                        from $500
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item gc-sm-2 gr-start-7 gr-start-sm-4 gr-start-lg-2">
                <div className="card border-0" data-animate="fadeInUp">
                  <div
                    style={{ backgroundImage: "url(images/c_19.jpg)" }}
                    className="card-img ratio bg-img-cover-center ratio-1-1 ratio-sm-1-2"
                  ></div>
                  <div className="card-img-overlay d-inline-flex flex-column p-xl-8">
                    <div className="mxw-320px">
                      <h3 className="card-title fs-48 fs-lg-40 fs-xxl-56 pt-xxl-6">
                        Planters
                      </h3>
                      <p className="text-primary">
                        Featuring the signature flexible spine and made in
                        aluminium.
                      </p>
                    </div>
                    <div className="position-absolute d-none d-lg-block category-price">
                      <p className="text-primary d-flex flex-column align-items-center justify-content-center w-88px h-88 rounded-circle bg-white text-center">
                        <span className="font-weight-bold d-block">Form</span>
                        $20.00
                      </p>
                    </div>
                    <div className="mt-auto">
                      <a
                        href="#"
                        className="btn btn-outline-primary text-uppercase letter-spacing-05"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item gc-sm-2 gr-start-21 gr-start-sm-5 gr-start-lg-3">
                <div className="card border-0" data-animate="fadeInUp">
                  <div
                    style={{ backgroundImage: "url(images/c_20.jpg)" }}
                    className="card-img ratio bg-img-cover-center ratio-1-1 ratio-sm-1-2"
                  ></div>
                  <div className="card-img-overlay d-inline-flex flex-column p-xl-8">
                    <div className="mxw-320px">
                      <h3 className="card-title fs-48 fs-lg-40 fs-xxl-56 pt-xxl-5">
                        Pao by <br />
                        chiandchi
                      </h3>
                    </div>
                    <div className="mt-auto">
                      <a
                        href="#"
                        className="btn btn-outline-primary text-uppercase letter-spacing-05"
                      >
                        shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-item gc-sm-2 gr-start-8 gr-start-sm-5 gr-start-lg-3">
                <div className="card border-0" data-animate="fadeInUp">
                  <div
                    style={{ backgroundImage: "url(images/c_20.jpg)" }}
                    className="card-img ratio bg-img-cover-center ratio-1-1 ratio-sm-1-2"
                  ></div>
                  <div className="card-img-overlay d-inline-flex flex-column p-xl-8">
                    <div className="mxw-320px">
                      <h3 className="card-title fs-48 fs-lg-40 fs-xxl-56 pt-xxl-5">
                        Pao by <br />
                        chiandchi
                      </h3>
                    </div>
                    <div className="mt-auto">
                      <a
                        href="#"
                        className="btn btn-outline-primary text-uppercase letter-spacing-05"
                      >
                        shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileNavigation />
    </div>
  );
}
