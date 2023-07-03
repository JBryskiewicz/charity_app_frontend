import {Header} from "@/components/reusable/Header";
import {DecorativeImage} from "@/components/reusable/DecorativeImage";
import {RegisterForm} from "@/components/register/RegisterForm";
import React from "react";

function Register() {
    return (
        <>
            <Header isHome={false}/>
            <main className="w-full">
                <div className="flex flex-col justify-center items-center gap-8 login-box">
                    <h1 className="text-4xl">Załóż konto</h1>
                    <DecorativeImage className={'mb-8 contact-decorative-img'}/>
                    <RegisterForm/>
                </div>
            </main>
        </>
    );
}

export default Register