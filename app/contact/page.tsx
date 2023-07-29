import React from "react";

const Contact = () => {
  return (
    <main id="content">
      <section
        className="d-flex flex-column bg-img-cover-center vh-100 custom-height-sm pt-xxl-13"
        style={{ backgroundImage: "url(images/bg-about-us.jpg)" }}
      >
        <div className="d-flex flex-column h-100 align-items-center justify-content-center justify-content-xxl-start pt-xxl-13">
          <div className="container">
            <p className="text-center text-white fs-20 font-weight-bold mb-4">
              Reach out
            </p>
            <h1 className="fs-60 fs-lg-90 lh-1 text-center text-white">
              Contact
            </h1>
          </div>
        </div>
      </section>
      <section className="pt-10 pb-10">
        <div className="container">
          <h2 className="fs-sm-40 mb-10 text-center">Contact Us</h2>
          {/* <div
            id="map"
            className="mapbox-gl map-point-animate"
            style={{ height: 535 }}
            data-mapbox-access-token="pk.eyJ1IjoiZHVvbmdsaCIsImEiOiJjanJnNHQ4czExMzhyNDVwdWo5bW13ZmtnIn0.f1bmXQsS6o4bzFFJc8RCcQ"
            data-mapbox-options='{"center":[-106.53671888774004, 35.12362056187368],"setLngLat":[-106.53671888774004, 35.12362056187368],"zoom":5}'
            data-mapbox-marker='[{"position":[-106.53671888774004, 35.12362056187368],"className":"marker","backgroundImage":"images/marker-01.png","backgroundRepeat":"no-repeat","width":"70px","height":"70px"}]'
          ></div> */}
        </div>
      </section>
      <div className="pb-14">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-8 mb-8 mb-md-0">
              <h2 className="fs-24 mb-2">We would love to hear from you.</h2>
              <p className="mb-7">
                If you’ve got great products your making or looking to work with
                us then drop us a line.
              </p>
              <form>
                <div className="row mb-6">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name*"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email*"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mb-4">
                  <textarea className="form-control" rows={6}>
                    Comment
                  </textarea>
                </div>
                <div className="custom-control custom-checkbox mb-6">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label fs-15"
                    htmlFor="customCheck1"
                  >
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary text-uppercase letter-spacing-05"
                >
                  submit now
                </button>
              </form>
            </div>
            <div className="col-md-4 pl-xl-13 pl-md-6">
              <p className="font-weight-bold text-primary mb-3">Address</p>
              <address className="mb-6">
                7895 Piermont Dr NE Albuquerque,
                <br />
                NM 198866, See Our Stores
              </address>
              <p className="font-weight-bold text-primary mb-2">Infomation</p>
              <p className="mb-0">+391 (0)35 2568 4593</p>
              <p className="mb-7">hello@domain.com</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
