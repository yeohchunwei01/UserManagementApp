import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Screens from '@/screens';
import { AppTabsParamList } from './types';

const Tab = createBottomTabNavigator<AppTabsParamList>();

export const AppTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Screens.Home} />
  </Tab.Navigator>
);
