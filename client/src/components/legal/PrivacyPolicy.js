import React, { useState } from "react";

import PrivacyPolicyEnglish from "./PrivacyPolicyEnglish";
import PrivacyPolicyGerman from "./PrivacyPolicyGerman";

import LangGerFlag from "../../img/germany-flag-wave.png";
import LangUKFlag from "../../img/united-kingdom-flag-wave.png";

function PrivacyPolicy() {
  const [english, setEnglish] = useState(true);

  const handleClick = () => setEnglish(!english);

  return (
    <div className="info_container_class">
      <div id="lang_container" onClick={handleClick}>
        <img src={!english ? LangUKFlag : LangGerFlag} alt="flag" />
        <div>
          &nbsp;
          {!english
            ? "zur englischen Version wechseln"
            : "see the German version"}
        </div>
      </div>
      {english ? <PrivacyPolicyEnglish /> : <PrivacyPolicyGerman />}
    </div>
  );
}

export default PrivacyPolicy;
