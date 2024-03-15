import React, { useState } from "react";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

export default App;

function TipCalculator() {
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  const [bill, setbill] = useState("");
  const tip = bill * ((tip1 + tip2) / 2 / 100);
  function handleReset() {
    setbill("");
    setTip1(0);
    setTip2(0);
  }

  return (
    <div>
      <Bill bill={bill} setbill={setbill} />
      <Tip tips={tip1} setTip={setTip1}>
        how did you like your service?
      </Tip>
      <Tip tips={tip2} setTip={setTip2}>
        how did your friend like your service?
      </Tip>
      <Total bill={bill} tip={tip} />
      <Reset handleReset={handleReset} />
    </div>
  );
}
function Bill({ bill, setbill }) {
  return (
    <div>
      <label>How much was your bill?</label>
      <input
        type="number"
        placeholder="bill value"
        value={bill}
        onChange={(e) => setbill(Number(e.target.value))}
      />
    </div>
  );
}

function Tip({ children, setTip, tips }) {
  return (
    <div>
      <label>{children}</label>

      <select value={tips} onChange={(e) => setTip(Number(e.target.value))}>
        <option value={0}>not good (0%)</option>
        <option value={10}>good (10%)</option>
        <option value={15}>geat (15%)</option>
        <option value={20}>excellent (20%)</option>
        <option value={25}>amazing (25%)</option>
      </select>
    </div>
  );
}

function Total({ bill, tip }) {
  return (
    <h3>
      Your pay {bill + tip} ${bill} + ${tip}
    </h3>
  );
}

function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}
