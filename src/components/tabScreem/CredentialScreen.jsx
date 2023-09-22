import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Constants from "expo-constants";

const CredentialScreen = () => {
  const handlerView = (name) => {
    if (name === "view") Alert.alert("Aca vas a poder ver la constancia");
    else {
      Alert.alert("Aca vas a poder descargar la constancia");
    }
  };
  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.containerLogo}>
          <Image
            source={require("../../../util/logoAzul.png")}
            style={style.logoUser}
          />
        </View>
        <View style={style.containerCredentialCart}>
          <View style={style.credentialCart}>
            <Image
              source={require("../../../util/CardMutual.png")}
              style={{
                width: 380,
                height: 214,
              }}
            />
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
      </ScrollView>
    </View>
  );
};
export default CredentialScreen;

const style = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    justifyContent: "center",
    backgroundColor: "#e6ffff",
    height: "100%",
  },
  containerLogo: {
    marginTop: 20,
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
    // marginTop: 5,
    height: 250,
    marginBottom: 15,
  },
  credentialCart: {
    width: "90%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  containerButtons: {
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 15,
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
