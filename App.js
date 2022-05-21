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

import Crtprescription from './Screens/CrtPrescription'
import Prescription from './Screens/Prescription'
import Patientlist from './Screens/Patientlist';
import Checkprescription from './Screens/Checkprescription';
import Memberahipfreetrail from './Screens/Membershipfreetrail';
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
        <Stack.Screen name="Crtprescription" component={Crtprescription} options={{ headerShown: false }} />
        <Stack.Screen name="Prescription" component={Prescription} options={{ headerShown: false }} />
        <Stack.Screen name="Patientlist" component={Patientlist} options={{ headerShown: false }} />
        <Stack.Screen name="Checkprescription" component={Checkprescription} options={{ headerShown: false }} />
        <Stack.Screen name="Memberahipfreetrail" component={Memberahipfreetrail} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;