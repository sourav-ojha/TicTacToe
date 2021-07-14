import React from "react";
import { FaTimes, FaRegCircle, FaPen } from "react-icons/fa";
import "./style.css";

const Icons = ({ choice }) => {
  switch (choice) {
    case "cross":
      return <FaTimes className="cross" />;
    case "circle":
      return <FaRegCircle className="circle" />;
    default:
      return <FaPen />;
  }
};

export default Icons;
