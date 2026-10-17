import React from "react";

const Item = () => {
  const age = 2;
  const gmail = false;
  return (
    <>
    <div>
      {age > 18 ? (
        <>
          <h1>You can drive</h1>
        </>
      ) : (
        <>
          <h1>You are not Eligible to drive</h1>{" "}
        </>
      )}
    </div>
    {gmail && <h1>You are not Eligible to drive</h1>}
    </>
  );
};

export default Item;
