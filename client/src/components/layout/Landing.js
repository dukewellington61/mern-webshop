import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

import img_1 from "../../img/carousel/img_1.jpg";
import img_2 from "../../img/carousel/img_2.jpg";
import img_3 from "../../img/carousel/img_3.jpg";

const Landing = (props) => {
  return (
    <div id="landing_container">
      <Carousel>
        <Carousel.Item>
          <Link to="/products">
            {" "}
            <img className="carousel_image" src={img_1} alt="First slide" />
            <Carousel.Caption>
              Free photo 109899589 © creativecommonsstockphotos - Dreamstime.com
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/products">
            {" "}
            <img className="carousel_image" src={img_2} alt="Second slide" />
            <Carousel.Caption>
              <span>
                Photo by{" "}
                <a href="https://unsplash.com/@bechbox?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Mikkel Bech
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/license?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/products">
            {" "}
            <img className="carousel_image" src={img_3} alt="Third slide" />
            <Carousel.Caption>
              <span>
                Photo by{" "}
                <a href="https://unsplash.com/@robertbye?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Robert Bye
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/bicycle?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Landing;
