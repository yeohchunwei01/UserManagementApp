import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export const ScreenLoading = () => {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount(prev => (prev + 1) % 4);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="bg-gray-300 flex-1 items-center justify-center">
      <View className="flex-row">
        <Text className="font-semibold text-white text-xl">Loading</Text>
        <Text className="font-semibold text-white text-xl w-5">{'.'.repeat(dotCount)}</Text>
      </View>
    </View>
  );
};
