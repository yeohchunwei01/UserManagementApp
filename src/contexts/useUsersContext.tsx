import { createContext, useContext, Dispatch, SetStateAction } from 'react';

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

export interface Users extends UsersState {
  login: (user: User) => void;
  logout: () => void;
  signup: (user: User) => void;
}

export const UsersContext = createContext<Users | null>(null);

export const useUsersContext = () => {
  const context = useContext(UsersContext);

  if (!context) throw new Error('useUsers must be used within a UserProvider');

  return context;
};
