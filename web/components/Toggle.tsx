import { useState } from "react";

interface ToggleProps {
  toggleType: string;
  toggleValue: Function;
  isDefault: boolean;
  trueValue: string;
  falseValue: string;
  isLarge?: boolean;
}

export const Toggle = ({
  toggleType,
  toggleValue,
  isDefault,
  trueValue,
  falseValue,
  isLarge=false
}: ToggleProps) => {
  const [selectedOption, setSelectedOption] = useState("row");
  const reverse = () => {
    setSelectedOption(selectedOption === "row" ? "row-reverse" : "row");
  };

  const swapMode = () => {
    toggleValue();
    reverse();
  };

  const getStyleClass = () => {
    let styleClass = isLarge ? "large" : ""
    switch (toggleType) {
      case "Mode":
        return styleClass + " mode";
      case "Language":
        return styleClass + " language";
      default:
        return styleClass + " default";
    }
  };

  return (
    <div className={["toggle", getStyleClass()].join(" ")} onClick={swapMode}>
      <div className={isDefault ? "barTrue" : "barFalse"}>
        <div className="symbol"></div>
      </div>
    </div>
  );
};

export default Toggle;
