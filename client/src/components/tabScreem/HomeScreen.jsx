import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const { navigate } = useNavigation();

  const handleNavigationToLogin = () => {
    Alert.alert("vas a salir del home");
    navigate("Login");
  };

  return (
    <View style={style.containerGeneral}>
      <Text>Home</Text>
      <TouchableOpacity
        style={style.container}
        onPress={handleNavigationToLogin}
      >
        <Text style={style.text}>Salir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  containerGeneral: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#bababa",
    height: "100%",
  },
  container: {
    marginHorizontal: 15,
    marginVertical: 15,
    width: 100,
    height: 30,
    borderRadius: 8,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
