import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Screens from '@/screens';
import { AppTabsParamList } from './types';

const Tab = createBottomTabNavigator<AppTabsParamList>();

export const AppTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Screens.Home}
      options={{
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
          <FontAwesomeIcon color={color} name="home" size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);
