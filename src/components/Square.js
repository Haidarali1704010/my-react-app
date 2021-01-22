import React from "react";

const Square = ({ value, handleClick}) => {
  const style = value ? `squares ${value}` : `squares`;

  return (
    <button className={style} onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;