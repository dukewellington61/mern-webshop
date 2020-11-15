import React, { Fragment, useState } from "react";

import PrivacyPolicyEnglish from "./PrivacyPolicyEnglish";
import PrivacyPolicyGerman from "./PrivacyPolicyGerman";

function PrivacyPolicy() {
  const [english, setEnglish] = useState(true);

  const changeLanguage = () => setEnglish(!english);

  return (
    <Fragment>
      {english ? <PrivacyPolicyEnglish /> : <PrivacyPolicyGerman />}
    </Fragment>
  );
}

export default PrivacyPolicy;
