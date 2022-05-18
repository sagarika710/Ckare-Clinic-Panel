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
import CrtPrescription from './Screens/CrtPrescription';
import Prescription from './Screens/Prescription';
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
        <Stack.Screen
          name="CrtPrescription"
          component={CrtPrescription}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Prescription"
          component={Prescription}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;