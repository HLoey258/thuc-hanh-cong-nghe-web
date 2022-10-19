import React, { useState } from "react";

const Ex22 = () => {
  const [name, setName] = useState("Stilllonghair");
  const [age, setAge] = useState(200);
  return (
    <>
      <section>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <p>My name is {name}</p>
      </section>
      <section>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p>My age is {age}</p>
      </section>
    </>
  );
};

export default Ex22;