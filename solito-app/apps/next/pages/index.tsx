import SplashScreen from '@gluestack/app/SplashScreen'
import HomeScreen from '@gluestack/app/home/HomeScreen'

const isAuthenticated = () => true
const Screen = () => {
  return isAuthenticated() ? <HomeScreen /> : <SplashScreen />
}

export default Screen
