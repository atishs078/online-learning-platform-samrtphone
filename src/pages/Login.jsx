import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import {createStaticNavigation, useNavigation} from '@react-navigation/native'
import SignUp from './SignUp'
const Login = () => {
  const navigation = useNavigation()
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex flex-col items-center justify-center pt-2">
            <Image
              source={require("../assets/logo.webp")}
              className="h-[190px] w-[190px]"
            />
            <Text className="text-2xl font-segoe font-bold text-slate-800">
              Welcome Back!
            </Text>
            <Text className="text-xl font-bold text-slate-600 mt-1">
              Log In To Continue
            </Text>
          </View>

          <View className="flex flex-col  justify-start items-start p-6">
            <Text className="text-lg font-bold text-slate-700">Email</Text>
            <TextInput
              placeholder="Enter your email"
              keyboardType="email-address"
              className="border border-gray-300 w-full rounded-lg p-3 mt-2 text-base mb-2"
            />

            <Text className="text-lg font-bold text-slate-700 mt-2" >
              Password
            </Text>
            <TextInput
              placeholder="Enter your password"
              secureTextEntry
              className="border border-gray-300 w-full rounded-lg p-3 mt-2 text-base mb-2"
            />

            <View className="flex w-full justify-end items-end mt-1">
              <Text className="text-lg text-blue-600 font-bold">
                Forgot Password?
              </Text>
            </View>

            <Pressable className="w-full bg-orange-500 p-4 rounded-lg mt-5" onPress={()=>{navigation.navigate('Home')}} >
              <Text className="text-2xl font-extrabold text-white text-center">
                LOG IN
              </Text>
            </Pressable>
            <View className="flex justify-center items-center">
              <Text className="text-xl pt-4">Doesn't have an account? <Text className="text-blue-800" onPress={()=>{navigation.navigate('SignUp')}}>Sign up</Text> </Text>

            </View>

          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
