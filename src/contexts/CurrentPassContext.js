import { createContext, useContext, useState } from "react";

const CurrentPassContext = createContext();

export function CurrentPassProvider({ children }) {
  const [currentPass, setCurrentPass] = useState("test");

  return (
    <CurrentPassContext.Provider value={{ currentPass, setCurrentPass }}>
      {children}
    </CurrentPassContext.Provider>
  );
}

export function useCurrentPass() {
  return useContext(CurrentPassContext);
}
