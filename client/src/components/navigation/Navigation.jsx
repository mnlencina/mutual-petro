import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../tabScreem/HomeScreen";
import SubsidiaryScreen from "../tabScreem/SubsidiaryScreen";
import CredentialScreen from "../tabScreem/CredentialScreen";
import MenuScreen from "../tabScreem/MenuScreen";
import LoginScreen from "../tabScreem/LoginScreen";
import { Octicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// const Stack = createStackNavigator

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#acd4ce",
        tabBarStyle: { backgroundColor: "#015cb5", height: 60 },
        tabBarActiveBackgroundColor: "#024f9d",
        tabBarLabelStyle: { marginBottom: 5 },
        tabBarIconStyle: { marginTop: 5 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerTitle: "Inicio",
          tabBarLabel: "Inicio",

          tabBarIcon: ({ color }) => {
            return <Octicons name="home" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Subsidiary"
        component={SubsidiaryScreen}
        options={{
          headerTitle: "Sucursales",
          tabBarLabel: "Sucursales",
          tabBarIcon: ({ color }) => {
            return <Octicons name="location" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Credential"
        component={CredentialScreen}
        options={{
          headerShown: false,
          headerTitle: "Credencial",
          tabBarLabel: "Credencial",
          tabBarIcon: ({ color }) => {
            return <Octicons name="id-badge" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          headerTitle: "Menu",
          tabBarLabel: "Menu",
          tabBarIcon: ({ color }) => {
            return <Octicons name="apps" size={25} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Navigator;
