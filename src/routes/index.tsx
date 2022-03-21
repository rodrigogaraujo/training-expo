import { createStackNavigator } from '@react-navigation/stack'
import { Detail } from '../screens/Detail'
import { Home } from '../screens/Home'
import { Header } from './components/Header'

export type RootStackParamList = {
  Home: undefined
  Detail: {
    id: string
    image: string
  }
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
      <RootStack.Screen name='Detail' component={Detail} />
    </RootStack.Navigator>
  )
}
