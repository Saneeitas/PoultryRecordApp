import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import SignUp from './app/screens/SignUp';
import Index from './app/screens/Index';
import Poultry from './app/screens/Poultry';
import Egg from './app/screens/Egg';
import Home from './app/screens/Home';
import Entry from './app/screens/Entry';
import PoultryDetail from './app/screens/PoultryDetail';
import EggDetail from './app/screens/EggDetail';
import AddPoultry from './app/screens/AddPoultry';
import AddEgg from './app/screens/AddEgg';


const Stack = createNativeStackNavigator();


export default function App() {

return (
  <NavigationContainer>
  <Stack.Navigator>
   <Stack.Screen
     name="Home"
     component={Home}
   />
   <Stack.Screen
     name="Signup"
     component={SignUp}
   />
   <Stack.Screen
     name="Index"
     component={Index}
   />
   <Stack.Screen
     name="Login"
     component={Login}
   />
   <Stack.Screen
     name="Entry"
     component={Entry}
   />
    <Stack.Screen name="PoultryRecord" component={Poultry} />
    <Stack.Screen name="Poultry Detail" component={PoultryDetail} />
    <Stack.Screen name="Egg Detail" component={EggDetail} />
    <Stack.Screen name="Add Poultry" component={AddPoultry} />
    <Stack.Screen name="Add Egg" component={AddEgg} />
    <Stack.Screen name="EggRecord" component={Egg} />
 </Stack.Navigator>
</NavigationContainer>
  
  );
}

