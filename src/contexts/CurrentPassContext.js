import { createContext, useState } from "react";

export const CurrentPassContext = createContext();

export function CurrentPassProvider({ children }) {
  const [currentPass, setCurrentPass] = useState("test");

  return (
    <CurrentPassContext.Provider value={{ currentPass, setCurrentPass }}>
      {children}
    </CurrentPassContext.Provider>
  );
}
