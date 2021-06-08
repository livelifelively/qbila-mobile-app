import React from 'react';

export const SettingsContext = React.createContext<Record<string, unknown>>({});

// interface SettingsProviderProps {}

export const SettingsProvider: React.FC = ({ children }) => {
  return <SettingsContext.Provider value={{}}>{children}</SettingsContext.Provider>;
};
