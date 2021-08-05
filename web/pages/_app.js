import { useState } from "react";
import { useRouter } from "next/router";
import "../styles/globals.scss";
import Navigation from "../components/navigation";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const {locale} = router
  let [isDarkMode, setIsDarkMode] = useState(true);
  let [isNorwegian, setIsNorwegian] = useState(locale == 'no-NB');
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const toggleLanguage = () => {
    router.push('', '', {locale: !isNorwegian ? 'no-NB' : 'en-US'})
    setIsNorwegian(!isNorwegian); 
  };

  return (
    <div className={["app", isDarkMode ? "themeDark" : "themeLight"].join(" ")}>
      <Navigation
        toggleMode={toggleMode}
        isDarkMode={isDarkMode}
        toggleLanguage={toggleLanguage}
        isNorwegian={isNorwegian}
      />
      <Component {...pageProps} isDarkMode={isDarkMode}/>
      <footer className="footer">
        <span>Laget av ...</span>
      </footer>
    </div>
  );
}

export default MyApp;
