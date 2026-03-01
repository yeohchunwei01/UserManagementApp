import { ComponentProps } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { Text, View } from 'react-native';
import { Label, TextInput } from '@/components/atoms';

type ConditionalProps<T extends FieldValues> =
  | {
      control: Control<T>;
      name: Path<T>;
    }
  | {
      control?: never;
      name?: never;
    };

type FormTextInputProps<T extends FieldValues> = ComponentProps<typeof Label> &
  ComponentProps<typeof TextInput> &
  ConditionalProps<T>;

export const FormTextInput = <T extends FieldValues>({
  control,
  isRequired,
  name,
  title,
  ...restProps
}: FormTextInputProps<T>) => {
  const isController = control && name;
  const {
    field: { value, onChange },
    fieldState: { error },
  } = isController
    ? useController({ control, name })
    : {
        field: { value: undefined, onChange: undefined },
        fieldState: { error: undefined },
      };

  return (
    <View className="gap-0.5">
      <Label isRequired={isRequired} title={title} />
      <TextInput
        {...restProps}
        {...(isController && { value, onChangeText: onChange })}
      />
      {error?.message && (
        <Text className="text-red-600 text-base">{error.message}</Text>
      )}
    </View>
  );
};
