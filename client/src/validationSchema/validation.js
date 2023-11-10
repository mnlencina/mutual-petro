import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  DNI: yup
    .string()
    .min(7, "Minimo 7 caracteres")
    .max(8, "Maximo 10 caracteres")
    .required("DNI es obligatorio"),
  email: yup
    .string()
    .email("Debe ser un email")
    .min(6, "Minimo 6 caracteres")
    .max(20, "Maximo 20 caracteres")
    .required("Contraseña obligatoria"),
});
