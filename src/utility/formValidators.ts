import * as Yup from "yup";

export const contactValidationSchema = Yup.object({
    name: Yup.string()
        .required('Imię jest wymagane')
        .matches(/^\S+$/, 'Imię musi być jednym wyrazem'),
    email: Yup.string()
        .email('Nieprawidłowy adress e-mail')
        .required('Adres email jest wymagany'),
    message: Yup.string()
        .min(120, 'wiadomośc nie może być krótsza niż 120 znaków')
});

export const LoginValidationSchema = Yup.object({
    email: Yup.string()
        .email('Nieprawidłowy adress e-mail')
        .required('Adres email jest wymagany'),
    password: Yup.string()
        .min(6, 'Hasło jest za krótkie')
        .required('Hasło jest wymagane')
        .matches(/^\S*$/, 'Hasło nie może zawierać spacji')
});

export const RegisterValidationSchema = Yup.object({
    email: Yup.string()
        .email('Nieprawidłowy adress e-mail')
        .required('Adres email jest wymagany'),
    password: Yup.string()
        .min(6, 'Hasło jest za krótkie')
        .required('Hasło jest wymagane')
        .matches(/^\S*$/, 'Hasło nie może zawierać spacji'),
    confirmPassword: Yup.string()
        .min(6, 'Hasło jest za krótkie')
        .required('Hasło jest wymagane')
        .matches(/^\S*$/, 'Hasło nie może zawierać spacji')
        .oneOf([Yup.ref('password')], 'Podane hasła są różne')
});