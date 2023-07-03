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