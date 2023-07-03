import {Header} from "@/components/reusable/Header";
import {DecorativeImage} from "@/components/reusable/DecorativeImage";
import React from "react";
import {LoginForm} from "@/components/login/LoginForm";

function Login() {

    return (
        <>
            <Header isHome={false}/>
            <main className="w-full">
                <div className="flex flex-col justify-center items-center gap-8 login-box">
                    <h1 className="text-4xl">Zaloguj się</h1>
                    <DecorativeImage className={'mb-8 contact-decorative-img'}/>
                    <LoginForm />
                </div>
            </main>
        </>
    );
}

export default Login;