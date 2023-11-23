import { useState } from "react";
import ColorBox from "../components/ColorBox";
import { ThemeColorOption } from "../shared/types/ThemeColorOption";

const themeOptions: ThemeColorOption[] = [
  {
    color_name: "bright-red-orange",
    color: "#F75E25",
  },
  {
    color_name: "papyrus-white",
    color: "#CFD3CD",
  },
  {
    color_name: "pearl-dark-grey",
    color: "#828282",
  },
  {
    color_name: "traffic-blue",
    color: "#063971",
  },
  {
    color_name: "iron-grey",
    color: "#434B4D",
  },
  {
    color_name: "pastel-orange",
    color: "#FF7514",
  },
  {
    color_name: "ochre-yellow",
    color: "#AEA04B",
  },
  {
    color_name: "cream",
    color: "#FDF4E3",
  },
];

const Themes: React.FC = () => {

  const [selected, setSelected] =  useState<ThemeColorOption|null>(null)
  return (
    <div className={`${selected ? selected.color_name : ''} theme-bg-color`}>
      <div className="container-box">
        <h1 className="header-text">Themes</h1>
        <div className="color-options">
          {themeOptions.map((theme: ThemeColorOption) => (
            <ColorBox key={theme.color} theme={theme} setSelected={setSelected} />
          ))}
        </div>
        <p>
          Selected theme: <strong>{selected ? selected.color : ''}</strong>
        </p>
      </div>
    </div>
  );
};

export default Themes;
