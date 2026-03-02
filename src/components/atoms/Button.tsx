import { ActivityIndicator, Pressable, Text } from 'react-native';
import { cn } from '@/libs/utils';

interface ButtonProps {
  className?: string;
  isLoading?: boolean;
  title: string;
  onPress?: () => void;
}

export const Button = ({ className, isLoading, title, onPress }: ButtonProps) => (
  <Pressable
    className={cn(
      'bg-black py-4 rounded-md justify-center flex-row gap-2',
      isLoading && 'bg-gray-300 pointer-events-none',
      className,
    )}
    onPress={onPress}
  >
    {isLoading && <ActivityIndicator />}
    <Text className=" text-white text-base font-semibold text-center">{title}</Text>
  </Pressable>
);
