import { Provider } from 'app/provider'
import { StatusBar } from 'expo-status-bar'
import AuthStack from '../stacks/auth-stack'

export default function App() {
    return (
        <Provider>
            <StatusBar />
            <AuthStack />
        </Provider>
    )
}
