import React from "react";

const ImgPage = (props) => {
  return (
    <div>
      <img height={300} width={300} src={props.image} alt="RackerAgent3" />
    </div>
  );
};

export default ImgPage;
