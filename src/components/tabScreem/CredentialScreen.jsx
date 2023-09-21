import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CredentialScreen = () => {
  const handlerView = (name) => {
    if (name === "view") Alert.alert("Aca vas a poder ver la constancia");
    else {
      Alert.alert("Aca vas a poder descargar la constancia");
    }
  };
  return (
    <View style={style.container}>
      <View style={style.containerLogo}>
        <Image
          source={require("../../../util/LogoMutual.png")}
          style={style.logoUser}
        />
      </View>
      <View style={style.containerCredentialCart}>
        <View style={style.credentialCart}>
          <Text style={style.textButton}>TARJETA CREDENCIAL</Text>
        </View>
      </View>
      <View style={style.containerButtons}>
        <LinearGradient
          colors={["#0e3860", "#014083", "#0058ac"]}
          style={style.buttonView}
        >
          <TouchableOpacity
            name="View"
            style={style.buttonView}
            onPress={() => handlerView("view")}
          >
            <Text style={style.textButton}>Ver Constancia</Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          colors={["#0e3860", "#014083", "#0058ac"]}
          style={style.buttonView}
        >
          <TouchableOpacity
            name="download"
            style={style.buttonView}
            onPress={() => handlerView("download")}
          >
            <Text style={style.textButton}>Descargar Constancia</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};
export default CredentialScreen;

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#e6ffff",
    height: "100%",
  },
  containerLogo: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoUser: {
    width: 100,
    height: 100,
  },
  containerCredentialCart: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    height: 250,
    marginBottom: 15,
  },
  credentialCart: {
    borderRadius: 8,
    borderWidth: 1,
    width: "90%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3f48cc",
  },
  containerButtons: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView: {
    width: 280,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginVertical: 5,
  },
  textButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
