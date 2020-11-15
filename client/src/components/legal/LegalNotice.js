import React, { useState } from "react";

import LegalNoticeEnglish from "./LegalNoticeEnglish";
import LegalNoticeGerman from "./LegalNoticeGerman";

import LangGerFlag from "../../img/germany-flag-wave.png";
import LangUKFlag from "../../img/united-kingdom-flag-wave.png";

const LegalNotice = () => {
  const [english, setEnglish] = useState(true);

  const handleClick = () => setEnglish(!english);

  return (
    <div className="info_container_class">
      <div id="lang_container" onClick={handleClick}>
        <img src={!english ? LangUKFlag : LangGerFlag} alt="flag" />
        <div>
          &nbsp;
          {!english
            ? "switch to English version"
            : "zur deutschen Version wechseln"}
        </div>
      </div>
      {english ? <LegalNoticeEnglish /> : <LegalNoticeGerman />}
    </div>
  );
};

export default LegalNotice;
