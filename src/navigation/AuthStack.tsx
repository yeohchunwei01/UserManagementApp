import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '@/screens';
import { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerBackButtonDisplayMode: 'minimal' }}>
    <Stack.Screen name="Login" component={Screens.Login} />
    <Stack.Screen name="Signup" component={Screens.Signup} />
  </Stack.Navigator>
);
