import "./App.scss";
import gwTable from "./data/grossWeightTable.json";
import rlTable from "./data/roadLoadTable.json";
import React, { useState } from "react";
import { calculate as calculateTS } from "./functions/calculations.ts";
import { useTranslation } from "react-i18next";

function App() {
  const [t] = useTranslation();
  const [serviceWeight, setServiceWeight] = useState(12000);
  const [frontAxleOverride, setFrontAxleOverride] = useState(0);
  const [backAxleOverride, setBackAxleOverride] = useState(0);
  const [frontAxle, setFrontAxle] = useState(null);
  const [backAxle, setBackAxle] = useState(null);
  const [grossWeight, setGrossWeight] = useState(null);
  const [displayKilos, setDisplayKilos] = useState(true);

  const [result, setResult] = useState([0, 0, 0, 0]);

  const handleServiceWeightChange = (evt) => {
    let value = parseFloat(evt.target.value);
    setServiceWeight(value);
    calculate();
  };

  const handleFrontOverrideChange = (evt) => {
    let value = parseFloat(evt.target.value);
    setFrontAxleOverride(value);
    calculate();
  };

  const handleBackOverrideChange = (evt) => {
    let value = parseFloat(evt.target.value);
    setBackAxleOverride(value);
    calculate();
  };

  const handleFrontAxleChange = (evt) => {
    let inputValue = evt.target.value;
    let value = (typeof(inputValue) !== "string") ? inputValue.toString() : inputValue;
    setFrontAxle(value);
    calculate();
  };

  const handleBackAxleChange = (evt) => {
    let inputValue = evt.target.value;
    let value = (typeof(inputValue) !== "string") ? inputValue.toString() : inputValue;
    setBackAxle(value);
    calculate();
  };

  const handleGrossWeightChange = (evt) => {
    let inputValue = evt.target.value;
    let value = (typeof(inputValue) !== "string") ? inputValue.toString() : inputValue;
    setGrossWeight(value);
    calculate();
  };

  const calculate = (evt) => {
    if (frontAxleOverride === null || frontAxleOverride === undefined) return;
    if (backAxleOverride === null || backAxleOverride === undefined) return;
    if (frontAxle === null || frontAxle === undefined) return;
    if (backAxle === null || backAxle === undefined) return;
    if (grossWeight === null || backAxle === undefined) return;

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
          <legend>{t("vehicleSpecification")}</legend>
          <div className="form-control">
            <label>{t("vehicleWeight")}</label>
            <input
              type="number"
              name="weight"
              value={serviceWeight}
              onChange={handleServiceWeightChange}
              pattern="[0-9]*"
            />
          </div>
          <div className="form-control">
            <label>{t("frontAxleOverride")}</label>
            <input
              type="number"
              value={frontAxleOverride}
              onChange={handleFrontOverrideChange}
              pattern="[0-9]*"
            />
          </div>
          <div className="form-control">
            <label>{t("backAxleOverride")}</label>
            <input
              type="number"
              value={backAxleOverride}
              onChange={handleBackOverrideChange}
              pattern="[0-9]*"
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>{t("tableSettings")}</legend>
          <div className="form-control">
            <label>{t("frontAxle")}</label>
            <select name="frontAxle" onChange={handleFrontAxleChange}>
              <option value={null}>{t("interface.pleaseSelect")}</option>
              {Object.keys(rlTable).map((key) => (
                <option value={key}>{key}</option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label>{t("backAxle")}</label>
            <select name="backAxle" onChange={handleBackAxleChange}>
              <option value={null}>{t("interface.pleaseSelect")}</option>
              {Object.keys(rlTable).map((key) => (
                <option value={key}>{key}</option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label>{t("weightTable")}</label>
            <select name="grossWeight" onChange={handleGrossWeightChange}>
              <option value={null}>{t("interface.pleaseSelect")}</option>
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
                <td className="header">{t("class")}</td>
                <td className="text-center header">{t("weightAllowance")}</td>
                <td className="text-right header">{t("allowedLoad")}</td>
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
      </div>
    </>
  );
}

export default App;
