import { useState } from "react";

export default function TemperatureConvert() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c"); // c or f

  function toFahrenheit() {
    return temperature * 1.8 + 32;
  }

  function toCelsius() {
    return (temperature - 32) / 1.8;
  }

  return (
    <>
      <h2>Temperature Converter</h2>
      <label>
        Temperature in C:{" "}
        <input
          value={scale === "c" ? temperature : toCelsius()}
          type="text"
          onChange={(e) => {
            setTemperature(e.target.value);
            setScale("c");
          }}
        />
      </label>
      <br></br>
      <label>
        Temperature in F:{" "}
        <input
          value={scale === "f" ? temperature : toFahrenheit()}
          type="text"
          onChange={(e) => {
            setTemperature(e.target.value);
            setScale("f");
          }}
        />
      </label>
    </>
  );
}
