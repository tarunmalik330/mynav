import React from "react";

const BtnPage = (props) => {
  return (
    <div>
      <button
        // name="click me"
        className=" bg-transparent text-black py-2 px-3 rounded-4"
      >
        {props.name}
      </button>
    </div>
  );
};

export default BtnPage;
