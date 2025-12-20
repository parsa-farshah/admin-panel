"use client";
import { createContext, useState } from "react";

export const myTheme = createContext(null);

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(true);
  const [lang, setLang] = useState(true);

  return (
    <myTheme.Provider value={{ theme, setTheme, lang, setLang }}>
      {children}
    </myTheme.Provider>
  );
}
