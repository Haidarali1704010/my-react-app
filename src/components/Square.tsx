import React from "react";

interface Prop {
  value:string | null;
  handleClick:(i:number)  => void ;
  currsquare:number
}

const Square = ({ value, handleClick,currsquare}:Prop): React.ReactElement => {
  const style: string = value ? `squares ${value}` : `squares`;

  return (
    <button className={style} onClick={() =>handleClick(currsquare)}>
      {value}
    </button>
  );
};

export default Square;