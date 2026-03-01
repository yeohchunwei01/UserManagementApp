import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import * as Screens from '@/screens';
import { AuthStackParamList } from './types';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Login"
      component={() => (
        <View className="flex justify-center">
          <Text>Login</Text>
        </View>
      )}
    />
    <Stack.Screen
      name="Signup"
      component={() => (
        <View className="flex justify-center">
          <Text>Signup</Text>
        </View>
      )}
    />
  </Stack.Navigator>
);
