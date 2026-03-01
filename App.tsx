/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useColorScheme, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { RootStack as NavigationStack } from '@/navigation';
import './global.css';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView className="flex-1">
        <NavigationStack />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
