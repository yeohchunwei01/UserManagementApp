import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStack } from './AuthStack';
import { AppTabs } from './AppTabs';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="AppTabs" component={AppTabs} />
    </Stack.Navigator>
  </NavigationContainer>
);
