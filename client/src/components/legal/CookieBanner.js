import React from "react";

const CookieBanner = ({ handleCookieAccept, handleCookieDecline }) => {
  return (
    <div id="cookie_banner_content">
      <div id="cookie_banner_text_wrapper">
        This Application uses Stripe checkout to simulate payment via credit
        card. Stripe sets a few cookies. If you don't want that hit the "I
        decline" button. This, however, will disable the simulated payment
        functionality. If you prefer this app to be fully funtional hit the "I
        accept button".
        <br />
        <br />
        Lern more about cookies here.
      </div>
      <div id="cookie_banner_button_Wrapper">
        <button
          id="cookie_banner_opt_in_button"
          className="cookie_banner_buttons"
          onClick={() => handleCookieAccept()}
        >
          I accept
        </button>
        <button
          id="cookie_banner_opt_out_button"
          className="cookie_banner_buttons"
          onClick={() => handleCookieDecline()}
        >
          I decline
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
