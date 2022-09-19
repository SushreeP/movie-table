import React from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const Like = ({ value, onClick }) => {
  const button = value ? <BsHeartFill /> : <BsHeart />;

  return (
    <i onClick={onClick} style={{ cursor: "pointer" }}>
      {button}
    </i>
  );
};

export default Like;
