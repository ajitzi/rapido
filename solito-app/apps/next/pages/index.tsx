import SplashScreen from '@gluestack/app/SplashScreen'
import HomeScreen from '@gluestack/app/home/HomeScreen'
import SignIn from '@gluestack/app/auth/SignIn'

const isAuthenticated = () => true
const Screen = () => {
  return isAuthenticated() ? <HomeScreen /> : <SignIn />
}

export default Screen
