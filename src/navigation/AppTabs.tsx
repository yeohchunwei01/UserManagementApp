import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppTabsParamList } from './types';

const Tab = createBottomTabNavigator<AppTabsParamList>();

export const AppTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={() => null} />
  </Tab.Navigator>
);
