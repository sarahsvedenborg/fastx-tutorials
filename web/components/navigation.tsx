import Link from "next/link";
import Toggle from "./Toggle";
import LogoFull from "./icons/LogoFull";
import MobileMenu from "./mobileMenu";

interface NavigationProps {
  isDarkMode: boolean;
  toggleMode: Function;
  isNorwegian: boolean;
  toggleLanguage: Function;
}

const Navigation = ({
  isDarkMode,
  toggleMode,
  isNorwegian,
  toggleLanguage,
}: NavigationProps) => {
  return (
    <nav className="navigation">
      <div className="navBlock">
        <Link href="/">
          <a>
            <LogoFull />
          </a>
        </Link>
      </div>
      <div className="optionsMenu navBlock">
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
      <MobileMenu
        isDarkMode={isDarkMode}
        toggleMode={toggleMode}
        isNorwegian={isNorwegian}
        toggleLanguage={toggleLanguage}
      /> 
    </nav>
  );
};

export default Navigation;
