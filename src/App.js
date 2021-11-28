import logo from "./logo.svg";
import "./App.css";
import gwTable from "./grossWeightTable.json";
import rlTable from "./roadLoadTable.json";
import React, { useState } from "react";

function App() {
  const [serviceWeight, setServiceWeight] = useState(12000);
  const [frontAxleOverride, setFrontAxleOverride] = useState(0);
  const [backAxleOverride, setBackAxleOverride] = useState(0);
  const [frontAxle, setFrontAxle] = useState(rlTable.singleAxleNoPower);
  const [backAxle, setBackAxle] = useState(rlTable.singleAxleNoPower);
  const [grossWeight, setGrossWeight] = useState(gwTable[0]);

  const [result, setResult] = useState([0, 0, 0, 0]);

  const handleServiceWeightChange = (evt) => {
    setServiceWeight(parseFloat(evt.target.value));
  };

  const handleFrontOverrideChange = (evt) => {
    setFrontAxleOverride(parseFloat(evt.target.value));
  };

  const handleBackOverrideChange = (evt) => {
    setBackAxleOverride(parseFloat(evt.target.value));
  };

  const handleFrontAxleChange = (evt) => {
    let values = rlTable[evt.target.value];
    setFrontAxle(values);
  };

  const handleBackAxleChange = (evt) => {
    let values = rlTable[evt.target.value];
    setBackAxle(values);
  };

  const handleGrossWeightChange = (evt) => {
    let values = gwTable[evt.target.value];
    setGrossWeight(values);
  };

  const doCalculate = (bk) => {
    let frontAxleWeightAllowance =
      frontAxleOverride < parseFloat(frontAxle[bk])
        ? frontAxleOverride
        : parseFloat(frontAxle[bk]);
    //console.log("FrontAxleWeightAllowance: ", frontAxleWeightAllowance);
    let backAxleWeightAllowance =
      backAxleOverride < parseFloat(backAxle[bk])
        ? backAxleOverride
        : parseFloat(backAxle[bk]);
    //console.log("BackAxleWeightAllowance: ", backAxleWeightAllowance);
    let addedTogether =
      parseFloat(frontAxleWeightAllowance) +
      parseFloat(backAxleWeightAllowance);
    let grossWeightAllowance = parseFloat(grossWeight[bk]);
    let result =
      addedTogether < grossWeightAllowance
        ? addedTogether
        : parseFloat(grossWeight[bk]);
    console.log(
      `BK: ${bk + 1}, AD: ${addedTogether}, GW: ${grossWeightAllowance}`
    );
    return result;
  };

  const calculate = (evt) => {
    let bk1 = doCalculate(0);
    let bk2 = doCalculate(1);
    let bk3 = doCalculate(2);
    let bk4 = doCalculate(3);

    setResult([bk1, bk2, bk3, bk4]);
  };

  return (
    <div className="App">
      <div>
        <label>Vehicle weight: </label>
        <input
          type="number"
          name="weight"
          value={serviceWeight}
          onChange={handleServiceWeightChange}
        />
      </div>
      <div>
        <label>Front axle override: </label>
        <input
          type="number"
          value={frontAxleOverride}
          onChange={handleFrontOverrideChange}
        />
      </div>
      <div>
        <label>Back axle override: </label>
        <input
          type="number"
          value={backAxleOverride}
          onChange={handleBackOverrideChange}
        />
      </div>
      <div>
        <label>Front axle: </label>
        <select name="frontAxle" onChange={handleFrontAxleChange}>
          {Object.keys(rlTable).map((key) => (
            <option value={key}>{key}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Back axle: </label>
        <select name="backAxle" onChange={handleBackAxleChange}>
          {Object.keys(rlTable).map((key) => (
            <option value={key}>{key}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Something: </label>
        <select name="grossWeight" onChange={handleGrossWeightChange}>
          {Object.keys(gwTable).map((key) => (
            <option value={key}>{key}</option>
          ))}
        </select>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <td>Class</td>
              <td>Weight Allowance</td>
              <td>Allowed Load</td>
            </tr>
          </thead>
          <tbody>
            {result.map((r, i) => (
              <tr>
                <td>BK{i + 1}</td>
                <td>{r * 1}</td>
                <td>{r * 1000 - serviceWeight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={calculate}>Calculate</button>
    </div>
  );
}

export default App;
