import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import RegisterEstacionamento from './RegisterEstacionamento'
import Estacionamento from './Estacionamento'

const Stack = createNativeStackNavigator()

const EstacionamentoRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Estacionamento' component={Estacionamento} />
        <Stack.Screen name='RegisterEstacionamento' component={RegisterEstacionamento} />
    </Stack.Navigator>
  )
}

export default EstacionamentoRoutes
