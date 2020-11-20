import React from "react";
import { Link } from "react-router-dom";

const CookieBanner = ({ handleCookieAccept, handleCookieDecline }) => {
  return (
    <div id="cookie_banner_content">
      <div id="cookie_banner_text_wrapper">
        This application uses Stripe checkout to simulate payment via credit
        card. Stripe sets a few cookies. If you don't want that, hit the "I
        decline" button. This, however, will disable the simulated payment
        functionality as provided by Stripe. If you prefer this app to be fully
        functional, hit the "I accept button".
        <br />
        <Link to="/privacy_policy">Lern more about cookies here.</Link>
      </div>
      <div id="cookie_banner_button_Wrapper">
        <button
          id="cookie_banner_opt_in_button"
          className="cookie_banner_buttons btn btn-success"
          type="button"
          onClick={() => handleCookieAccept()}
        >
          I accept
        </button>
        <button
          id="cookie_banner_opt_out_button"
          className="cookie_banner_buttons btn btn-warning"
          type="button"
          onClick={() => handleCookieDecline()}
        >
          I decline
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
