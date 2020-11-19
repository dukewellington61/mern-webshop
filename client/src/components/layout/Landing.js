import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

import img_1 from "../../img/carousel/img_1.jpg";
import img_2 from "../../img/carousel/img_2.jpg";
import img_3 from "../../img/carousel/img_3.jpg";
import img_4 from "../../img/carousel/img_4.jpg";
import img_5 from "../../img/carousel/img_5.jpg";
import img_6 from "../../img/carousel/img_6.jpg";

const Landing = () => {
  return (
    <div id="landing_container">
      <Carousel>
        <Carousel.Item>
          <Link to="/products">
            {" "}
            <img className="carousel_image" src={img_1} alt="First slide" />
            <Carousel.Caption
              style={{
                width: "100%",
                right: "0",
                left: "0",
                // fontSize: "0.75rem",
              }}
            >
              Free photo 109899589 © creativecommonsstockphotos -
              <a href="https://www.dreamstime.com">Dreamstime.com</a>
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
            <img className="carousel_image" src={img_3} alt="Fourth slide" />
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

        <Carousel.Item>
          <Link to="/products">
            {" "}
            <img className="carousel_image" src={img_4} alt="Fourth slide" />
            <Carousel.Caption>
              <span>
                Photo by{" "}
                <a href="https://unsplash.com/@kelloggkid?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Greg Boll
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/high-wheel?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/products">
            {" "}
            <img className="carousel_image" src={img_5} alt="Fourth slide" />
            <Carousel.Caption>
              <span>
                Photo by{" "}
                <a href="https://unsplash.com/@chriskendall?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Chris Kendall
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Unsplash
                </a>
              </span>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/products">
            {" "}
            <img className="carousel_image" src={img_6} alt="Fourth slide" />
            <Carousel.Caption>
              <span>
                Photo by{" "}
                <a href="https://unsplash.com/@vaccinium?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Dmitrii Vaccinium
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
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
