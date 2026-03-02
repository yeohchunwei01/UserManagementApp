import uuid from 'react-native-uuid';
import { Text, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/atoms';
import { FormTextInput } from '@/components/molecules';
import { useAuthContext } from '@/contexts';
import { useNavigation } from '@/libs/hooks';

interface FormValues {
  email: string;
  name: string;
  password: string;
}

export const Signup = () => {
  const navigate = useNavigation();
  const { signup } = useAuthContext();
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(
      z.object({
        email: z.email('Email is invalid'),
        name: z.string().refine(val => val.trim() !== '', {
          message: 'Name field is required',
        }),
        password: z.string().refine(val => val.trim().length > 6, {
          message: 'Password must contain more than 6 characters',
        }),
      }),
    ),
  });

  const onPressSubmit = async (values: FormValues) => {
    signup({ ...values, id: uuid.v4() });
  };

  return (
    <View className="flex-1 px-4 py-6 gap-6">
      <FormTextInput control={control} isRequired name="name" placeholder="Name" title="Name" />
      <FormTextInput
        control={control}
        isRequired
        keyboardType="email-address"
        name="email"
        placeholder="Email"
        title="Email"
      />
      <FormTextInput
        control={control}
        isRequired
        name="password"
        placeholder="Password"
        title="Password"
      />
      <Button isLoading={isSubmitting} title="Signup" onPress={handleSubmit(onPressSubmit)} />
      <Text className="text-base text-center">
        Already have an account?&nbsp;
        <Text className="text-blue-400" onPress={() => navigate.replace('Login')}>
          Login here!
        </Text>
      </Text>
    </View>
  );
};
