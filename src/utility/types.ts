import {Dispatch, SetStateAction} from "react";

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
    date: string;
    time: string;
    courierNote: string;
}

export type DonationFormProps = {
    step: number;
    setStep: Dispatch<SetStateAction<number>>
}

export interface DonationNavButtonProps extends DonationFormProps {
    isFirst: boolean;
    isValidated?: boolean;
}