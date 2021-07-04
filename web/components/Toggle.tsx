import { useState } from "react";

interface ToggleProps {
  toggleType: string;
  toggleValue: Function;
  isDefault: boolean;
  trueValue: string;
  falseValue: string;
}

export const Toggle = ({
  toggleType,
  toggleValue,
  isDefault,
  trueValue,
  falseValue,
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
    switch (toggleType) {
      case "Mode":
        return "mode";
      case "Language":
        return "language";
      default:
        return "default";
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
