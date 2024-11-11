import { createContext } from 'react';

interface StateContextType {
  selectedOption: string;
  updateSelectedOption: (option: string) => void;
  userData: { name: string; surname: string };
  updateUserData: (name: string, surname: string) => void;
  customOption: string;
  updateCustomOption: (option: string) => void;
}

// Create context with default values
export const StateContext = createContext<StateContextType>({
  selectedOption: '',
  updateSelectedOption: () => {},
  userData: { name: '', surname: '' },
  updateUserData: () => {},
  customOption: '',
  updateCustomOption: () => {},
});
