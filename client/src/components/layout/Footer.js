import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer_container">
      <div id="footer_content_container">
        <div id="github_link_container">
          <a
            className="footer_links"
            href="https://github.com/dukewellington61/mern-webshop"
            target="_blank"
            style={{ fontWeight: "bold" }}
          >
            see the code on github <i class="fab fa-github"></i>
          </a>
        </div>
        <div id="legal_container">
          <Link className="footer_links" to={"/privacy_policy"}>
            privacy policy
          </Link>
          <Link
            className="footer_links"
            to={"/legal_notice"}
            style={{ paddingLeft: "1rem" }}
          >
            legal notice
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
