'use client'
import {Header} from "@/components/reusable/Header";
import {DecorativeImage} from "@/components/reusable/DecorativeImage";
import React, {useState} from "react";
import Link from "next/link";

function Login() {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        setEmail('');
        setPass('');
        // TODO once user panel is implemented, navigate to designed view
    }

    return (
        <>
            <Header isHome={false}/>
            <main className="w-full">
                <div className="flex flex-col justify-center items-center gap-8 login-box">
                    <h1 className="text-4xl">Zaloguj się</h1>
                    <DecorativeImage className={'mb-8 contact-decorative-img'}/>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
                        <div className="flex flex-col justify-center items-center mb-12 login-form">
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
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
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
                                value={pass}
                                onChange={(event) => setPass(event.target.value)}
                                placeholder="********"
                            />
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
                            >
                                Zaloguj się
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}

export default Login;