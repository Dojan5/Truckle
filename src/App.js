import "./App.scss";
import gwTable from "./grossWeightTable.json";
import rlTable from "./roadLoadTable.json";
import React, { useState } from "react";
import { Titlebar } from "./components/titlebar";
import { Menubar } from "./components/menubar";

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
    let frontOverrideValue =
      frontAxleOverride < 1000 ? frontAxleOverride : frontAxleOverride / 1000;
    let backOverrideValue =
      backAxleOverride < 1000 ? backAxleOverride : backAxleOverride / 1000;
    let rlFront = parseFloat(frontAxle[bk]);
    let rlBack = parseFloat(backAxle[bk]);
    let gW = parseFloat(grossWeight[bk]);

    let frontAxleWeightAllowance =
      frontOverrideValue <= rlFront ? frontOverrideValue : rlFront;
    console.log(typeof frontAxleWeightAllowance);

    let backAxleWeightAllowance =
      backOverrideValue <= rlBack ? backOverrideValue : rlBack;
    console.log(typeof backAxleWeightAllowance);

    let addedTogether = frontAxleWeightAllowance + backAxleWeightAllowance;

    let grossWeightAllowance = gW;
    let result = addedTogether < grossWeightAllowance ? addedTogether : gW;

    console.table({
      frontAxleOverride,
      backAxleOverride,
      rlFront,
      rlBack,
      gW,
      frontAxleWeightAllowance,
      backAxleWeightAllowance,
      addedTogether,
      grossWeightAllowance,
      result,
    });
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
              {Object.keys(rlTable).map((key) => (
                <option value={key}>{key}</option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label>Back axle</label>
            <select name="backAxle" onChange={handleBackAxleChange}>
              {Object.keys(rlTable).map((key) => (
                <option value={key}>{key}</option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label>Weight Table</label>
            <select name="grossWeight" onChange={handleGrossWeightChange}>
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
                    {displayKilos ? (<span>{r * 1000} kg</span>) : (<span>{r} t</span>)}
                  </td>
                  <td className="text-right">
                    {displayKilos ? (
                      <span>{r * 1000 - serviceWeight} kg</span>
                    ) : (
                      <span>{r - serviceWeight} t</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="unit-toggle">
            <label
              onClick={() => setDisplayKilos(!displayKilos)}
            >Display in Kilogram</label>
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
