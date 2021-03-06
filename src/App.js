import "./App.scss";
import gwTable from "./data/grossWeightTable.json";
import rlTable from "./data/roadLoadTable.json";
import React, { useState } from "react";
import { settingsQuery } from "./data/stores/settings";
import { useObservable } from "@ngneat/use-observable";
import {
  calculate as calculateTS,
  calculateAllowedLoad,
  convertToTonnes,
  convertToMillimetres
} from "./functions/calculations.ts";
import { useTranslation } from "react-i18next";

function App() {
  const [t] = useTranslation();
  const [serviceWeight, setServiceWeight] = useState(0);
  const [taxedWeight, setTaxedWeight] = useState(0);
  const [frontAxleOverride, setFrontAxleOverride] = useState(0);
  const [backAxleOverride, setBackAxleOverride] = useState(0);
  const [frontAxle, setFrontAxle] = useState(null);
  const [backAxle, setBackAxle] = useState(null);
  const [grossWeight, setGrossWeight] = useState(null);
  const [state] = useObservable(settingsQuery.state$);

  const [result, setResult] = useState([0, 0, 0, 0]);

  const handleServiceWeightChange = (evt) => {
    let value = parseFloat(evt.target.value);
    setServiceWeight(value);
  };

  const handleTaxedWeightChange = (evt) => {
    let value = parseFloat(evt.target.value);
    setTaxedWeight(value);
  }

  const handleFrontOverrideChange = (evt) => {
    let value = parseFloat(evt.target.value);
    setFrontAxleOverride(value);
  };

  const handleBackOverrideChange = (evt) => {
    let value = parseFloat(evt.target.value);
    setBackAxleOverride(value);
  };

  const handleFrontAxleChange = (evt) => {
    let inputValue = evt.target.value;
    let value =
      typeof inputValue !== "string" ? inputValue.toString() : inputValue;
    setFrontAxle(value);
  };

  const handleBackAxleChange = (evt) => {
    let inputValue = evt.target.value;
    let value =
      typeof inputValue !== "string" ? inputValue.toString() : inputValue;
    setBackAxle(value);
  };

  const handleGrossWeightChange = (evt) => {
    let inputValue = evt.target.value;
    let value =
      typeof inputValue !== "string" ? inputValue.toString() : inputValue;
    setGrossWeight(value);
  };

  const handleNumericInputFocus = (evt) => evt.target.select();

  const calculate = (evt) => {
    console.table(
      frontAxleOverride,
      backAxleOverride,
      frontAxle,
      backAxle,
      grossWeight
    );
    if (frontAxleOverride === null || frontAxleOverride === undefined) return;
    if (backAxleOverride === null || backAxleOverride === undefined) return;
    if (frontAxle === null || frontAxle === undefined) return;
    if (backAxle === null || backAxle === undefined) return;
    if (grossWeight === null || backAxle === undefined) return;

    let result = calculateTS(
      taxedWeight,
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
      <fieldset>
        <legend>{t("vehicleSpecification")}</legend>
        <div className="form-control">
          <label>{t("vehicleWeight")}</label>
          <input
            type="number"
            name="weight"
            value={serviceWeight}
            onFocus={handleNumericInputFocus}
            onChange={handleServiceWeightChange}
            pattern="[0-9]*"
          />
        </div>
        <div className="form-control">
          <label>{t("taxedWeight")}</label>
          <input 
            value={taxedWeight}
            onFocus={handleNumericInputFocus}
            onChange={handleTaxedWeightChange}
            type="number"
            pattern="[0-9]*"
          />
        </div>
        <div className="form-control">
          <label>{t("frontAxleOverride")}</label>
          <input
            type="number"
            value={frontAxleOverride}
            onFocus={handleNumericInputFocus}
            onChange={handleFrontOverrideChange}
            pattern="[0-9]*"
          />
        </div>
        <div className="form-control">
          <label>{t("backAxleOverride")}</label>
          <input
            type="number"
            value={backAxleOverride}
            onFocus={handleNumericInputFocus}
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
              <option key={"fa" + key} value={key}>
                {t(`axleTypes.${key}`)}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label>{t("backAxle")}</label>
          <select name="backAxle" onChange={handleBackAxleChange}>
            <option value={null}>{t("interface.pleaseSelect")}</option>
            {Object.keys(rlTable).map((key) => (
              <option key={"ba" + key} value={key}>
                {t(`axleTypes.${key}`)}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label>{t("weightTable")} ({state.displayInMillimetres ? t('units.mm.shorthand') : t('units.m.shorthand')})</label>
          <select name="grossWeight" onChange={handleGrossWeightChange}>
            <option value={null}>{t("interface.pleaseSelect")}</option>
            {Object.keys(gwTable).map((key) => (
              <option key={"gw" + key} value={key}>
                {state.displayInMillimetres ? convertToMillimetres(parseFloat(key)) : key}
              </option>
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
              <tr key={"r" + i}>
                <td className="header">BK{i + 1}</td>
                <td className="text-center">
                  {state.displayInKilos ? (
                    <span>{r} kg</span>
                  ) : (
                    <span>{convertToTonnes(r)} t</span>
                  )}
                </td>
                <td className="text-right">
                  {state.displayInKilos ? (
                    <span>{calculateAllowedLoad(r, serviceWeight)} kg</span>
                  ) : (
                    <span>
                      {convertToTonnes(calculateAllowedLoad(r, serviceWeight))}{" "}
                      t
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={() => calculate()} className="btn">
        {t("interface.calculate")}
      </button>
    </>
  );
}

export default App;
