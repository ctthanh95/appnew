import * as React from 'react'
import { View, Text, Alert, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTab from '../screens/tab/BottomTab'
import Detail from '../screens/detail/Detail'
import Signin from '../screens/loginout/Signin'
import Signup from '../screens/loginout/Signup'
import Account from '../screens/account/Account'
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='BottomTab' component={BottomTab} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Detail' component={Detail} />
        <Stack.Screen name='Signin' component={Signin} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Account' component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
