import { ComponentProps } from 'react';
import { TextInput as RNTextInput, View } from 'react-native';
// import Ionicons from '@react-native-vector-icons/ionicons';
import { cn } from '@/libs/utils';

interface TextInputProps extends ComponentProps<typeof RNTextInput> {
  className?: string;
  isSecureTextEntryOption?: boolean;
}

export const TextInput = ({
  className,
  isSecureTextEntryOption,
  ...restProps
}: TextInputProps) => (
  <View
    className={cn(
      'border border-gray-300 rounded-lg px-3 py-4 bg-white',
      className,
    )}
  >
    <RNTextInput className="text-base leading-5" {...restProps} />
    {/* {isSecureTextEntryOption && <Ionicons name="search" size={24} color="gray" />} */}
  </View>
);
