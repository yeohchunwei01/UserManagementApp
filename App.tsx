/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { useColorScheme, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { User, UsersState, UsersContext } from '@/contexts';
import { RootStack as NavigationStack } from '@/navigation';
import './global.css';

const App = () => {
  const [usersState, setUsersState] = useState<UsersState>({
    user: null,
    users: [],
  });
  const isDarkMode = useColorScheme() === 'dark';

  const login = (user: User) => {
    setUsersState(prevState => ({ ...prevState, user }));
  };

  const logout = () => {
    setUsersState(prevState => ({ ...prevState, user: null }));
  };

  const signup = (user: User) => {
    setUsersState(prevState => ({
      user,
      users: [...prevState.users, user],
    }));
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView className="flex-1">
        <UsersContext.Provider value={{ ...usersState, login, logout, signup }}>
          <NavigationStack />
        </UsersContext.Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
