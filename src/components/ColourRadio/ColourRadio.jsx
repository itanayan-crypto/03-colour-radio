import { useState } from "react";
import "./ColourRadio.css";

const COLOURS = [
  { name: "Green", hex: "#3ddc97" },
  { name: "Red", hex: "#ff5d5d" },
  { name: "Blue", hex: "#4d8bff" },
  { name: "Yellow", hex: "#ffd23f" },
  { name: "Purple", hex: "#b185ff" },
];

export default function ColourRadio() {
  const [value, setValue] = useState("Red");
  const current = COLOURS.find((c) => c.name === value);

  return (
    <div className="colour-layout">
      <div
        className="orb"
        style={{ background: current.hex }}
        role="img"
        aria-label={`Circle filled with ${current.name}`}
      >
        {current.name}
      </div>

      <fieldset className="panel colour-panel">
        <legend className="legend">Pick a colour</legend>
        {COLOURS.map((c) => (
          <label key={c.name} className="radio-pill">
            <input
              type="radio"
              name="colour"
              value={c.name}
              checked={value === c.name}
              onChange={() => setValue(c.name)}
            />
            <span className="pill">
              <span className="swatch" style={{ background: c.hex }} />
              {c.name}
            </span>
          </label>
        ))}
      </fieldset>
    </div>
  );
}
