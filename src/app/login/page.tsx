'use client'
import {Header} from "@/components/reusable/Header";
import {DecorativeImage} from "@/components/reusable/DecorativeImage";
import React from "react";

function Login() {

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
    }

    return (
        <>
            <Header isHome={false}/>
            <main className="w-full">
                <div className="flex flex-col justify-center items-center gap-8 login-box">
                    <h1 className="text-4xl">Zaloguj się</h1>
                    <DecorativeImage className={'mb-8 contact-decorative-img'}/>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col justify-center items-center mb-6 login-form"

                    >
                        <label
                            htmlFor="email"
                            className="self-start mb-1 text-bold"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="abc@xyz.pl"
                        />
                        <label
                            htmlFor="password"
                            className="self-start mb-1 text-bold"
                        >
                            Hasło
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="current-password"
                        />
                    </form>
                    <div className="flex gap-72">
                        <a
                            href=""
                            className="btn btn-login"
                        >
                            Załóż konto
                        </a>
                        <button
                            type="submit"
                            className="btn btn-login"
                        >
                            Zaloguj się
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Login;