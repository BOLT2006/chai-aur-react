import React from "react";

const Filter = () => {
  const person = [
    { id: 1, name: "Yash", active: true },
    { id: 2, name: "Rahul", active: true },
    { id: 3, name: "Raj", active: false },
    { id: 4, name: "Rupesh", active: true },
    { id: 5, name: "Vedant", active: false },
    { id: 6, name: "Hrushi", active: false },
  ];

//   const activePerson = person.filter(data => data.active)
//   console.log(activePerson);
  
  return <>
    {person.filter((data) => !data.active).map((data) => (
        <div key={data.id}>
            {data.name}
        </div>
    ))}
  </>;
};

export default Filter;
