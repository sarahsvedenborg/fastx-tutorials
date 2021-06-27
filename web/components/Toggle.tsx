import { useState } from "react";
import styles from "./styles/toggle.module.scss";

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
        return styles.mode;
      case "Language":
        return styles.language;
      default:
        return styles.default;
    }
  };

  return (
    <div className={[styles.toggle, getStyleClass()].join(" ")}>
      <div className={isDefault ? styles.barTrue : styles.barFalse}>
        <div className={styles.symbol} onClick={swapMode}></div>
      </div>
    </div>
  );
};

export default Toggle;
