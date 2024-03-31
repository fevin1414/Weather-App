import React from "react";

const Hero = () => {
  return (
    <div className=" w-[60%] z-0">
      <div className="card card-side  shadow-md ">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body flex items-center justify-center">
          <h1 className="card-title">Clear</h1>
          <h2>Description</h2>
          <h3>Visibility</h3>
          <h3>Clouds</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
