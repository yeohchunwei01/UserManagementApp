export type RootStackParamList = {
  AuthStack: undefined;
  AppTabs: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type AppTabsParamList = {
  Home: { userId: string };
};
