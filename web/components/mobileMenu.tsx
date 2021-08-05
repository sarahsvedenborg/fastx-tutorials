import { useState } from "react";
import Toggle from "./Toggle";
import MenuSVG from './icons/menuSVG'
import CloseSVG from './icons/closeSVG'

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
  {/*     <button onClick={() => setMenuOpen(!isMenuOpen)}>{isMenuOpen ? <CloseSVG /> : <MenuSVG />}</button>  */}
      <button onClick={() => setMenuOpen(!isMenuOpen)}><img aria-hidden src={isMenuOpen ? '/close.png' : '/menu.png'}/></button> 
      <div className={["mobileMenu", isMenuOpen ? "" : "closed"].join(" ")}>
        <Toggle
          toggleType="Mode"
          toggleValue={toggleMode}
          isDefault={isDarkMode}
          trueValue="Dark mode"
          falseValue="Light mode"
          isLarge
        />
        <Toggle
          toggleType="Language"
          toggleValue={toggleLanguage}
          isDefault={isNorwegian}
          trueValue="NOR"
          falseValue="ENG"
          isLarge
        />
      </div>
    </div>
  );
};

export default MobileMenu;
