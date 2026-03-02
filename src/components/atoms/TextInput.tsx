import { useState, ComponentProps } from 'react';
import { TextInput as RNTextInput, View } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';
import { cn } from '@/libs/utils';

interface TextInputProps extends ComponentProps<typeof RNTextInput> {
  className?: string;
  isSecureTextEntryOption?: boolean;
}

export const TextInput = ({ className, isSecureTextEntryOption, ...restProps }: TextInputProps) => {
  const [isSecureText, setIsSecureText] = useState<boolean>(true);

  return (
    <View
      className={cn(
        'border border-gray-300 rounded-lg px-3 py-4 bg-white flex-row items-center',
        className,
      )}
    >
      <RNTextInput
        className="text-base leading-5 flex-1"
        {...(isSecureTextEntryOption && { secureTextEntry: isSecureText })}
        {...restProps}
      />
      {isSecureTextEntryOption && (
        <FontAwesomeIcon
          color="gray"
          name={isSecureText ? 'eye' : 'eye-slash'}
          size={20}
          onPress={() => setIsSecureText(status => !status)}
        />
      )}
    </View>
  );
};
