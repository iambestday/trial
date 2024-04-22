import React, { useState } from "react";

function CheckBase2And0() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

  const getNumberBase = (number) => {
    const parsedNumber = parseInt(number, 10);
    const base4Number = parsedNumber.toString(4);
    return base4Number;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const baseNumber = getNumberBase(number);
    const hasBase2 = baseNumber.includes("2");
    const hasBase0 = baseNumber.includes("0");
    setResult({
      number: number,
      base4Number: baseNumber,
      hasBase2: !hasBase2,
      hasBase0: !hasBase0,
    });
    console.log(hasBase2,hasBase0)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          عدد- پیش فرض مبنای 10 است: 
          <input type="text" value={number} onChange={handleInputChange} />
        </label>
        <button type="submit">بررسی</button>
      </form>
      {result && (
        <div>
          <p>عدد: {result.number}</p>
          <p>مبنای عدد: {result.base4Number}</p>
          <p>دارای مبنای 2: {result.hasBase2 ? "خیر" : "بله"}</p>
          <p>دارای مبنای 0: {result.hasBase0 ? "خیر" : "بله"}</p>
          <p>دارای مبنای 0 و 2: {result.hasBase0 ===false && result.hasBase2===false ? "good" : "bad"}</p>
          <p>{!result.hasBase0 && !result.hasBase2 ? "خوب است" : "بد است"}</p>

          
        </div>
      )}
      
    </div>
  );
}

export default CheckBase2And0;
