import { Avatar } from "antd";
import React from "react";

interface Props {}

function Lights(props: Props) {
  const {} = props;

  return (
    <>
      <div className="container lights-row">
        <div className="lights-row-item">
          <Avatar
            style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
          ></Avatar>
        </div>
        <div className="lights-row-item">
          <Avatar
            style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
          ></Avatar>
        </div>
        <div className="lights-row-item">
          <Avatar
            style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
          ></Avatar>
        </div>
        <div className="lights-row-item">
          <Avatar
            style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
          ></Avatar>
        </div>
      </div>
    </>
  );
}

export default Lights;
