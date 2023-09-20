import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  DNI: yup
    .string()
    .min(8, "Minimo 8 caracteres")
    .max(8, "Maximo 10 caracteres")
    .required("DNI es obligatorio"),
  password: yup
    .string()
    .min(8, "Minimo 8 carateres")
    .max(15, "Maximo 15 caracteres")
    .required("Contraseña obligatoria"),
});
