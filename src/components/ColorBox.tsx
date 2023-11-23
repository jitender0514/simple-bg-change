import React from "react";
import { ThemeColorOption } from "../shared/types/ThemeColorOption";

type Props = {
  theme: ThemeColorOption;
  setSelected: React.Dispatch<React.SetStateAction<ThemeColorOption | null>>;
};

const ColorBox: React.FC<Props> = ({ theme, setSelected }: Props) => {
  return (
    <div className="color-option" onClick={()=> setSelected(theme)}>
      <div className={`${theme.color_name} color-box`}></div>{" "}
      <div>{theme.color}</div>
    </div>
  );
};
export default ColorBox;
