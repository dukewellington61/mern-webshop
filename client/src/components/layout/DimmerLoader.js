import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const DimmerLoader = () => (
  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
    <Segment>
      <Dimmer active inverted>
        <Loader />
      </Dimmer>

      <Image
        src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
        style={{ height: "24rem" }}
      />
    </Segment>
  </div>
);

export default DimmerLoader;
