'use client'
import Link from "next/link";
import React, {useState} from "react";
import {ErrorMessage, Field, Formik, FormikHelpers} from "formik";
import {LoginFormValues} from "@/utility/types";
import {LoginValidationSchema} from "@/utility/formValidators";
import {useRouter} from "next/navigation";
import {auth} from "@/firebase";
import {signInWithEmailAndPassword} from "@firebase/auth";

export function LoginForm() {
    const router = useRouter();
    const [loginError, setLoginError] = useState<string>('');

    async function handleSubmit(values: LoginFormValues, {setSubmitting, resetForm}: FormikHelpers<LoginFormValues>) {
        await signInWithEmailAndPassword(auth, values.email, values.password)
            .then(userCredential => {
                resetForm();
                setSubmitting(false);
                router.push('/');
            }).catch(error => {
                setLoginError('Hasło lub email są niepoprawne');
            })
    }

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={LoginValidationSchema}
            onSubmit={handleSubmit}
        >
            {({values, handleChange, handleSubmit, isSubmitting}) => (
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <div className="flex flex-col justify-center items-center mb-12 login-form">
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
                        <p className="contact-form-error">{loginError}</p>
                    </div>
                    <div className="flex gap-72">
                        <Link
                            href="/register"
                            className="btn btn-login"
                        >
                            Załóż konto
                        </Link>
                        <button
                            type="submit"
                            className="btn btn-login"
                            disabled={isSubmitting}
                        >
                            Zaloguj się
                        </button>
                    </div>
                </form>
            )}
        </Formik>
    );
}