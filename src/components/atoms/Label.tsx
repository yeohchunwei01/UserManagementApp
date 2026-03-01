import { Text, View } from 'react-native';
import { cn } from '@/libs/utils';

interface LabelProps {
  className?: string;
  isRequired?: boolean;
  title: string;
}

export const Label = ({ className, isRequired, title }: LabelProps) => (
  <View className={cn('flex flex-row gap-1', className)}>
    <Text className="text-base">{title}</Text>
    {isRequired && <Text className="text-red-600">*</Text>}
  </View>
);
