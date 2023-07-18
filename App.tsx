import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Credit from './components/creditDebit/Credit';
import Debit from './components/creditDebit/Debit';
import Home from './components/Home';
import Card from './components/Card/Card';
import AllTransition from './components/Card/AllTransition';



export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={Credit} name="Credit" />
        <Stack.Screen component={Debit} name="Debit" />
        <Stack.Screen component={Card} name="Card" />
        <Stack.Screen component={AllTransition} name="Transactions" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
