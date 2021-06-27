import { useState } from "react";
import { useRouter } from "next/router";
import "../styles/globals.scss";
import Navigation from "../components/navigation";

function MyApp({ Component, pageProps }) {
  let [isDarkMode, setIsDarkMode] = useState(true);
  let [isNorwegian, setIsNorwegian] = useState(true);
  const toggleMode = () => {
    console.log("currentMode is dark", isDarkMode);
    setIsDarkMode(!isDarkMode);
  };
  const toggleLanguage = () => {
    console.log("current langu is norwegian", isNorwegian);
    setIsNorwegian(!isNorwegian);
  };
  /*   console.log("props", pageProps.__NEXT_LOCALE__);

  const router = useRouter();
  router.push({ locale: "en-US" });
  console.log("router locale", router.locale); */
  return (
    <div className={["app", isDarkMode ? "themeDark" : "themeLight"].join(" ")}>
      <Navigation
        toggleMode={toggleMode}
        isDarkMode={isDarkMode}
        toggleLanguage={toggleLanguage}
        isNorwegian={isNorwegian}
      />
      <Component {...pageProps} isDarkMode={isDarkMode} />
    </div>
  );
}

export default MyApp;
