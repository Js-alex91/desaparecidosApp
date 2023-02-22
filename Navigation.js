import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Home } from "./screens/home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "native-base";

const Tab = createBottomTabNavigator()


const Addmissing = () => {
  return(
    <Text>Add Missing</Text>
  )
}

const About = () => {
  return(
    <Text>About</Text>
  )
}

const MyTabs = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen
        name="Add Missing"
        component={Addmissing}
        options={{
          headerShown: false,
          tabBarLabel: 'Reportar Desaparecido',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-plus" size={24} color="black" />
          ),
        }}  
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-variant" size={24} color={color} />
          ),
        }}
      />
      
      <Tab.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
          tabBarLabel: 'Sobre Nosotros',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information" size={24} color="black" />
          ),
        }}
      />

    </Tab.Navigator>
  )
}


const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}

export default Navigation