import React from "react";
import LightsControlMenu from "../components/lights-control-menu.component";
import Lights from "../components/lights.component";

interface Props {}

function LightsPage(props: Props) {
  const {} = props;

  return (
    <>
      <div className="container lights-page">
        <div>
          <LightsControlMenu />
        </div>
        <div>
          <Lights />
        </div>
      </div>
    </>
  );
}

export default LightsPage;
