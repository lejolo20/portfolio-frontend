import React, { useState } from "react";
import { languageContext } from "./languageContext";

const StateLanguage = ({ children }) => {
  const [language, setLanguage] = useState(true);

  const languageFunction = () => {
    setLanguage(!language);
  };
  return (
    <languageContext.Provider value={{ language, languageFunction }}>
      {children}
    </languageContext.Provider>
  );
};

export default StateLanguage;
