'use client'
import * as Yup from "yup";
import React from "react";
import {ErrorMessage, Field, Formik, FormikHelpers} from "formik";

const TEXTAREA_PLACEHOLDER = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

const contactValidationSchema = Yup.object({
    name: Yup.string()
        .required('Imię jest wymagane')
        .matches(/^\S+$/, 'Imię musi być jednym wyrazem'),
    email: Yup.string()
        .email('Nieprawidłowy adress e-mail')
        .required('Adres email jest wymagany'),
    message: Yup.string()
        .min(130, 'wiadomośc nie może być krótsza niż 130 znaków')
});

type FormValues = {
    name: string;
    email: string;
    message: string;
}

export function ContactForm() {

    async function handleSubmit(values: FormValues, {setSubmitting, setStatus, resetForm}: FormikHelpers<FormValues>) {
        console.log(values);
        setStatus('Wiadomość wysłana pomyślnie');
        resetForm();
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={{name: '', email: '', message: ''}}
            validationSchema={contactValidationSchema}
            onSubmit={handleSubmit}
        >
            {({values, handleChange, handleSubmit, isSubmitting, status}) => (
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="flex justify-between mb-8">
                        <div className="flex flex-col input-box">
                            <label
                                htmlFor="name"
                                className="text-bold"
                            >
                                Wpisz swoje imię:
                            </label>
                            <Field
                                name="name"
                                type="text"
                                placeholder="Krzysztof"
                                className="contact-form-input"
                                value={values.name}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="name" component="div" className="contact-form-error"/>
                        </div>
                        <div className="flex flex-col input-box">
                            <label
                                htmlFor="email"
                                className="text-bold"
                            >
                                Wpisz swój email:
                            </label>
                            <Field
                                id="email"
                                type="email"
                                placeholder="abc@xyz.pl"
                                className="contact-form-input"
                                value={values.email}
                                onChange={handleChange}
                            />
                            <ErrorMessage name="email" component="div" className="contact-form-error"/>
                        </div>
                    </div>
                    <div className="flex flex-col mb-10">
                        <label
                            htmlFor="email"
                            className="text-bold"
                        >
                            Wpisz swoją wiadomość:
                        </label>
                        <Field
                            as="textarea"
                            name="message"
                            id="message"
                            cols={65}
                            rows={4}
                            placeholder={TEXTAREA_PLACEHOLDER}
                            className="contact-form-input"
                            value={values.message}
                            onChange={handleChange}
                        />
                        <ErrorMessage name="message" component="div" className="contact-form-error"/>
                    </div>
                    <div className="flex justify-end">
                        {status && <div className="mr-44 contact-form-success">{status}</div>}
                        <button
                            type="submit"
                            className="btn btn-form"
                            disabled={isSubmitting}
                        >
                            Wyślij
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    );
}