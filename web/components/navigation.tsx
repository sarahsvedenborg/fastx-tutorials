import Link from "next/link";
import styles from "../styles/navigation.module.scss";
import Toggle from "./Toggle";
import LogoFull from "./icons/LogoFull";

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
    <nav className={styles.navigation}>
      <div className={styles.navBlock}>
        <Link href="/">
          <a>
            {/* <img src="Logo.svg" width="30" /> */}
            <LogoFull />
          </a>
        </Link>
      </div>
      <div className={[styles.optionsMenu, styles.navBlock].join(" ")}>
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
    </nav>
  );
};

export default Navigation;
