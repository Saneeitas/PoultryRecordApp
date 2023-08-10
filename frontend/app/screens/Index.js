import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import UserDetailScreen from './PoultryDetail';
import SignUp from './SignUp';
import AddUserScreen from './AddPoultry';
import UserScreen from './Poultry';
import ExitsTab from './ExitsTab';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


function UserTabStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Users" component={UserScreen} />
      <Stack.Screen name="UserDetails" component={UserDetailScreen} />
    </Stack.Navigator>
  );
}

export default function Index() {

  return (
   
      <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Add') {
            iconName = 'add';
          } else if (route.name === 'Exits') {
            iconName = 'exit';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarLabel: () => null
      })}
        
      >
        <Tab.Screen name="Add" component={AddUserScreen} />
        <Tab.Screen name="Home" component={UserTabStack} />
        <Tab.Screen name="Exits" component={ExitsTab} /> 
      </Tab.Navigator>


   
  );
}

