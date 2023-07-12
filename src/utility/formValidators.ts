import * as Yup from "yup";

export const contactValidationSchema = Yup.object({
    name: Yup.string()
        .required('Imię jest wymagane')
        .matches(/^\S+$/, 'Imię musi być jednym wyrazem'),
    email: Yup.string()
        .email('Nieprawidłowy adress e-mail')
        .required('Adres email jest wymagany'),
    message: Yup.string()
        .required('Wiadomość nie może być pusta')
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

export function postalCodeValidator(field: string): boolean {
    const pattern: RegExp = /^\d{2}-\d{3}$/;
    if (pattern.test(field)) {
        return true;
    }
    return false;
}

export function phoneNumberValidator(field: string): boolean {
    const pattern: RegExp = /^(\d[-\s]?){8}\d$/;
    if(pattern.test(field)) {
        return true;
    }
    return false;
}

export function dateValidator(field: string): boolean {
    const pattern: RegExp = /^(0[1-9]|[1-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.\d{4}$/;
    if(!pattern.test(field)) {
        return false;
    }

    const inputDate: Date = new Date(field.split('.').reverse().join('-'));
    const currentDate: Date = new Date();

    return inputDate > currentDate;
}

export function timeValidator(field: string): boolean {
    const pattern: RegExp = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;
    if(pattern.test(field)) {
        return true;
    }
    return false;
}