import React from "react";

const AboutUs = () => {
  return (
    <main id="content">
      <section
        className="d-flex flex-column bg-img-cover-center vh-100 custom-height-sm pt-xxl-13"
        style={{ backgroundImage: "url(images/bg-about-us.jpg)" }}
      >
        <div className="d-flex flex-column h-100 align-items-center justify-content-center justify-content-xxl-start pt-xxl-13">
          <div className="container">
            <p className="text-center text-white fs-20 font-weight-bold mb-4">
              Furnitor Story
            </p>
            <h1 className="fs-60 fs-lg-90 lh-1 text-center text-white">
              About Us
            </h1>
          </div>
        </div>
      </section>
      <section className="pt-11 pt-lg-14">
        <div className="container">
          <div className="row align-items-center no-gutters flex-md-row-reverse">
            <div className="col-md-6 pl-md-6 pl-lg-13 mb-6 mb-md-0">
              <h2 className="fs-30 fs-md-60 mb-2">
                Setting <br />
                Industry
              </h2>
              <p className="mb-6">
                Portland meggings chartreuse plaid palo santo, gluten-free ramps
                iPhone etsy salvia cray kombucha copper mug single-origin
                coffee.
              </p>
              <p
                className="counterup fs-60 text-primary font-weight-500 lh-13 mb-2"
                data-start="0"
                data-end="12346"
                data-decimals="0"
                data-duration="0"
                data-separator=","
              >
                12346
              </p>
              <p className="text-primary font-weight-500">
                Satisfied customers worldwide and growing
              </p>
            </div>
            <div className="col-md-6">
              <img src="images/b-14.jpg" alt="Setting Industry Standards" />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-13">
        <div className="container">
          <div className="mb-8 mxw-110px mx-auto">
            <img src="images/logo_circle.png" alt="Logo circle" />
          </div>
          <div className="mxw-830 mx-auto">
            <h2 className="fs-30 fs-md-40 lh-15 mb-7">
              Having a place set aside for an activity you love makes it more
              likely you’ll do it.
            </h2>
            <p className="fs-20 text-primary font-weight-500 mb-6">
              Awkwardness gives me great comfort. I’ve never been cool, but I’ve
              felt cool. I’ve been in the cool place, but I wasn’t really cool –
              I was trying to pass for hip or cool.
            </p>
            <p className="mb-0">
              A girl should be two things: classy and fabulous. I am convinced
              that there can be luxury in simplicity. I wanted to dress the
              woman who lives and works, not the woman in a painting. It’s hard
              to balance everything. It’s always challenging. My relationships
              with producers or photographers – these are relationships that
              took years. I can’t get sucked into that celebrity thing, because
              I think it’s just crass. My aim is to make.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-13 pt-lg-15 pb-lg-17">
        <div className="container">
          <div className="row align-items-center mb-4 no-gutters">
            <div className="col-md-6 pr-md-6 pr-lg-13">
              <h2 className="fs-30 fs-md-60 mb-3">Growing Fast</h2>
              <p className="mb-6">
                Portland meggings chartreuse plaid palo santo, gluten-free ramps
                iPhone etsy salvia cray kombucha copper mug single-origin
                coffee.
              </p>
              <p
                className="counterup fs-60 text-primary font-weight-500 lh-13 mb-2"
                data-start="0"
                data-end="100"
                data-decimals="0"
                data-duration="0"
                data-separator=","
              >
                100
              </p>
              <p className="text-primary font-weight-500">
                Regional offices around the world
              </p>
            </div>
            <div className="col-md-6 mt-6 mt-md-0">
              <img src="images/b-15.jpg" alt="Growing Fast" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-accent">
        <div className="container">
          <h2 className="fs-30 fs-md-40 mb-10 text-center">Core Values</h2>
          <div className="row">
            <div className="col-md-4 mb-6 mb-md-0">
              <div className="card bg-transparent border-0 align-items-center">
                <div className="w-63px card-img">
                  <img
                    src="images/fish_bowl_lg.png"
                    alt="Cruises & Water Tours"
                  />
                </div>
                <div className="card-body px-0 pt-6 text-center">
                  <h3 className="card-title fs-20 mb-3">
                    Cruises & Water Tours
                  </h3>
                  <p className="cart-text mb-0">
                    These are beautiful, well made & ortable! I bought them to
                    wear to work & casually.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-6 mb-md-0">
              <div className="card bg-transparent border-0 align-items-center">
                <div className="w-63px card-img">
                  <img src="images/plant_lg.png" alt="Night Life" />
                </div>
                <div className="card-body px-0 pt-6 text-center">
                  <h3 className="card-title fs-20 mb-3">Night Life</h3>
                  <p className="cart-text mb-0">
                    These are beautiful, well made & ortable! I bought them to
                    wear to work & casually.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-6 mb-md-0">
              <div className="card bg-transparent border-0 align-items-center">
                <div className="w-63px card-img">
                  <img src="images/sofa_lg.png" alt="Hiking" />
                </div>
                <div className="card-body px-0 pt-6 text-center">
                  <h3 className="card-title fs-20 mb-3">Hiking</h3>
                  <p className="cart-text mb-0">
                    These are beautiful, well made & ortable! I bought them to
                    wear to work & casually.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
