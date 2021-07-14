import React from "react";

const style = {
  background: "lightblue",
	border: "2px solid darkblue",
	fontSize: "30px",
	fontWeight: "800",
	cursor: "pointer",
	outline: "none",
}
const Square = ({ value, onClick }) => {
	// console.log("square", value)
  return <button style={style} onClick={onClick}>{value.display}</button>;
};

export default Square;
