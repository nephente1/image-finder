import React, { useState } from 'react';
import { StateContext } from '../context/appContext';

export const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [customOption, setCustomOption] = useState('');
  const [userData, setUserData] = useState({ name: '', surname: '' });

  const updateUserData = (name: string, surname: string) => {
    setUserData({ name: name, surname: surname });
  };

  const updateSelectedOption = (newCategory: string) => {
    setSelectedOption(newCategory);
  };

  const updateCustomOption = (newCategory: string) => {
    setCustomOption(newCategory);
  };

  return (
    <StateContext.Provider
      value={{
        userData,
        updateUserData,
        selectedOption,
        updateSelectedOption,
        customOption,
        updateCustomOption,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
