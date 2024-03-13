// index app
import * as React from 'react'
import SplashScreen from 'app/screens/SplashScreen'
import HomeScreen from 'app/screens/home/HomeScreen'
import AuthStack from "../stacks/auth-stack";
import HomeStack from "../stacks/home-stack";

const isAuthenticated = () => false

const Screen = () => {
  return isAuthenticated() ? <HomeScreen /> : <SplashScreen />
}
export default Screen
