export type Charity = {
    name: string;
    goal: string;
    tags: string[];
}

export type ContactFormValues = {
    name: string;
    email: string;
    message: string;
}

export type LoginFormValues = {
    email: string;
    password: string;
}

export interface RegisterFormValues extends LoginFormValues {
    confirmPassword: string;
}