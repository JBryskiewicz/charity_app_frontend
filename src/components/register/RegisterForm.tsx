'use client'
import {RegisterValidationSchema} from "@/utility/formValidators";
import {ErrorMessage, Field, Formik, FormikHelpers} from "formik";
import Link from "next/link";
import React from "react";
import {RegisterFormValues} from "@/utility/types";

export function RegisterForm() {

    function handleSubmit(values: RegisterFormValues, {setSubmitting, resetForm}: FormikHelpers<RegisterFormValues>) {
        console.log(values);
        resetForm();
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={{email: '', password: '', confirmPassword: ''}}
            validationSchema={RegisterValidationSchema}
            onSubmit={handleSubmit}
        >
            {({values, handleChange, handleSubmit, isSubmitting}) => (
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <div className="flex flex-col justify-center items-center mb-12 login-form register">
                        <label
                            htmlFor="email"
                            className="self-start mb-1 text-bold"
                        >
                            Email
                        </label>
                        <Field
                            id="email"
                            name="email"
                            type="text"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="abc@xyz.pl"
                        />
                        <ErrorMessage name="email" component="div" className="contact-form-error"/>
                        <label
                            htmlFor="password"
                            className="self-start mb-1 text-bold"
                        >
                            Hasło
                        </label>
                        <Field
                            id="password"
                            name="password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            placeholder="********"
                        />
                        <ErrorMessage name="password" component="div" className="contact-form-error"/>
                        <label
                            htmlFor="confirmPassword"
                            className="self-start mb-1 text-bold"
                        >
                            Powtórz hasło
                        </label>
                        <Field
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            placeholder="********"
                        />
                        <ErrorMessage name="confirmPassword" component="div" className="contact-form-error"/>
                    </div>
                    <div className="flex gap-72">
                        <Link
                            href="/login"
                            className="btn btn-login"
                        >
                            Zaloguj się
                        </Link>
                        <button
                            type="submit"
                            className="btn btn-login"
                            disabled={isSubmitting}
                        >
                            Załóż konto
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    );
}