import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home'
import { Header } from './components/Header'

export type RootStackParamList = {
  Home: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const RootStack = createStackNavigator()

export const Routes = () => {
  return (
    <RootStack.Navigator screenOptions={{ header: Header }}>
      <RootStack.Screen name='Home' component={Home} />
    </RootStack.Navigator>
  )
}
