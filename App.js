import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ---------------------screen--------------------
//------AMISHA--------
import Home from './Screens/Home';

//------DEEPALI--------


//------DINESH--------


//------AKASH--------


//------DEEPTI--------


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* ------AMISHA-------- */}
        <Stack.Screen name="Home" component={Home} />
        {/* ------DEEPALI-------- */}
        {/* ------DINESH-------- */}
        {/* ------AMISHA-------- */}
        {/* ------DEEPTI-------- */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;