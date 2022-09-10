import React, { useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa";

const BtnPopUp = (props: any) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        zIndex: "100",
      }}
      className="animate-bounce bottom-5 right-10"
    >
      <div
        onKeyDown={() => setHovered(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => props.onClick && props.onClick()}
        className="cursor-pointer"
        style={{
          borderRadius: "50%",
          paddingTop: "25px",
          fontSize: "20px",
          ...{ color: hovered ? "blue" : "" },
        }}
      >
        <FaFacebookMessenger fontSize={70} />
      </div>
    </div>
  );
};

export default BtnPopUp;
