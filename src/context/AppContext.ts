import { createContext, Dispatch, SetStateAction } from 'react';

export interface AppContextProps {
  isAuthenticated: boolean;
}

export interface AppContextType {
  app: AppContextProps;
  setApp: Dispatch<SetStateAction<AppContextProps>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
