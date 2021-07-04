import { useState } from "react";
import Toggle from "./Toggle";

interface NavigationProps {
  isDarkMode: boolean;
  toggleMode: Function;
  isNorwegian: boolean;
  toggleLanguage: Function;
}

const MobileMenu = ({
  isDarkMode,
  toggleMode,
  isNorwegian,
  toggleLanguage,
}: NavigationProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="mobileMenuWrapper">
      <img
        src="/mobileMenu.png"
        aria-hidden
        onClick={() => setMenuOpen(!isMenuOpen)}
      />
      <div className={["mobileMenu", isMenuOpen ? "" : "closed"].join(" ")}>
        <Toggle
          toggleType="Mode"
          toggleValue={toggleMode}
          isDefault={isDarkMode}
          trueValue="Dark mode"
          falseValue="Light mode"
        />
        <Toggle
          toggleType="Language"
          toggleValue={toggleLanguage}
          isDefault={isNorwegian}
          trueValue="NOR"
          falseValue="ENG"
        />
      </div>
    </div>
  );
};

export default MobileMenu;
