import "./App.scss";
import gwTable from "./data/grossWeightTable.json";
import rlTable from "./data/roadLoadTable.json";
import React, { useState } from "react";
import { calculate as calculateTS } from "./functions/calculations.ts";

function App() {
  const [serviceWeight, setServiceWeight] = useState(12000);
  const [frontAxleOverride, setFrontAxleOverride] = useState(0);
  const [backAxleOverride, setBackAxleOverride] = useState(0);
  const [frontAxle, setFrontAxle] = useState(rlTable.singleAxleNoPower);
  const [backAxle, setBackAxle] = useState(rlTable.singleAxleNoPower);
  const [grossWeight, setGrossWeight] = useState(gwTable[0]);
  const [displayKilos, setDisplayKilos] = useState(true);

  const [result, setResult] = useState([0, 0, 0, 0]);

  const handleServiceWeightChange = (evt) => {
    let value = parseFloat(evt.target.value);
    setServiceWeight(value);
  };

  const handleFrontOverrideChange = (evt) => {
    let value = parseFloat(evt.target.value);
    setFrontAxleOverride(value);
  };

  const handleBackOverrideChange = (evt) => {
    let value = parseFloat(evt.target.value);
    setBackAxleOverride(value);
  };

  const handleFrontAxleChange = (evt) => {
    setFrontAxle(evt.target.value);
  };

  const handleBackAxleChange = (evt) => {
    setBackAxle(evt.target.value);
  };

  const handleGrossWeightChange = (evt) => {
    setGrossWeight(evt.target.value);
  };

  const calculate = (evt) => {
    if (frontAxle === null) return;
    if (backAxle === null) return;
    if (grossWeight === null) return;

    let result = calculateTS(
      frontAxleOverride,
      backAxleOverride,
      frontAxle,
      backAxle,
      grossWeight
    );

    setResult(result);
  };

  return (
    <>
      <div className="App">
        <fieldset>
          <legend>Vehicle Specification</legend>
          <div className="form-control">
            <label>Vehicle weight</label>
            <input
              type="number"
              name="weight"
              value={serviceWeight}
              onChange={handleServiceWeightChange}
            />
          </div>
          <div className="form-control">
            <label>Front axle override</label>
            <input
              type="number"
              value={frontAxleOverride}
              onChange={handleFrontOverrideChange}
            />
          </div>
          <div className="form-control">
            <label>Back axle override</label>
            <input
              type="number"
              value={backAxleOverride}
              onChange={handleBackOverrideChange}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Table Settings</legend>
          <div className="form-control">
            <label>Front axle</label>
            <select name="frontAxle" onChange={handleFrontAxleChange}>
              <option value={null}>Please select</option>
              {Object.keys(rlTable).map((key) => (
                <option value={key}>{key}</option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label>Back axle</label>
            <select name="backAxle" onChange={handleBackAxleChange}>
              <option value={null}>Please select</option>
              {Object.keys(rlTable).map((key) => (
                <option value={key}>{key}</option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label>Weight Table</label>
            <select name="grossWeight" onChange={handleGrossWeightChange}>
              <option value={null}>Please select</option>
              {Object.keys(gwTable).map((key) => (
                <option value={key}>{key}</option>
              ))}
            </select>
          </div>
        </fieldset>
        <div className="result-table">
          <table>
            <thead>
              <tr>
                <td className="header">Class</td>
                <td className="text-center header">Weight Allowance</td>
                <td className="text-right header">Allowed Load</td>
              </tr>
            </thead>
            <tbody>
              {result.map((r, i) => (
                <tr>
                  <td className="header">BK{i + 1}</td>
                  <td className="text-center">
                    {displayKilos ? (
                      <span>{r} kg</span>
                    ) : (
                      <span>{r / 1000} t</span>
                    )}
                  </td>
                  <td className="text-right">
                    {displayKilos ? (
                      <span>{r - serviceWeight} kg</span>
                    ) : (
                      <span>{r / 1000 - serviceWeight} t</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="unit-toggle">
            <label onClick={() => setDisplayKilos(!displayKilos)}>
              Display in Kilogram
            </label>
            <input
              type="checkbox"
              checked={displayKilos}
              onChange={() => setDisplayKilos(!displayKilos)}
            />
          </div>
        </div>
        <button className="btn" onClick={calculate}>
          Calculate
        </button>
      </div>
    </>
  );
}

export default App;
