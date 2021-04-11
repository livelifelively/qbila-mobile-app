import React from "react";

export const SettingsContext = React.createContext<{}>({});

interface SettingsProviderProps {}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  return (
    <SettingsContext.Provider value={{}}>
      {children}
    </SettingsContext.Provider>
  );
};
