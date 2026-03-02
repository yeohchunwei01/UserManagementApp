/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect, useState } from 'react';
import { useColorScheme, Alert, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScreenLoading } from '@/components/atoms';
import { User, UsersState, AuthContext } from '@/contexts';
import { ASYNC_STORAGE_USERS_KEY, ASYNC_STORAGE_USER_ID_KEY } from '@/libs/utils';
import { RootStack as NavigationStack } from '@/navigation';
import './global.css';

const App = () => {
  const [isInitializing, setIsInitializing] = useState<boolean>(false);
  const [usersState, setUsersState] = useState<UsersState>({
    user: null,
    users: [],
  });
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const initAuth = async () => {
      setIsInitializing(true);
      try {
        const asyncUsers = await AsyncStorage.getItem(ASYNC_STORAGE_USERS_KEY);
        const asyncUserId = await AsyncStorage.getItem(ASYNC_STORAGE_USER_ID_KEY);

        const users: User[] = asyncUsers ? JSON.parse(asyncUsers) : [];
        const userId = asyncUserId ? JSON.parse(asyncUserId) : undefined;
        const currentUser = users.find(u => u.id === userId) || null;
        setUsersState({ users, user: currentUser });
      } catch (error) {
        Alert.alert(error.message);
      } finally {
        setIsInitializing(false);
      }
    };

    initAuth();
  }, []);

  const login = async (user: User) => {
    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_USER_ID_KEY, JSON.stringify(user.id));
      setUsersState(prevState => ({ ...prevState, user }));
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem(ASYNC_STORAGE_USER_ID_KEY);
      setUsersState(prevState => ({ ...prevState, user: null }));
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const signup = async (user: User) => {
    try {
      await AsyncStorage.setItem(
        ASYNC_STORAGE_USERS_KEY,
        JSON.stringify([...usersState.users, user]),
      );
      await AsyncStorage.setItem(ASYNC_STORAGE_USER_ID_KEY, JSON.stringify(user.id));
      setUsersState(prevState => ({
        user,
        users: [...prevState.users, user],
      }));
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView className="flex-1">
        <AuthContext.Provider value={{ ...usersState, login, logout, signup }}>
          {isInitializing ? <ScreenLoading /> : <NavigationStack />}
        </AuthContext.Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
