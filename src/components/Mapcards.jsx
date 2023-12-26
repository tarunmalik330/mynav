import React from "react";

const Mapcards = () => {
  const carddata = [
    { name: "abc", age: 20 },
    { name: "pqr", age: 19 },
    { name: "xyz", age: 18 },
    { name: "mnl", age: 17 },
    { name: "jku", age: 16 },
    { name: "568", age: 15 },
  ];
  //   const number = carddata.filter((age) => age < 18);
  const age = carddata.filter((e) => e.age > 18);
  console.log(age);
  return (
    <div className=" container">
      {age.map((key) => {
        return (
          <div className=" d-flex gap-2">
            <h1 className=" pb-3">{key.name}</h1>
            <p>{key.age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Mapcards;
