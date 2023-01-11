import React, { useState } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [name, setName] = useState('Anyone');
  const [setSort] = useState(3);
  const [setPageItems] = useState(3);
  const [showCompleted] = useState(false);

  const values = {
    name,
    setSort,
    setPageItems,
    showCompleted,
  };

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
