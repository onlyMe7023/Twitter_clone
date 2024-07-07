import React from 'react';
import * as Screens from '../components/screens/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationString from './navigationString';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'modal',
          animation: 'slide_from_right',
          animationTypeForReplace: 'push',
        }}>
         <Stack.Screen
          name={navigationString.INTIAL_SCREEN}
          component={Screens.InitialScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationString.Take_User_Name_For_Login}
          component={Screens.TakeUserNameForLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationString.LOGIN_SCREEN}
          component={Screens.LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={navigationString.SIGNUP_SCREEN}
          component={Screens.SignupScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};
export default AuthStack;
