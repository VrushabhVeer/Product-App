import React from "react";

const Home = () => {
  return (
    <div>
      <div className="topImage">
        <img
          src="https://sslimages.shoppersstop.com/sys-master/root/h64/h13/27800672337950/main-strip-eoss-white_web--hp-clp-flat-50-2022-07-07.gif"
          alt=""
        />
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h3a/h79/27836571975710/new-balance--Static-HP-8-BOD-2022-07-06.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/he6/h66/27812235214878/Shoppers-Stop-Select-Haute-Curry-Web.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h58/h6b/27761068015646/web_bar_lakme_sponsored-brand_20220623.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <img className="brandImgae" src="https://sslimages.shoppersstop.com/sys-master/root/h49/h80/27746366423070/Brands-never-before-on-sale_Web--16790-hp-page.gif" alt="" />

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h8f/h85/27798718349342/web_hp_realm_online-only-brand_20220602.jpg"
              className="d-block w-100"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h76/h83/27704359682078/web_hp_kleio_20220611.jpg"
              className="d-block w-100"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://sslimages.shoppersstop.com/sys-master/root/h8f/h35/27825375969310/HOME-carousel-Web-%284%29--vedas-online-collection-hp-2022-07-07.jpg"
              className="d-block w-100"
              alt=""
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
