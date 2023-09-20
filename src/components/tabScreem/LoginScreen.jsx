import React from "react";
import {
  TouchableOpacity,
  TextInput,
  View,
  Text,
  ScrollView,
} from "react-native";
import { Formik, useField } from "formik";
import { StyleSheet } from "react-native-web";
import Constants from "expo-constants";
import { loginValidationSchema } from "../../validationSchema/validation";
import { LinearGradient } from "expo-linear-gradient";

const initialValues = {
  DNI: "",
  email: "",
};

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <TextInput
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {field.value && meta.error && (
        <Text style={style.error}>*{meta.error}</Text>
      )}
    </>
  );
};

const LoginScreen = () => {
  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight,
        backgroundColor: "#e6ffff",
      }}
    >
      <Text style={style.textTitle}>Mutual 12 de Septiembre</Text>

      <Text style={style.subTitle}>Trabajando por el bienestar general</Text>
      <ScrollView>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleSubmit }) => {
            return (
              <View style={style.container}>
                <View style={style.containerForm}>
                  <Text style={style.titleInput}>Iniciar Sesión</Text>

                  <FormikInputValue
                    name="DNI"
                    style={style.textInput}
                    placeholder="DNI..."
                    keyboardType="numeric"
                  />
                  <FormikInputValue
                    name="email"
                    style={style.textInput}
                    placeholder="E-mail..."
                  />
                  <LinearGradient
                    colors={["#0e3860", "#014083", "#0058ac"]}
                    style={style.buttom}
                  >
                    <TouchableOpacity
                      style={style.buttom}
                      onPress={handleSubmit}
                    >
                      <Text style={style.textButtom}>Ingresar</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              </View>
            );
          }}
        </Formik>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Text style={{ color: "#a3a3a3", fontWeight: "bold" }}>
            Conduccion
          </Text>
          <Text
            style={{
              fontSize: 40,

              color: "#a3a3a3",
            }}
          >
            Claudio Vidal
          </Text>
        </View>
      </ScrollView>
      <LinearGradient
        colors={["#0e3860", "#014083", "#01509b"]}
        style={style.base}
      ></LinearGradient>
    </View>
  );
};

export default LoginScreen;

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttom: {
    justifyContent: "center",
    alignItems: "center",
    width: 170,
    height: 40,
    borderRadius: 15,
    color: "#fff",
    marginHorizontal: 15,
    marginVertical: 15,
  },
  textButtom: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  textTitle: {
    backgroundColor: "#01caff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  subTitle: {
    backgroundColor: "#005eb0",
    fontWeight: "bold",
    color: "#fff",
    paddingVertical: 5,
    fontFamily: "satisfy",
  },
  containerForm: {
    backgroundColor: "#fff", //color temporal
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginTop: 200,
    width: 300,
    height: 350,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  titleInput: {
    // marginTop:
    marginBottom: 15,
    marginVertical: 5,
    fontSize: 25,
    fontWeight: "bold",
    color: "#565656",
  },
  textInput: {
    width: 250,
    fontSize: 16,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "#e6e6e6",
    borderColor: "#849d9a",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 15,
  },
  error: {
    color: "#ff000a",
    marginBottom: 10,
    marginTop: -8,
    borderColor: "#ff000a",
  },
  base: {
    height: 50,
  },
});
