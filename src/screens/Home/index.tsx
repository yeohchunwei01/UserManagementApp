import { Text, View } from 'react-native';
import { Button } from '@/components/atoms';
import { useAuthContext } from '@/contexts';

export const Home = () => {
  const { user, logout } = useAuthContext();

  return (
    <View className="flex-1 justify-center gap-2 px-4 py-6">
      <Text className="text-center text-3xl font-semibold">{`Welcome ${user?.name}!`}</Text>
      <Text className="text-center text-lg mb-10">{`Your email is ${user?.email}`}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};
