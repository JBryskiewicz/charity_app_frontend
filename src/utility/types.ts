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

export type Donation = {
    category: string;
    quantity: string;
    location: string;
    charityTargets: string[];
    specifiedOrganization?: string;
    street: string;
    city: string;
    postCode: string;
    phoneNumber: string;
    Date: Date;
    Time: Date;
    courierNote: string;
}