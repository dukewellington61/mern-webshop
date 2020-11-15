import React, { Fragment, useState } from "react";

import LegalNoticeEnglish from "./LegalNoticeEnglish";
import LegalNoticeGerman from "./LegalNoticeGerman";

const LegalNotice = () => {
  const [english, setEnglish] = useState(true);

  const changeLanguage = () => setEnglish(!english);

  return (
    <Fragment>
      {english ? <LegalNoticeEnglish /> : <LegalNoticeGerman />}
    </Fragment>
  );
};

export default LegalNotice;
