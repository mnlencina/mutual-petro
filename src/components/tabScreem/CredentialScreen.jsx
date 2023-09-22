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
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import { documentDirectory, moveAsync } from "expo-file-system";
import card from "../../../util/CardMutual.png";
import Data from "../../../util/datosDeUsuario";

const CredentialScreen = () => {
  const html = `
  <html>
  <body>
    <div>
    <img src="${card}" style="width:380px; height:214px";/>
      <h4>${Data.firstName} ${Data.lastName}</h4>
      <p>Cuil: ${Data.cuilt}</p>
      <p>DNI: ${Data.DNI}</p>
      <p>Vencimiento: xx/xx/xx</p>
    </div>
  </body>
</html>
`;

  const generatePdf = async () => {
    // personalizar nombre del archivo PDF
    const pathName = `ContanciaMutual.pdf`;

    const file = await printToFileAsync({
      html: html,
      base64: false,
    });
    const destinationUri = `${documentDirectory}${pathName}`;
    await moveAsync({ from: file.uri, to: destinationUri });
    await shareAsync(destinationUri);
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
              onPress={generatePdf}
            >
              <Text style={style.textButton}>Compartir Constancia</Text>
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
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
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
