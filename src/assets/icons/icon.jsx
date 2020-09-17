import React from "react";
import LeftArrowIcon from "./leftArrowIcon";
import SendIcon from "./sendIcon";

const Icon = ({ name }) => {
  switch (name) {
    case "LeftArrow":
      return <LeftArrowIcon />;
    case "Send":
      return <SendIcon />;
    default:
      return "";
  }
};

export default Icon;
