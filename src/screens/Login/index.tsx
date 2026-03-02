import { Alert, Text, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/atoms';
import { FormTextInput } from '@/components/molecules';
import { useAuthContext } from '@/contexts';
import { useNavigation } from '@/libs/hooks';

interface FormValues {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigation();
  const { users, login } = useAuthContext();
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(
      z.object({
        email: z.email('Email is invalid'),
        password: z.string().refine(val => val.trim().length > 6, {
          message: 'Invalid password format',
        }),
      }),
    ),
  });

  const onPressSubmit = async ({ email, password }: FormValues) => {
    const items = [...users];
    const user = items.find(i => i.email === email);
    if (!user) {
      Alert.alert('User not found!');
    } else if (user.password !== password) {
      Alert.alert('Incorrect password!');
    } else {
      login(user);
    }
  };

  return (
    <View className="flex-1 px-4 py-6 gap-6">
      <FormTextInput
        control={control}
        isRequired
        keyboardType="email-address"
        name="email"
        placeholder="Email Address"
        title="Email"
      />
      <FormTextInput
        control={control}
        isRequired
        isSecureTextEntryOption
        name="password"
        placeholder="Password"
        title="Password"
      />
      <Button isLoading={isSubmitting} title="Login" onPress={handleSubmit(onPressSubmit)} />
      <Text className="text-center text-base">
        Don&rsquo;t have an account yet?&nbsp;
        <Text className="text-blue-400" onPress={() => navigate.replace('Signup')}>
          Sign up now!
        </Text>
      </Text>
    </View>
  );
};
