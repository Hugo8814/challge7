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
  const [tip, setTip] = useState(null);
  const [bill, setbill] = useState("");

  return (
    <div>
      <Bill bill={bill} setbill={setbill} />
      <Tip>how did you like your service?</Tip>
      <Tip> how did your friend like your service?</Tip>
      <Total />
      <Reset />
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
        onChange={(e) => setbill(e.target.value)}
      />
    </div>
  );
}

function Tip({ children, setTip }) {
  return (
    <div>
      <label>{children}</label>

      <select onChange={(e) => setTip(e.target.value)}>
        <option value="0">not good (0%)</option>
        <option value="10">good (10%)</option>
        <option value="15">geat (15%)</option>
        <option value="20">excellent (20%)</option>
        <option value="25">amazing (25%)</option>
      </select>
    </div>
  );
}

function Total() {
  return <h3>{`Your pay  x ( $a + $b Tip)`} </h3>;
}

function Reset() {
  return <button>Reset</button>;
}
