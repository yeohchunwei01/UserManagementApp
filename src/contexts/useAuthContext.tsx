import { createContext, useContext } from 'react';

export interface User {
  email: string;
  id: string;
  name: string;
  password: string;
}

export interface UsersState {
  user: User | null;
  users: User[];
}

export interface Auth extends UsersState {
  login: (user: User) => void;
  logout: () => void;
  signup: (user: User) => void;
}

export const AuthContext = createContext<Auth | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within a AuthContext.Provider');

  return context;
};
