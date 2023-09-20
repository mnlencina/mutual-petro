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

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#d8d1d1",
        tabBarStyle: { backgroundColor: "#015cb5", height: 60 },
        tabBarActiveBackgroundColor: "#013161",
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
            return <Octicons name="home" size={35} color={color} />;
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
            return <Octicons name="location" size={35} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Credential"
        component={CredentialScreen}
        options={{
          headerTitle: "Credenciales",
          tabBarLabel: "Credenciales",
          tabBarIcon: ({ color }) => {
            return <Octicons name="id-badge" size={35} color={color} />;
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
            return <Octicons name="apps" size={35} color={color} />;
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
