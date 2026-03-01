import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  useNavigation as useReactNavigation,
  CompositeNavigationProp,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppTabsParamList, AuthStackParamList } from '@/navigation';

export type AppTabsNavigationProp = BottomTabNavigationProp<AppTabsParamList>;

export type AuthStackNavigationProp =
  NativeStackNavigationProp<AuthStackParamList>;

export type AppTabsNavigation = CompositeNavigationProp<
  AppTabsNavigationProp,
  AuthStackNavigationProp
>;

export const useNavigation = () => useReactNavigation<AppTabsNavigation>();
