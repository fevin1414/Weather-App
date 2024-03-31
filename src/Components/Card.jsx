import React from "react";

const Card = ({ Value1, Value2, Value3, Value4, Value5, image }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="flex items-center justify-center ">{image}</div>
        <div className="card-body items-center text-center flex">
          <div className="flex flex-col">
            <h1 className="card-title"> {Value1}</h1>
          </div>
          <div className="flex flex-col">
            <h3 className="card-title">{Value2}</h3>
            <h1 className="card-title">{Value3}</h1>
            <h3 className="card-title">{Value4}</h3>
            <h3 className="card-title"> {Value5}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
