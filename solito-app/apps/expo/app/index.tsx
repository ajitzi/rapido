// index app
import SplashScreen from 'app/screens/SplashScreen'
import HomeScreen from 'app/screens/home/HomeScreen'

const isAuthenticated = () => true

const Screen = () => {
  return isAuthenticated() ? <HomeScreen /> : <SplashScreen />
}
export default Screen
